import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import List from './Components/list';
import About from './Components/About';
import HowWorks from './Components/howWorks';
import Service from './Components/service';
import Pricing from './Components/pricing';
import Car from './Components/Car';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
        <Router>

          <Navbar />
          <List />
          <About />
          <HowWorks />
          <Service />
          <Pricing />
          <Car />
          <Footer />

      </Router>
        
        
    </div>
  );
}

export default App;
