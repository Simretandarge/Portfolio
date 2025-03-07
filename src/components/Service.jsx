import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    shortDescription: "Creating visually appealing and user-friendly web designs.",
    fullDescription: "Designing intuitive and engaging interfaces using the latest UI/UX principles, ensuring a seamless user experience.",
  },
  {
    id: 2,
    title: "Frontend Development",
    shortDescription: "Building responsive and interactive user interfaces.",
    fullDescription: "Developing efficient and scalable frontend applications using React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    id: 3,
    title: "Backend Development",
    shortDescription: "Developing robust server-side logic and databases.",
    fullDescription: "Creating RESTful APIs, handling authentication, and optimizing database performance with Node.js, Express, and MongoDB.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    shortDescription: "Combining both frontend and backend development skills.",
    fullDescription: "Integrating frontend and backend technologies to build complete web applications that are efficient and scalable.",
  },
  {
    id: 5,
    title: "Content Writing",
    shortDescription: "Writing content for your business and companies.",
    fullDescription: "Crafting compelling and SEO-friendly articles, blogs, and copywriting tailored to your brand’s voice and audience.",
  },
  {
    id: 6,
    title: "Machine Learning",
    shortDescription: "Building intelligent models that learn from data.",
    fullDescription: "Developing machine learning algorithms for predictive analytics, automation, and data-driven decision-making.",
  },
];

const Service = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {expandedService === service.id ? service.fullDescription : service.shortDescription}
              </p>
              <button
                onClick={() => toggleReadMore(service.id)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500 focus:outline-none"
              >
                {expandedService === service.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
