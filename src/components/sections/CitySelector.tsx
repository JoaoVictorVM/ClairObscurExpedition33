import { cities } from "../../data";
import { Button } from "../ui";
import { CityCard } from "../ui";

export function CitySelector() {
  return (
    <section className="px-[8vw] pt-[2vw] flex flex-col">
      <div className="flex items-center justify-between">
        <h2 className="textosplit text-[2vw] font-light tracking-[5px] text-white">
          ESCOLHA SUA CIDADE
        </h2>
        <Button>
          COMPRAR INGRESSOS
          <img src="/projeto imagens/seta-botao.svg" alt="seta" />
        </Button>
      </div>

      <div className="flex justify-between pt-[2vw] pb-[2vw] rounded-[10px]">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </section>
  );
}
