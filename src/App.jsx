import React from 'react';
import styles from "./App.module.css";
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Project from './components/project/Project';

const App = () => {
  return (
    <div className={styles.App}>  
    <NavBar />  
    <Home />  
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
  )
}

export default App