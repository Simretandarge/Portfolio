import React from "react";
import defaultProjectImage from "../assets/Projescts.webp"; 
import HeartDiseaseAnalaysis from "../assets/Heart_Disease_Prediction_using_Machine_Learning.jpg";
import Parkinsons from "../assets/main-1.webp";
import Portfolio from "../assets/Capture.jpg";
import MusicPlayer from "../assets/musicPlayer.jpg";
import Portfolio2 from "../assets/portifolio.jpg";
import LandingPage from "../assets/LandingPage.jpg"



const projects = [
  {
    id: 1,
    name: "Heart Disease Analysis",
    technologies: "pandas, matplotlib.pyplot, seaborn",
    image: HeartDiseaseAnalaysis,
    github: "https://github.com/Simretandarge/Heart_disease_analysis",
  },
  {
    id: 2,
    name: "Parkinsons-Disease-Detection",
    technologies: "pandas, matplotlib.pyplot, seaborn, numpy, scikit-learn",
    image: Parkinsons,
    github: "https://github.com/Simretandarge/Parkinsons-Disease-Detection/tree/main",
  },
  {
    id: 3,
    name: "Portfolio2",
    technologies: "React, Vite, Tailwind CSS, Flask (Python), Flask-Mail, Axios (in React)",
    image: Portfolio,
    github: "https://github.com/Simretandarge/Simret-Andarge",
  },
  {
    id: 4,
    name: "Music Player",
    technologies: "Html, Css, Javascript",
    image: MusicPlayer,
    github: "https://github.com/Simretandarge/music-player-",
  },
  {
    id: 5,
    name: "Portifolio",
    technologies: "Html, Css, Javascript",
    image: Portfolio2,
    github: "https://github.com/Simretandarge/OIBSIP/tree/main/portifolio",
  },
  {
    id: 6,
    name: "Landing Page",
    technologies: "Html, Css",
    image: LandingPage,
    github: "https://github.com/Simretandarge/OIBSIP/tree/main/landing%20page",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image ? project.image : defaultProjectImage} // Use default unless a unique image exists
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;