import React from 'react'
import SectionHeader from '../ui/SectionHeader';
import { LuQuote } from 'react-icons/lu';

const testimonial = [
  {
    name: "searah johnson",
    role: "product Designer",
    image: "",
    feedback:
      "this ability to translate design into a sommoth and responsive uI is impression",
  },
  {
    name: "searah johnson",
    role: "product Designer",
    image: "",
    feedback:
      "this ability to translate design into a sommoth and responsive uI is impression",
  },
  {
    name: "searah johnson",
    role: "product Designer",
    image: "",
    feedback:
      "this ability to translate design into a sommoth and responsive uI is impression",
  },
  {
    name: "searah johnson",
    role: "product Designer",
    image: "",
    feedback:
      "this ability to translate design into a sommoth and responsive uI is impression",
  },
];

const About2 = () => {
  return (
     <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="w-[90%] max-w-6xl mx-auto space-y-16">
        <SectionHeader
          title="what are main things"
          badge="summary"
          description="summary about clients and collaborators taskzen have worked with on various projects."
        />

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text"
        >
          {testimonial.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl text-black bg-surface border border-border transition-all duration-300 hover:translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <LuQuote className="absolute top-5 right-5 text-primary/10 w-10 h-10" />

                <p className="text-gray-400 leading-relaxed mb-6 pr-12">
                  &quot;{item.feedback}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />

                  <div>
                    <h4 className="text-text font-semibold group-hover:text-primary transition">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-700">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default About2
