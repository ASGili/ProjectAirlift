import { QRCode } from "@jackybaby/react-custom-qrcode";
import { Container, Stack } from "@mui/material";
import AddBookButton from "./AddBookButton";
const BookDetails = ({isbn, fetchedBook, handleAddBook, dbResponseBook})=> {

    return(
        <Container>
        <p>{fetchedBook.totalItems === 1 ? fetchedBook.items[0].volumeInfo.title :  ""}</p>

        <p><a href={`http://localhost:3000/book/` + isbn}>Link to book page.</a></p>
        {fetchedBook.totalItems === 1 ? 

        <Stack direction="row" spacing={2}>
        <img src={fetchedBook.items[0].volumeInfo.imageLinks.thumbnail} /> 
        <AddBookButton handleAddBook={handleAddBook} />
        </Stack>

        :  ""} 
       
        <p>{dbResponseBook._links ? <QRCode value={dbResponseBook._links.book.href} /> : ""} </p>
        </Container>

        
    )
}

export default BookDetails;
