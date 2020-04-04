import React from 'react';
import './App.css';

import { About, Disclaimer, Footer, Hero, List } from './sections';

function App() {
  return (
    <div className="App">
      <a
        className="typeform-share button"
        href="https://mariasjodin.typeform.com/to/ObNXYj"
        data-mode="popup"
        target="_blank"
        rel="noopener noreferrer"
      >
        Launch me{' '}
      </a>
      <Hero />
      <About />
      <List />
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
