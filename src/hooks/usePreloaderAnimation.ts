import { useEffect } from "react";
import gsap from "gsap";

interface UsePreloaderAnimationProps {
  onComplete: () => void;
}

export function usePreloaderAnimation({
  onComplete,
}: UsePreloaderAnimationProps) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete() {
        gsap.to("#preloader", {
          opacity: 0,
          display: "none",
          onComplete,
        });
      },
    });

    tl.to("#preloader path", {
      duration: 1,
      strokeDashoffset: 0,
    });

    tl.to("#preloader path", {
      fill: "rgb(112, 1, 1)",
      duration: 0.5,
      strokeDashoffset: 0,
    });
  }, [onComplete]);
}
