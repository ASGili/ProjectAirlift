import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const CodeReader = ()=> {

    const [barcode, setBarcode] = useState([])
    const [fetchedBook, setBook] = useState({})
    
    useEffect(()=> {  function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)
        if(decodedText) {setBarcode(decodedText);}}
        var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 300 });
        html5QrcodeScanner.render(onScanSuccess);},[])

    useEffect(()=>{
        console.log("barcode changed")
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + barcode)
        .then(res => res.json())
        .then(res=> setBook(res))

    },[barcode])
    

    return(
        <>        
            <div id='qr-reader' style={{width: 50 + 'vw'}}/>
            <div id='book-details'>
                {barcode}
            </div>
        </>

    )
}

export default CodeReader;