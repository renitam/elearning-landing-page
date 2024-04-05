import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Button, Navbar, Logo } from './styles/global';
import skilled from './images/logo-dark.svg';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo src={skilled} alt="skilled logo" />
        <Button>Get Started</Button>
      </Navbar>
      <header className="App-header">

        <h1>Maximize skill, minimize budget</h1>

        Our modern courses across a range of in-demand skills will give you the 
        knowledge you need to live the life you want.

        <Button>Get Started</Button>

        Check out our most popular courses!

        Animation
        Learn the latest animation techniques to create stunning motion 
        design and captivate your audience.
        Get Started

        Design
        Create beautiful, usable interfaces to help shape the future of 
        how the web looks.
        Get Started

        Photography
        Explore critical fundamentals like lighting, composition, and focus 
        to capture exceptional photos.
        Get Started

        Crypto
        All you need to know to get started investing in crypto. Go from beginner 
        to advanced with this 54 hour course.
        Get Started

        Business
        A step-by-step playbook to help you start, scale, and sustain your business 
        without outside investment.
        Get Started

        <Button>Get Started</Button>
      </header>
    </div>
  );
}

export default App;
