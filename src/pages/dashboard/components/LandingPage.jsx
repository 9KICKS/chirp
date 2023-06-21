import React from "react";
import Lottie from "lottie-react";
import "../styles/LandingPage.css";
import light_mode from "../../../assets/images/LightModeWebView.svg";
import dark_mode from "../../../assets/images/DarkModeWebView.svg";
import first_text from "../../../assets/images/FirstText.svg";
import first_sticker from "../../../assets/images/FirstSticker.svg";
import voice_note from "../../../assets/images/VoiceNote.svg";
import second_sticker from "../../../assets/images/SecondSticker.svg";
import last_text from "../../../assets/images/LastText.svg";
import animation from "../../../assets/animations/Chat-Logo-With-Three-Dots.json";


function LandingPage() {
    return (
        <div className="chirp-landing-page">
            <div className="chirp logo section">
                <h1 className="chirp-landing-page-logo">CHIRP</h1>
                <Lottie id="chirp-animation" animationData={animation}/>
            </div>
            <img className="light-mode" src={light_mode} alt="light-mode"/>
            <img className="dark-mode" src={dark_mode} alt="dark-mode"/>
            <div className="chirp-landing-page-info-section">
                <div className="chirp-chat-example">
                    <img className="chat" src={first_text} alt="first-text"/>
                    <img className="chat" src={first_sticker} alt="first-sticker"/>
                    <img className="chat" src={voice_note} alt="voice-note"/>
                    <img className="chat" src={second_sticker} alt="second-sticker"/>
                    <img className="chat" src={last_text} alt="last-text"/>
                </div>
                <h1>CHAT. CONNECT. CHIRP</h1>
            </div>
            <div className="authentication">
                <button className="sign-up-button" onClick={() => window.location.href="/register"}>Register</button>
                <button className="sign-in-button" onClick={() => window.location.href="/login"}>Login</button>
            </div>
        </div>
    );
}

export default LandingPage;