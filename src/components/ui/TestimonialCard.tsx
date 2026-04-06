import type { Testimonial } from "../../types/index";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="text-justify max-w-[30%]">
      <img src={testimonial.image} alt={testimonial.imageAlt} />
      <p className="pt-[15px]">{testimonial.text}</p>
    </div>
  );
}
