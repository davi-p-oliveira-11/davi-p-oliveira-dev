import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Transforming ideas into <br /> clean, scalable web experiences
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s4.png"
            name="Web Development"
            description="Building high-performance, scalable, and modern web applications using the latest technologies."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s1.png"
            name="UI & UX"
            description="Soon offering intuitive, modern, and visually consistent interface design."
            comingSoon={true}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Mobile Apps"
            description="Soon delivering sleek, high-performance mobile applications for Android."
            comingSoon={true}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="Process Automations"
            description="In the near future, providing workflow automations to boost business efficiency."
            comingSoon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
