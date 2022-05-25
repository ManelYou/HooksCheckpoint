import React from 'react';
import Home from './Components/Home';
import Details from './Components/Details';
import { Link, Route, Routes, BrowserRouter as Router} from "react-router-dom";
import './App.css';



function App() {



  return (
    <div>
     <Router>

 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/*" element={<Details/>}/>
        {/* <Route path="/Movie" element={<Pricing />} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
