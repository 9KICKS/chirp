import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import "../styles/LoadingPage.css";
import { ReactComponent as Settings } from "../../../assets/images/Settings.svg";
import { ReactComponent as Chat } from "../../../assets/images/Chat.svg";

function LoadingToHome() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const HomePage = () => (
        <div className="home-page">
            <div className="home-page-header">
                <nav className="header">
                    <Settings /> CHIRP <Chat />
                </nav>
            </div>
        </div>
    );

    const Loading = () => (
        <div id="loading-page">
            <div id="load">
                <div>G</div>
                <div>N</div>
                <div>I</div>
                <div>D</div>
                <div>A</div>
                <div>O</div>
                <div>L</div>
            </div>
        </div>
    );
    return showLoading ? <Loading /> : <HomePage />;
}

export default LoadingToHome;
