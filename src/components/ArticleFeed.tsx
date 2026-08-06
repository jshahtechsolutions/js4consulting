import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import '../assets/styles/ArticleFeed.scss';


interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  bodyContent: string;
}


export default function ArticleFeed() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  useEffect(() => {
    // // Vite built-in feature: scans directory and loads all .md files as raw strings
    // const modules = (import.meta as any).glob('../assets/mdDocs/*.md', { query: '?raw', eager: true });

    // Webpack's native directory scanner (requires no extra configurations)
    const markdownContext = (require as any).context('../assets/mdDocs', false, /\.md$/);
    //const loadedArticles = Object.keys(modules).map((path, index) => {

    const loadedArticles = markdownContext.keys().map((key: string, index: number) => {
        const module = markdownContext(key);
        console.log(module);
        // Fix 1: Safely extract the raw string whether it's a default export or a direct string
        const rawContent = typeof module === 'string' ? module : (module?.default || '');
        const slug = key.replace('../assets/mdDocs/', '').replace('.md', '');
        // Fix 2: If the file is completely empty or missing, skip processing
        if (!rawContent) {
            return { slug, title: 'Untitled', date: '', summary: '', bodyContent: '' };
        }

        // Simple custom metadata/frontmatter parser
        const lines = rawContent.split('\n');
        //console.log(rawContent);
        let title = slug;
        let date = '';
        let summary = '';
        let bodyStartIdx = 0;

        if (lines[0].trim() === '---') {
            let endIdx = lines.indexOf('---', 1);
            if (endIdx !== -1) {
                bodyStartIdx = endIdx + 1;
                const frontmatterLines = lines.slice(1, endIdx);
                frontmatterLines.forEach((line: string) => {
                    // Ensure the line is defined and not just empty spaces
                    if (!line || !line.trim()) return;

                    // Ensure the line actually contains a colon before trying to split it
                    if (!line.includes(':')) return;
                    const [key, ...val] = line.split(':');
                    const cleanVal = val.join(':').replace(/['"]/g, '').trim();
                    if (key.trim() === 'title') title = cleanVal;
                    if (key.trim() === 'date') date = cleanVal;
                    if (key.trim() === 'summary') summary = cleanVal;
                });
            }
        }
        //console.log(lines);
        const bodyContent = lines.slice(bodyStartIdx).join('\n');

        return { slug, title, date, summary, bodyContent };
    });

    // Sort articles by date descending
    //loadedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setArticles(loadedArticles);

    // Default to displaying the first article fully
    if (loadedArticles.length > 0) {
      setActiveArticle(loadedArticles[0]);
    }
  }, []);

  return (
    <div className="blog-layout">
      {/* Sidebar: Navigation List of all articles */}
      <aside className="sidebar">
        <h3>Articles ({articles.length})</h3>
        <ul className="article-list">
          {articles.map((art) => (
            <li
              key={art.slug}
              className={`list-item ${activeArticle?.slug === art.slug ? 'active' : ''}`}
              onClick={() => setActiveArticle(art)}
            >
              <h4>{art.title}</h4>
              <small>{art.date}</small>
              <p>{art.summary}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Pane: Renders selected article */}
      <main className="content-pane">
        {activeArticle ? (
          <article className="prose">
            <span className="meta-date">{activeArticle.date}</span>
            <Markdown>{activeArticle.bodyContent}</Markdown>
          </article>
        ) : (
          <p>Loading articles...</p>
        )}
      </main>
    </div>
  );
}
