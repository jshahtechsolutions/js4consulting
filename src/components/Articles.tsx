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
import '../assets/styles/Articles.scss';

function Articles() {
    return(
        <div className="articles-container" id="articles">
            <h1>Articles</h1>
            <div className="articles-grid">
                <div className="article">
                    <img src={cpDocExtract} className="zoom" alt="thumbnail" width="100%"/>
                </div>
                <div className="article">
                    <h2>Turn Copilot Studio Prompts into a Document Extraction Service</h2>
                    <p>A practical workaround for extracting text from SharePoint document attachments in Power Automate when AI Builder document processing is not available..</p>
                    <p>Copilot Studio | Power Automate | SharePoint | Document Extraction | Power Platform | Microsoft 365 | AI Automation | Code Interpreter</p>
                </div>
            </div>
        </div>
    );
}

export default Articles;
