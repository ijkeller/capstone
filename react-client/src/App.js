import React, { useState, useEffect } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';
import { jsSubString } from './components/jsSnippet';
import TypingContainer from './components/typingContainer';
import Nav from './components/nav';
import Keyboard from './components/keyboard'
import Stats from './components/stats'
import QwertyContainer from './components/qwertyContainer'


function App() {

  return (

    <div className="App">

      <div className='title'>FST CDR</div>
      <Nav />
      <TypingContainer />
      <QwertyContainer />

    </div>
  );
}

export default App;
