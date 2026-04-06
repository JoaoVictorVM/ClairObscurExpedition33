import { testimonials } from "../../data";
import { TestimonialCard } from "../ui";

export function Testimonials() {
  return (
    <section className="flex flex-col">
      <div className="pt-[4vw] px-[8vw] flex justify-between">
        <img src="/projeto imagens/netflix-logo.svg" alt="netflix-logo" />
        <img src="/projeto imagens/clio-logo.svg" alt="clio-logo" />
        <img src="/projeto imagens/fever-logo.svg" alt="fever-logo" />
      </div>

      <div className="px-[8vw] py-[8vw] flex justify-between">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
