import { Container, Stack } from "@mui/material";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import BookDetails from "../HomeComponents/BookDetails";
import CodeReader from "../HomeComponents/CodeReader";
import ManualEntry from "../HomeComponents/ManualEntry";
import WelcomeLanding from "../HomeComponents/WelcomeLanding";

const Home = ()=>{

    const [barcode, setBarcode] = useState(0)
    const [fetchedBook, setBook] = useState({})
    
    useEffect(()=> {  function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)
        if(decodedText) {setBarcode(decodedText);}}
        var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 5, qrbox: 500 });
        html5QrcodeScanner.render(onScanSuccess);},[])

    useEffect(()=>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + barcode)
        .then(res => res.json()).then(res=> setBook(res));
    },[barcode])

    const handleAddBook = ()=>{

        return null
    }

    return (
        <Stack spacing={2} sx={{py:5,minWidth: 10, mr: 'auto', ml:10, width: 800}}>
            <WelcomeLanding />
            <ManualEntry setBarcode={setBarcode} />
            <CodeReader barcode={barcode}  />
            <BookDetails isbn={barcode} fetchedBook={fetchedBook} handleAddBook={handleAddBook}/>
        </Stack>

    )
}

export default Home;