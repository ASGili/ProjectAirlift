import { Container } from "@mui/material";

const CodeReader = ({barcode})=> {



    return(
        <Container>        
            <div id='qr-reader' style={{width: 75 + 'vw'}}/>
            <div id='book-details'>
                {barcode}
            </div>
        </Container>

    )
}

export default CodeReader;