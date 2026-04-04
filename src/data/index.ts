import type { City, Testimonial } from "../types/index";

export const cities: City[] = [
  {
    id: "sidney",
    name: "Sidney",
    backgroundImage: "/projeto imagens/card1.webp",
  },
  {
    id: "mexico",
    name: "Cidade do México",
    backgroundImage: "/projeto imagens/card2.webp",
  },
  {
    id: "islands",
    name: "Yas Island",
    backgroundImage: "/projeto imagens/card3.webp",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "nbc",
    image: "/projeto imagens/img-dep1.webp",
    imageAlt: "nbc-logo",
    text: '"Guests are immersed into an original "Stranger Things" storyline... [it] combines the special effects of a 3D Universal Studios ride with a telekinetic escape room."',
  },
  {
    id: "fox",
    image: "/projeto imagens/img-dep2.webp",
    imageAlt: "fox-logo",
    text: '"Immerse yourself on your own adventure with Eleven, Michael, Dustin, Lucas, Max and Will for a very special episode starring none other than you."',
  },
  {
    id: "sf",
    image: "/projeto imagens/img-dep3.webp",
    imageAlt: "sf-logo",
    text: '"The Stranger Things Experience is a scary endearing, hilarious, and joyous celebration of everything we already love about the show."',
  },
];

export const thanksCities: string[] = [
  "Sidney",
  "Rio de Janeiro",
  "São Paulo",
  "Los Angeles",
  "Nova Iorque",
  "São Francisco",
  "Londres",
  "Atlanta",
  "Paris",
  "Toronto",
  "Seattle",
];
