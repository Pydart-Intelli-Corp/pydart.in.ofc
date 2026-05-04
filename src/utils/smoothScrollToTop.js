import { gsap } from "@/utils/gsap.config";

const HASH_SCROLL_OFFSET = 120;

const scrollToHashTarget = hash => {
  if (!hash) {
    return false;
  }

  const targetId = hash.replace(/^#/, "");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return false;
  }

  gsap.to(window, {
    duration: 0.6,
    ease: "power2.out",
    scrollTo: {
      y: targetElement,
      offsetY: HASH_SCROLL_OFFSET,
    },
  });

  return true;
};

const smoothScrollToTop = () => {
  const links = document.querySelectorAll('a[href*="#"]');
  const cleanupFns = [];

  const syncInitialHash = () => {
    if (!window.location.hash) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToHashTarget(window.location.hash);
      window.setTimeout(() => scrollToHashTarget(window.location.hash), 150);
      window.setTimeout(() => scrollToHashTarget(window.location.hash), 500);
    });
  };

  syncInitialHash();

  links.forEach(link => {
    const onClick = event => {
      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const targetUrl = new URL(href, window.location.href);

      if (!targetUrl.hash || targetUrl.origin !== window.location.origin) {
        return;
      }

      if (targetUrl.pathname !== window.location.pathname) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", `${targetUrl.pathname}${targetUrl.hash}`);

      if (!scrollToHashTarget(targetUrl.hash)) {
        gsap.to(window, {
          duration: 0.4,
          ease: "power2.out",
          scrollTo: { y: 0 },
        });
      }
    };

    link.addEventListener("click", onClick);
    cleanupFns.push(() => link.removeEventListener("click", onClick));
  });

  return () => {
    cleanupFns.forEach(cleanup => cleanup());
  };
};

export default smoothScrollToTop;
