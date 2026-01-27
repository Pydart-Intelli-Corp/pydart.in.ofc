"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon() {
  const bgRef = useRef(null);

  // 🔧 SPEED CONTROLS
  const BACKGROUND_SHIFT_DURATION = 28;
  const WAVE_ANIMATION_DURATION = 6;
  const ENTRANCE_DURATION = 1.4;

  useEffect(() => {
    // Background gradient shift
    gsap.to(bgRef.current, {
      backgroundPosition: "100% 50%",
      duration: BACKGROUND_SHIFT_DURATION,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Abstract line motion
    gsap.to(".wave", {
      y: 16,
      duration: WAVE_ANIMATION_DURATION,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 1.6,
    });

    // Entrance animations
    gsap.from(".glass-circle", {
      scale: 0.9,
      opacity: 0,
      duration: ENTRANCE_DURATION,
      ease: "power3.out",
    });

    gsap.from(".brand-block", {
      y: 18,
      opacity: 0,
      delay: 0.9,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".contact-info", {
      y: 14,
      opacity: 0,
      delay: 1.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <main
      ref={bgRef}
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px at 20% 30%, #114a4e 0%, #0b2f33 45%, #071b1d 100%)",
        backgroundSize: "200% 200%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
      }}
    >
      {/* 🌊 Abstract lines */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <path className="wave" d="M0,280 C320,200 620,380 940,280 1200,200 1440,320 1440,320"
          fill="none" stroke="#8fe3dc" strokeWidth="1" />
        <path className="wave" d="M0,440 C320,360 620,540 940,440 1200,360 1440,480 1440,480"
          fill="none" stroke="#8fe3dc" strokeWidth="1" />
        <path className="wave" d="M0,600 C320,520 620,700 940,600 1200,520 1440,640 1440,640"
          fill="none" stroke="#8fe3dc" strokeWidth="1" />
      </svg>

      {/* 🎯 Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        {/* 🔮 Glassmorphic Circle (IMAGE ONLY) */}
        <div
          className="glass-circle"
          style={{
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            margin: "0 auto 2.2rem",
            position: "relative",
            overflow: "hidden",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
          }}
        >
          {/* Image */}
          <img
            src="/images/coming-soon/soon.png"
            alt="Pydart launch visual"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "contrast(1.05) brightness(1.05)",
            }}
          />

          {/* 🔆 Inner clipped light */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 35%, rgba(143,227,220,0.25), transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Inner glass edge */}
          <div
            style={{
              position: "absolute",
              inset: "6px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* 🏷️ Brand */}
        <div className="brand-block">
          <div
            style={{
              fontSize: "1.3rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: "1.6rem",
            }}
          >
            Pydart Intelli Corp
          </div>

          <div
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.85,
              marginBottom: "1.6rem",
            }}
          >
            Innovate. Integrate. Inspire
          </div>
        </div>

        {/* 📞 Interactive Contact */}
        <div
          className="contact-info"
          style={{
            fontSize: "0.85rem",
            opacity: 0.7,
            lineHeight: "1.9",
          }}
        >
          <a
            href="tel:+919188934763"
            style={{
              display: "inline-block",
              color: "inherit",
              textDecoration: "none",
              marginBottom: "0.3rem",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            +91 91889 34763
          </a>
          <br />
          <a
            href="mailto:info@pydart.com"
            style={{
              display: "inline-block",
              color: "inherit",
              textDecoration: "none",
              transition: "opacity 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            info@pydart.com
          </a>
        </div>
      </div>
    </main>
  );
}
