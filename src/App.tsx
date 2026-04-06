import { useState, useCallback } from "react";
import { Header } from "./components/layout";
import { Footer } from "./components/layout";
import {
  Hero,
  CitySelector,
  Testimonials,
  Thanks,
} from "./components/sections";
import { Preloader } from "./components/ui";
import { usePreloaderAnimation, usePageAnimations } from "./hooks";

function App() {
  const [pageReady, setPageReady] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPageReady(true);
  }, []);

  usePreloaderAnimation({ onComplete: handlePreloaderComplete });
  usePageAnimations(pageReady);

  return (
    <>
      <Preloader />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />

          <main>
            <Hero />

            <div
              className="relative z-[4] bg-cover bg-center bg-[#0c0102]"
              style={{
                backgroundImage: "url('/projeto imagens/bg-sec2.webp')",
              }}
            >
              <CitySelector />
              <Testimonials />
            </div>

            <Thanks />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
