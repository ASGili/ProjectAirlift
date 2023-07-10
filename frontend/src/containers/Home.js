import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const Home = ()=>{

    useEffect(()=> {  function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)}
         
        var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 400 });
        html5QrcodeScanner.render(onScanSuccess);})
    return (
        <>
            <div id='qr-reader' style={{width: 600 + 'px'}}></div>
        </>
    )
}

export default Home;