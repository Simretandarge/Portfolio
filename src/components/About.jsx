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
        {renderEmojiSkill("HTML & CSS", 5)}
        {renderEmojiSkill("React JS", 4)}
        {renderEmojiSkill("Vue JS", 3)}
        {renderEmojiSkill("Tailwind CSS", 4)}
        {renderEmojiSkill("Bootstrap", 3)}

        {/* Backend Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Backend</h3>
        {renderEmojiSkill("Django", 4)}
        {renderEmojiSkill("Node JS", 4)}
        {renderEmojiSkill("Flask", 3)}
        {renderEmojiSkill("Ruby on Rails", 2)}

        {/* AI & Data Science Skills */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">AI & Data Science</h3>
        {renderEmojiSkill("TensorFlow", 5)}
        {renderEmojiSkill("PyTorch", 4)}
        {renderEmojiSkill("Scikit-learn", 4)}
        {renderEmojiSkill("Pandas", 5)}
        {renderEmojiSkill("NumPy", 5)}
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
    <div className="flex items-center mb-4">
      <label className="w-3/12 font-medium">{name}</label>
      <span className="text-xl">{progress}</span>
    </div>
  );
};

export default About;
