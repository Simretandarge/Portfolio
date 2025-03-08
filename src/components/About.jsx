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

        {/* Skills Section - Box Layout with Colors & Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Frontend Skills */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-500 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            {renderEmojiSkill("HTML & CSS", 5)}
            {renderEmojiSkill("React JS", 4)}
            {renderEmojiSkill("Vue JS", 3)}
            {renderEmojiSkill("Tailwind CSS", 4)}
            {renderEmojiSkill("Bootstrap", 3)}
          </div>
          
          {/* Backend Skills */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-green-500 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            {renderEmojiSkill("Django", 4)}
            {renderEmojiSkill("Node JS", 4)}
            {renderEmojiSkill("Flask", 3)}
            {renderEmojiSkill("Ruby on Rails", 2)}
          </div>
          
          {/* AI & Data Science Skills */}
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-500 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">AI & Data Science</h3>
            {renderEmojiSkill("TensorFlow", 5)}
            {renderEmojiSkill("PyTorch", 4)}
            {renderEmojiSkill("Scikit-learn", 4)}
            {renderEmojiSkill("Pandas", 5)}
            {renderEmojiSkill("NumPy", 5)}
          </div>
        </div>
      </div>
    </div>
  );
};

const renderEmojiSkill = (name, level) => {
  const total = 5;
  let progress = "";
  for (let i = 0; i < total; i++) {
    progress += i < level ? "🟩" : "⬜";
  }
  return (
    <div className="flex flex-col items-center mb-4">
      <label className="font-medium mb-1">{name}</label>
      <span className="text-xl">{progress}</span>
    </div>
  );
};

export default About;

