import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Header from "./header-components/Header"
import Footer from "./footer-components/Footer"
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  
  function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult)}
     
    var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 400 });
    html5QrcodeScanner.render(onScanSuccess);

  return (
    <div className="App">
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
