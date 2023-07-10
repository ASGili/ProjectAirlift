import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import WelcomeLanding from "../HomeComponents/WelcomeLanding";
import CodeReader from "../HomeComponents/CodeReader";
import ManualEntry from "../HomeComponents/ManualEntry";
import BookDetails from "../HomeComponents/BookDetails";

const Home = ()=>{

    const [barcode, setBarcode] = useState("")
    const [fetchedBook, setBook] = useState({})
    
    useEffect(()=> {  function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)
        if(decodedText) {setBarcode(decodedText);}}
        var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 300 });
        html5QrcodeScanner.render(onScanSuccess);},[])

    useEffect(()=>{
        console.log("barcode changed")
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + barcode)
        .then(res => res.json()).then(res=> setBook(res));
    },[barcode])

    return (
        <>
            <WelcomeLanding />
            <ManualEntry setBarcode={setBarcode} />
            <CodeReader barcode={barcode}  />
            <BookDetails fetchedBook={fetchedBook}/>
        </>
    )
}

export default Home;