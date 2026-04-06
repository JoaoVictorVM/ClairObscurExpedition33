import { thanksCities } from "../../data";

export function Thanks() {
  return (
    <section className="agradecimentos px-[8vw] text-center z-[8] bg-[#0c0102]">
      <h2 className="textosplit pt-[2vw] pb-[2vw] text-[2vw] font-light tracking-[5px] text-white">
        OBRIGADO POR SE JUNTAR A NÓS NESTA AVENTURA EM:
      </h2>
      <ul className="flex justify-between pb-[8vw]">
        {thanksCities.map((city) => (
          <li key={city} className="list-none text-white">
            {city}
          </li>
        ))}
      </ul>
    </section>
  );
}
