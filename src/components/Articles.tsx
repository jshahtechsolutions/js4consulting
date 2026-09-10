import cpDocExtract from '../assets/images/articles/cpDocExtract.png';
import myMarkdownFileUrl from '../mdDocs/cpDocExtract.md'; // Normal import
import '../assets/styles/Articles.scss';
import JCMarkDown from '../components/JCMarkDown';
function Articles() {
    return(
        <div className="articles-container" id="articles">
            <h1>Articles</h1>
            <div className="articles-grid">
                <div className="article">
                    <img src={cpDocExtract} className="zoom" alt="thumbnail" width="100%"/>
                </div>
                <div className="article">
                    <JCMarkDown filePath={myMarkdownFileUrl} />
                </div>
            </div>
        </div>
    );
}

export default Articles;
