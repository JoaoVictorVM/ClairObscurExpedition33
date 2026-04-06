import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimations(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    gsap.from(".hero", { opacity: 0 });

    gsap.from("picture", { y: -70, duration: 1 });

    gsap.fromTo(".pessoinhas", { y: 70 }, { y: 0, duration: 1 });

    gsap.from(".cidades > div", {
      y: 50,
      opacity: 0,
      duration: 1,
      filter: "blur(20px)",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".cidades > div",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true,
      },
    });

    gsap.from(".agradecimento > ul > li", {
      opacity: 0,
      x: 50,
      filter: "blur(20px)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "li",
        start: "0% 80%",
        end: "100% 50%",
        scrub: true,
      },
    });

    gsap.from("footer", {
      y: "-30%",
      scrollTrigger: {
        trigger: "footer",
        scrub: true,
        end: "100% 100%",
      },
    });

    const grupoTextoSplit = document.querySelectorAll(".textosplit");

    grupoTextoSplit.forEach((elemento) => {
      gsap.from(elemento, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: elemento,
        },
      });
    });
  }, [enabled]);
}
