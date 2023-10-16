import React from 'react';
import './App.css';

function AboutSection() {
  return (
    <div className="container mt-5" id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm S. Dilleswara Rao, a web developer with a passion for creating modern and responsive websites. I have experience in front-end and back-end development, as well as a strong understanding of web technologies.
      </p>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="container mt-5" id="projects">
      <h2>Projects</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Swiggy Clone</h3>
          <p className="card-text">A clone of the popular food delivery platform, Swiggy, developed with (mention the technologies you used).</p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">My Portfolio</h3>
          <p className="card-text">This very portfolio you are currently viewing, showcasing my web development skills and projects.</p>
        </div>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="container mt-5" id="contact">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch with me, you can reach me at <a href="mailto:suaravarapudilleswararao@email.com">suaravarapudilleswararao@email.com</a>.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      &copy; 2023 S. Dilleswara Rao - Web Developer
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>S. Dilleswara Rao</h1>
        <p>Web Developer</p>
      </header>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
