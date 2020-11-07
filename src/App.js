import React from 'react';
import Navbar from './components/navBar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Works from './components/works/works';
import Footer from './components/footer/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Works/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
