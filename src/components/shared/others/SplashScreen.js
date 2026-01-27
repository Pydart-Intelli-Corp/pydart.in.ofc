"use client";
import { useEffect, useState } from "react";
import "./SplashScreen.scss";

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Prevent scrolling while splash is visible
        document.body.style.overflow = "hidden";

        const hideSplash = () => {
            setFadeOut(true);
            setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = "";
            }, 600);
        };

        // Hide splash when page is fully loaded
        if (document.readyState === "complete") {
            hideSplash();
        } else {
            window.addEventListener("load", hideSplash);
        }

        // Fallback: force hide after 3 seconds max
        const fallbackTimer = setTimeout(hideSplash, 3000);

        return () => {
            window.removeEventListener("load", hideSplash);
            clearTimeout(fallbackTimer);
            document.body.style.overflow = "";
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`pydart-splash ${fadeOut ? "fade-out" : ""}`}>
            <div className="minimal-loader">
                <div className="ring-outer"></div>
                <div className="ring-inner"></div>
            </div>
            <div className="loading-text">Please wait...</div>
        </div>
    );
}
