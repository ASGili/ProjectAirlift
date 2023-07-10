import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Header from "./header-components/Header"
import Footer from "./footer-components/Footer"
import Home from './containers/Home';
import ErrorPage from './containers/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  



  return (
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path ="/*" element= <ErrorPage /> />
        <Route path ="/" element= <Home/> />
        <Route path ="/home" element= <Home/> />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
