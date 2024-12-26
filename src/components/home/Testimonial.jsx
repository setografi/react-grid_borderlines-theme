import React from "react";
import ProfileCard from "../common/ProfileCard";
import testimonials from "../../constants/testimonialsData";

function Testimonial() {
  return (
    <section className="w-full mx-auto">
      <div className="px-8 md:px-16 lg:px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-l border-lightGray-700 border-dashed">
          <div className="grid md:grid-cols-2 md:grid-rows-3">
            {testimonials.map((testimonial) => (
              <ProfileCard
                key={testimonial.id}
                logo={testimonial.logo}
                text={testimonial.text}
                highlightedText={testimonial.highlightedText}
                endingText={testimonial.endingText}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>

        <div className="h-24 md:h-40 grid grid-flow-col border-x border-lightGray-700 border-dashed"></div>
      </div>
    </section>
  );
}

export default Testimonial;
