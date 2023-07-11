import { QRCode } from "@jackybaby/react-custom-qrcode";
import { Container, Stack } from "@mui/material";
const BookDetails = ({isbn, fetchedBook, handleAddBook})=> {

    return(
        <Container>
        <p>{fetchedBook.totalItems === 1 ? fetchedBook.items[0].volumeInfo.title :  ""}</p>

        <p><a href={`http://localhost:3000/book/` + isbn}>Link to book page.</a></p>
        {fetchedBook.totalItems === 1 ? 
        <Stack direction="row" spacing={2}>
        <img src={fetchedBook.items[0].volumeInfo.imageLinks.thumbnail} /> 
        <button onClick={handleAddBook}>Add Book To Library.</button>
        </Stack>
        :  ""} 
       
        <p>{fetchedBook.totalItems ===1 ? <QRCode value={`http://localhost:3000/book/` + isbn} /> : ""} </p>
        </Container>

        
    )
}

export default BookDetails;
