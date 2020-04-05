import React from 'react';
import './App.css';

import { About, Disclaimer, Footer, Hero, List } from './sections';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <List />
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
