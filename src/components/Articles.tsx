import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
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
