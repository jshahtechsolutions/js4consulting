import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Project1,
    Articles,
    // ArticleFeed,
    Contact,
    Navigation,
    Footer,
    JCMarkDown,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
function App() {
    const [mode, setMode] = useState<string>('dark');
    const [content, setContent] = useState<string>('');
    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project1 />
                <Articles />
                {/* <ArticleFeed/> */}
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;
