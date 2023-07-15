import { Container } from "@mui/material";

const CodeReader = ({barcode})=> {



    return(
        <Container>        
            <div id='qr-reader' style={{width: 70 + 'vw'}}/>
        </Container>

    )
}

export default CodeReader;