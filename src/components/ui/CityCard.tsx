import type { City } from "../../types";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <div
      className="
        bg-cover aspect-video p-[10px]
        flex justify-between items-end
        w-[32%] rounded-[7px]
      "
      style={{ backgroundImage: `url(${city.backgroundImage})` }}
    >
      <h3 className="font-normal">{city.name}</h3>
      <p className="text-sm">INGRESSOS DISPONÍVEIS</p>
    </div>
  );
}
