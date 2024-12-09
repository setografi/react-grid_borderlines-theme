import React from "react";
import TestimonialOne from "../../assets/react.svg";

const testimonials = [
  {
    id: 1,
    logo: "Logo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
    highlightedText: "Odit iusto aut nulla nihil voluptatibus",
    endingText:
      ", quidem esse perspiciatis repudiandae ea dicta error suscipit!",
    name: "Ervan Kurniawan",
    role: "Frontend Web Developer",
    image: TestimonialOne,
  },
  {
    id: 2,
    logo: "Logo",
    text: "Another testimonial text example for demonstration. ",
    highlightedText: "Highlight this part of the text",
    endingText: " and continue with more details.",
    name: "Rezi Afrialdi",
    role: "UI/UX Designer",
    image: TestimonialOne,
  },
  {
    id: 3,
    logo: "Logo",
    text: "Another testimonial text example for demonstration. ",
    highlightedText: "Highlight this part of the text",
    endingText: " and continue with more details.",
    name: "O. Riastanjung",
    role: "Fullstack Developer",
    image: TestimonialOne,
  },
  {
    id: 4,
    logo: "Logo",
    text: "Another testimonial text example for demonstration. ",
    highlightedText: "Highlight this part of the text",
    endingText: " and continue with more details.",
    name: "Rama Setiawan",
    role: "UI/UX Designer",
    image: TestimonialOne,
  },
  {
    id: 5,
    logo: "Logo",
    text: "Another testimonial text example for demonstration. ",
    highlightedText: "Highlight this part of the text",
    endingText: " and continue with more details.",
    name: "Wahyu Seto Pranata",
    role: "Graphic Designer",
    image: TestimonialOne,
  },
  {
    id: 6,
    logo: "Logo",
    text: "Another testimonial text example for demonstration. ",
    highlightedText: "Highlight this part of the text",
    endingText: " and continue with more details.",
    name: "Setografi",
    role: "Writer",
    image: TestimonialOne,
  },
];

function Testimonial() {
  return (
    <section className="w-full grid grid-flow-row mx-auto">
      <div className="px-32 border-t border-lightGray-700 border-dashed">
        <div className="border-l border-lightGray-700 border-dashed">
          <div className="grid grid-cols-2 grid-rows-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group flex flex-col p-6 gap-10 border-r border-b border-lightGray-700 border-dashed"
              >
                <h2 className="text-darkGray-500 font-semibold">
                  {testimonial.logo}
                </h2>
                <p className="text-darkGray-500">
                  {testimonial.text}
                  <span className="bg-lightGray-700 text-darkGray-500 font-semibold">
                    {testimonial.highlightedText}
                  </span>
                  {testimonial.endingText}
                </p>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-lg text-darkGray-500 font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-darkGray-300/60">
                      {testimonial.role}
                    </p>
                  </div>

                  <div>
                    <img
                      src={testimonial.image}
                      alt={`Testimonial from ${testimonial.name}`}
                      className="w-full h-full object-cover group-hover:scale-125 duration-300 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-40 grid grid-flow-col border-x border-lightGray-700 border-dashed"></div>
      </div>
    </section>
  );
}

export default Testimonial;
