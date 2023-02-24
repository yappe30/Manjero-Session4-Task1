import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Register from "./Components/Register"

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<Register />}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;