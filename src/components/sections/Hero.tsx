import { Button } from "../ui";
import { ResponsivePicture } from "../ui";

export function Hero() {
  return (
    <section
      className="
      hero w-full h-screen bg-cover
      flex justify-between items-start
      px-[8vw] py-[8vw] relative
    "
    >
      <ResponsivePicture
        desktopSrc="/imagens/bg-hero.png"
        mobileSrc="/imagens/bg-mobile.png"
        alt="fundo"
        className="w-full h-full absolute z-[1] left-0 top-0"
        dataSpeed={0.7}
      />

      <picture className="pessoinhas w-full h-full absolute z-[1] left-0 top-0">
        <source
          media="(max-width: 600px)"
          srcSet="/imagens/bg-pessoas-mobile.png"
        />
        <img
          src="/imagens/bg-pessoas.png"
          alt="pessoas"
          className="w-full h-full object-cover absolute"
        />
      </picture>

      <div
        className="
          before:content-[''] before:bg-gradient-to-b before:from-transparent before:to-[#0c0102]
          before:w-full before:h-full before:absolute before:z-[2] before:left-0 before:top-0
        "
      />

      <div className="titulo mt-[4vw] z-[3] text-start">
        <h3 className="font-light tracking-[12px] text-[25px] text-white">
          THE EXPERIENCE
        </h3>
        <h1 className="text-[3.5vw] max-w-[20vw] font-['Banguiat'] text-white">
          STRANGER THINGS
        </h1>
      </div>

      <div className="chamado mt-[4vw] z-[3] flex flex-col items-end text-[2vw] max-w-[27vw] justify-end text-end">
        <p className="textosplit text-white">
          Descubra os seus poderes e vire o herói de sua própria aventura!
        </p>
        <Button>
          ESCOLHA SUA CIDADE
          <img src="/projeto imagens/seta-botao.svg" alt="seta-botao" />
        </Button>
      </div>
    </section>
  );
}
