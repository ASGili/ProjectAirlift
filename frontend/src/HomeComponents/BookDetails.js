import { QRCode } from "@jackybaby/react-custom-qrcode";
import { Container } from "@mui/material";
const BookDetails = ({isbn, fetchedBook})=> {

    return(
        <Container>
        <p>{fetchedBook.totalItems === 1 ? fetchedBook.items[0].volumeInfo.title :  ""}</p>
        <p>{fetchedBook.totalItems ===1? <QRCode value={`http://localhost:3000/book/` + isbn} /> : ""} </p>
        <p><a href={`http://localhost:3000/book/` + isbn}>Link to book page.</a></p>
        {fetchedBook.totalItems === 1 ? <img src={fetchedBook.items[0].volumeInfo.imageLinks.thumbnail} /> :  ""} 
        </Container>
    )
}

export default BookDetails;
