import './App.css';
import About from './components/About.jsx'; 
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';  
import Hero from './components/Hero.jsx';     
import Navbar from "./components/Navbar.jsx"; 
import Project from './components/Project.jsx';
import Service from './components/Service.jsx';   

function App() {
  
// Accessing the VITE_API_URL environment variable
const apiUrl = import.meta.env.VITE_API_URL;

console.log('API URL:', apiUrl); 

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
