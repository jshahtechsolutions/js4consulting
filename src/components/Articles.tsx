import cpDocExtract from '../assets/images/articles/cpDocExtract.png';
import githubActionForPages from '../assets/images/articles/githubActionForPages.jpg';
import cpDocExtractUrl from '../mdDocs/cpDocExtract.md';
import githubActionForPagesFileUrl from '../mdDocs/githubActionForPages.md';
import '../assets/styles/Articles.scss';
import JCMarkDown from '../components/JCMarkDown';
function Articles() {
    return(
        <div className="articles-container" id="articles">
            <h1>Articles</h1>
            <div className="articles-grid">
                <div className="article">
                    <img src={cpDocExtract} className="zoom" alt="thumbnail" />
                     <div className="article-content"><JCMarkDown filePath={cpDocExtractUrl} /></div>
                </div>
                <div className="article">
                    <img src={githubActionForPages} className="zoom" alt="thumbnail" />
                     <div className="article-content"><JCMarkDown filePath={githubActionForPagesFileUrl} /></div>
                </div>
            </div>
        </div>
    );
}

export default Articles;
