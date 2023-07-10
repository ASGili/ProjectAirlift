import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const CodeReader = ({barcode})=> {


    

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