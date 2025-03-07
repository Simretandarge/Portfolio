import React from 'react';
import HeroImage from '../assets/photo_2024-11-25_03-01-05.jpg';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img 
                src={HeroImage} 
                alt="Profile" 
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
                transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-4xl font-bold'>
                I'm{"  "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  Simret Andarge
                </span>
                , Full-Stack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in building modern and responsive web applications.
            </p>
            <div className='mt-8 space-x-4'>
                {/* Contact Button links to #contact */}
                <a href="#contact">
                    <button
                        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        Contact With Me
                    </button>
                </a>

                {/* Resume Button downloads resume.pdf */}
                <a href="/resume.pdf" download="Simret_Resume.pdf">
                <button className='bg-gradient-to-r from-gray-500 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Resume
                </button>
</a>

            </div>
        </div>
    );
}

export default Hero;
