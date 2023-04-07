
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './views/Home'
import About from './views/About';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Contact from './views/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div><Navbar /></div>
      
        <div id='views'>    
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
