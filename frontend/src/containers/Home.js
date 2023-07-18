import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import BookDetails from "../HomeComponents/BookDetails";
import CodeReader from "../HomeComponents/CodeReader";
import ManualEntry from "../HomeComponents/ManualEntry";
import WelcomeLanding from "../HomeComponents/WelcomeLanding";


const Home = ()=>{

    const [barcode, setBarcode] = useState(0)
    const [fetchedBook, setBook] = useState({})
    const [dbResponseBook, setDbResponse] = useState({})
    const [dialogOpen, setDialog] = useState(false)

    useEffect(()=> {  function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult)
        if(decodedText) {setBarcode(decodedText);}}
        var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 2, qrbox:(document.body.clientWidth/4) });
        html5QrcodeScanner.render(onScanSuccess);},[])

    useEffect(()=>{
        console.log(document.body.clientWidth)
        if(barcode){
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + barcode + "&key=AIzaSyDQJW_XlB3cmU-qjmQd0fL9QBoTOdcl1Qo")
        .then(res => res.json())
        .then(res=> setBook(res), handleDialogOpen())}
    },[barcode])

    const handleAddBook = ()=>{
        let bookToSend = {"title": fetchedBook.items[0].volumeInfo.title,"isbn":barcode,"googleApiLink":fetchedBook.items[0].selfLink, "fronendLink":"test"}
        fetch("http://localhost:8080/books",{method: "POST", body: JSON.stringify(bookToSend),  headers: {"Content-Type": "application/json"}})
        .then(res => res.json())
        .then(data => setDbResponse(data))
    }

    const handleDialogOpen = () => {
        setDialog(true);
      };
    
      const handleDialogClose = () => {
        setDialog(false);
        setBarcode("")
        setDbResponse("")
      };

    return (
        <Stack spacing={3} sx={{py:"2.5vh",minWidth: 10, mr: 'auto', width: 900,minHeight:"85vh",height:"95vh"}}>
            <WelcomeLanding />
            <Dialog sx={{bgcolor:"#4A47A3"}} open={dialogOpen} onClose={handleDialogClose}>
            <DialogTitle sx={{bgcolor:"#4A47A3"}}>Is the book below correct?</DialogTitle>
                <DialogContent sx={{bgcolor:"#4A47A3"}}>
                    <BookDetails isbn={barcode} fetchedBook={fetchedBook} handleAddBook={handleAddBook} dbResponseBook={dbResponseBook} />
                </DialogContent>
            </Dialog>
            <ManualEntry setBarcode={setBarcode} />
            <CodeReader barcode={barcode}  />
        </Stack>
    )
}

export default Home;