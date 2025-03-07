import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <p className="text-lg mb-8 text-center">
          I am a passionate Full-Stack Developer and AI Engineer specializing in building modern, 
          responsive web applications. With a strong foundation in both frontend and backend technologies, 
          as well as machine learning, I strive to create seamless and efficient user experiences.
        </p>

        {/* Frontend Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Frontend</h3>
        {renderSkill("HTML & CSS", "w-11/12")}
        {renderSkill("React JS", "w-10/12")}
        {renderSkill("Vue JS", "w-8/12")}
        {renderSkill("Tailwind CSS", "w-9/12")}
        {renderSkill("Bootstrap", "w-8/12")}

        {/* Backend Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Backend</h3>
        {renderSkill("Django", "w-10/12")}
        {renderSkill("Node JS", "w-9/12")}
        {renderSkill("Flask", "w-8/12")}
        {renderSkill("Ruby on Rails", "w-7/12")}

        {/* AI & Data Science Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">AI & Data Science</h3>
        {renderSkill("TensorFlow", "w-10/12")}
        {renderSkill("PyTorch", "w-9/12")}
        {renderSkill("Scikit-learn", "w-9/12")}
        {renderSkill("Pandas", "w-10/12")}
        {renderSkill("NumPy", "w-10/12")}
      </div>
    </div>
  );
};

const renderSkill = (name, width) => {
  return (
    <div className="flex items-center mb-4">
      <label className="w-3/12 font-medium">{name}</label>
      <div className="grow bg-gray-800 rounded-full h-2.5">
        <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${width}`}></div>
      </div>
    </div>
  );
};

export default About;