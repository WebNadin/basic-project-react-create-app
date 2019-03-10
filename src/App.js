import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';

const App = () => (
  <div className="bg-light p-3">
    <Header />
    <Main />
  </div>
);

export default App;
