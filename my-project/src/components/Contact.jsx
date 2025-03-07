import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development, AI projects, or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2' />
                <a href="mailto:andargesimret@gmail.com" className='hover:underline'>
                    andargesimret@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2' />
                <span>+251948791463</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block mb-2'>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Name' required />
                </div>
                <div>
                    <label className='block mb-2'>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    placeholder='Enter Your Email' required />
                </div>
                <div>
                    <label className='block mb-2'>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                    rows="5" placeholder='Enter Your Message' required />
                </div>
                <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>Send</button>
            </form>
            {status && <p className="mt-4 text-center">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
