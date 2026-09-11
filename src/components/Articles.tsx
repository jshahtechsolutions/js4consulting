import React, { useState } from 'react';
import cpDocExtract from '../assets/images/articles/cpDocExtract.png';
import githubActionForPages from '../assets/images/articles/githubActionForPages.jpg';
import cpDocExtractUrl from '../mdDocs/cpDocExtract.md';
import githubActionForPagesFileUrl from '../mdDocs/githubActionForPages.md';
import '../assets/styles/Articles.scss';
import JCMarkDown from '../components/JCMarkDown';
function Articles() {

    const articlesList = [
        {
            id: 1,
            image: cpDocExtract,
            markdownUrl: cpDocExtractUrl,
            alt: "Thumbnail 1"
        },
        {
            id: 2,
            image: githubActionForPages,
            markdownUrl: githubActionForPagesFileUrl,
            alt: "Thumbnail 2"
        }
    ];

    // State to track the currently visible article index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation handler functions
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? articlesList.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === articlesList.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Safety check if array is empty
    if (articlesList.length === 0) return null;

    // Get the current active article data
    const currentArticle = articlesList[currentIndex];


    return (
        <div className="articles-container" id="articles">
            <h1>Articles</h1>
            {/* Carousel structural wrapper */}
            <div className="carousel-wrapper">
                {/* Navigation Button: Previous */}
                <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous Article">
                &#10094; {/* Unicode character for left arrow '<' */}
                </button>
                {/* <div className="articles-grid">

                </div> */}
                <div className="article active-slide">
                            <img src={currentArticle.image} className="zoom" alt={currentArticle.alt}  />
                            <div className="article-content"><JCMarkDown filePath={currentArticle.markdownUrl} /></div>
                    </div>
                {/* Navigation Button: Next */}
                <button className="carousel-btn next" onClick={handleNext} aria-label="Next Article">
                &#10095; {/* Unicode character for right arrow '>' */}
                </button>
            </div>
        </div>
    );
}

export default Articles;
