import React from 'react';
import './App.css';
import Timer from '../Timer/Timer'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="app-container">
      <Timer />
      <Footer />
    </div>
  );
}

export default App;