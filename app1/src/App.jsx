import { Component,Fragment } from "react";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Routes,Route } from "react-router-dom"; //routing
import NotFound from "./components/NotFound/NotFound.jsx";

class App extends Component{
  render(){
    return <>
      <Navbar />
      

          <Routes >
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route exact path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>}/>
            
          </Routes>

   
      <Footer />
      
    </>
    
  }
}

export default App