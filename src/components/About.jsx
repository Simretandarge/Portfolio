import React, { useState } from "react";

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <p className="text-lg mb-8 text-center">
          I am a passionate Full-Stack Developer and AI Engineer specializing in building modern, 
          responsive web applications. With a strong foundation in both frontend and backend technologies, 
          as well as machine learning, I strive to create seamless and efficient user experiences.
        </p>

        {/* Skills Section - Interactive Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {/* Frontend Skills */}
          <div 
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${selectedCategory === "Frontend" ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-800"}`}
            onClick={() => toggleCategory("Frontend")}
          >
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
            {selectedCategory === "Frontend" && (
              <>
                {renderEmojiSkill("HTML & CSS", 5)}
                {renderEmojiSkill("React JS", 4)}
                {renderEmojiSkill("Vue JS", 3)}
                {renderEmojiSkill("Tailwind CSS", 4)}
                {renderEmojiSkill("Bootstrap", 3)}
              </>
            )}
          </div>
          
          {/* Backend Skills */}
          <div 
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${selectedCategory === "Backend" ? "bg-gradient-to-r from-green-500 to-teal-500" : "bg-gray-800"}`}
            onClick={() => toggleCategory("Backend")}
          >
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>
            {selectedCategory === "Backend" && (
              <>
                {renderEmojiSkill("Django", 4)}
                {renderEmojiSkill("Node JS", 4)}
                {renderEmojiSkill("Flask", 3)}
                {renderEmojiSkill("Ruby on Rails", 2)}
              </>
            )}
          </div>
          
          {/* AI & Data Science Skills */}
          <div 
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ${selectedCategory === "AI & Data Science" ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-gray-800"}`}
            onClick={() => toggleCategory("AI & Data Science")}
          >
            <h3 className="text-2xl font-semibold mb-4">AI & Data Science</h3>
            {selectedCategory === "AI & Data Science" && (
              <>
                {renderEmojiSkill("TensorFlow", 5)}
                {renderEmojiSkill("PyTorch", 4)}
                {renderEmojiSkill("Scikit-learn", 4)}
                {renderEmojiSkill("Pandas", 5)}
                {renderEmojiSkill("NumPy", 5)}
              </>
            )}
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