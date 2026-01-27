"use client";
import { useEffect, useState } from "react";
import "./splash-screen.scss";

export default function Loading() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading completion
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`pydart-splash ${isLoaded ? "fade-out" : ""}`}>
            <div className="splash-overlay"></div>
            <div className="splash-content">
                <div className="splash-logo-container">
                    {/* Animated pulse circle */}
                    <div className="pulse-ring"></div>
                    <div className="pulse-ring pulse-ring-delayed"></div>
                    
                    {/* Logo */}
                    <div className="splash-logo">
                        <img src="/logo/pydart_logo.png" alt="PyDart" />
                    </div>
                </div>

                {/* Tagline */}
                <div className="splash-tagline">
                    <span className="tagline-text">Made in India.</span>
                    <span className="tagline-text tagline-text-accent"> Made for the World.</span>
                </div>

                {/* Subtle ALTRAS-1 mention */}
                <div className="splash-subtitle">
                    ALTRAS-1 Robotic Patient Transfer System
                </div>

                {/* Loading indicator */}
                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

                {/* Medical cross accent */}
                <div className="medical-accent">
                    <div className="cross-vertical"></div>
                    <div className="cross-horizontal"></div>
                </div>
            </div>
        </div>
    );
}
