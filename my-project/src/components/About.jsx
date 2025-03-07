import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      
            <p className="text-lg mb-8">
              I am a passionate Full-Stack Developer and AI Engineer specializing in building modern, 
              responsive web applications. 
              With a strong foundation in both frontend and backend technologies, as well as machine learning, 
              I strive to create seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              {/* HTML & CSS */}
              <div className="flex items-center">
                <label className="w-2/12">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11.5/12"></div>
                </div>
              </div>
              {/* React JS */}
              <div className="flex items-center">
                <label className="w-2/12">React JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12"></div>
                </div>
              </div>
              {/* Node JS */}
              <div className="flex items-center">
                <label className="w-2/12">Node JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12"></div>
                </div>
              </div>
              {/* Pandas */}
              <div className="flex items-center">
                <label className="w-2/12">Pandas</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                </div>
              </div>
              {/* NumPy */}
              <div className="flex items-center">
                <label className="w-2/12">NumPy</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                </div>
              </div>
              {/* Scikit-Learn */}
              <div className="flex items-center">
                <label className="w-2/12">Scikit-learn</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12"></div>
                </div>
              </div>
            </div>            
          </div>
        </div>
  );
};

export default About;