import React from 'react';

import './App.css';

import AboutUs from './components/AboutUs';
import Circular from './components/Circular';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import KeySpeakers from './components/KeySpeakers';
import NavegationBar from './components/NavegationBar';
import NextEdition from './components/NextEdition';
import SectionsBar from './components/SectionsBar';



class App extends React.Component {
  render() {
    return (
      <>
        <NavegationBar />
        <HeroSection />
        <SectionsBar />
        <AboutUs />
        <Contact />
        <NextEdition />
        <Circular />
        <KeySpeakers />
      </>
    )
  }
}

export default App;
