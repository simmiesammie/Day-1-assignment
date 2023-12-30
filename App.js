// App.js
import React from 'react';
import Header from './header';
import Sidenav from './sidenav';
import MainContent from './maincontent';
import Footer from './footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header title="Header" />
      <div className="container">
        <Sidenav title="Sidenav" />
        <MainContent title="Main Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
};

export default App;
