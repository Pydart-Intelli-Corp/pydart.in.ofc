"use client";
import animateInvertText from "@/utils/animateInvertText";
import arrangeAnim from "@/utils/arrangeAnim";
import arrangeAnim2 from "@/utils/arrangeAnim2";
import fadeInRightOnScrollAnim from "@/utils/fadeInRightOnScrollAnim";
import { useGSAP } from "@/utils/gsap.config";
import initSmoothScroller from "@/utils/initSmoothScroller";
import onePageNavAnim from "@/utils/onePageNavAnim";
import progressBar from "@/utils/progressBar";
import sidebarSticky from "@/utils/sidebarSticky";
import smoothScrollToTop from "@/utils/smoothScrollToTop";
import textReavealAnim from "@/utils/textReavealAnim";
import titleAnim from "@/utils/titleAnim";
import titleAnim2 from "@/utils/titleAnim2";
import titleAnim3 from "@/utils/titleAnim3";
import tjImageParallex from "@/utils/tjImageParallex";
import tjLeftSwipeAnimation from "@/utils/tjLeftSwipeAnimation";
import tjMagicCursorAnimation from "@/utils/tjMagicCursorAnimation";
import tjProgressAnimation from "@/utils/tjProgressAnimation";
import tjRightSwipeAnimation from "@/utils/tjRightSwipeAnimation";
import tjScrollSlider from "@/utils/tjScrollSlider";
import tjStackAnimation from "@/utils/tjStackAnimation";
import tjStackAnimation2 from "@/utils/tjStackAnimation2";
import tjStackAnimation3 from "@/utils/tjStackAnimation3";
import tjZoomInScroll from "@/utils/tjZoomInScroll";
import { useEffect } from "react";
const ClientWrapper = () => {
    useEffect(() => {
        import("wow.js").then(({ default: WOW }) => {
            new WOW().init();
        });
        smoothScrollToTop();
        const cleanup = tjMagicCursorAnimation();
        return () => {
            if (cleanup) cleanup();
        };
    }, []);
    useGSAP((context, contextSafe) => {
        initSmoothScroller();
        tjRightSwipeAnimation();
        tjLeftSwipeAnimation();
        titleAnim();
        titleAnim2();
        titleAnim3();
        textReavealAnim();
        sidebarSticky();
        arrangeAnim();
        arrangeAnim2();
        animateInvertText();
        fadeInRightOnScrollAnim();
        onePageNavAnim(contextSafe);
        progressBar();
        tjStackAnimation();
        tjScrollSlider();
        tjStackAnimation2();
        tjImageParallex();
        tjProgressAnimation();
        tjZoomInScroll();
        tjStackAnimation3();
    });
    return null;
};

export default ClientWrapper;
