import { QRCode } from "@jackybaby/react-custom-qrcode";
import { Container, Stack } from "@mui/material";
import AddBookButton from "./AddBookButton";
const BookDetails = ({fetchedBook, handleAddBook, dbResponseBook})=> {

    return(
        <Container>
        {fetchedBook.totalItems === 1 ? 
        <>
        <p>Is the book below correct?</p>
        <p>{fetchedBook.items[0].volumeInfo.title} </p>
        <Stack direction="row" spacing={2}>
        <p> <img alt="book-cover" src={fetchedBook.items[0].volumeInfo.imageLinks.thumbnail} /> </p>
        <AddBookButton handleAddBook={handleAddBook} />
        </Stack>
        </>
        :  ""} 


        {dbResponseBook._links ?
        <>
        <QRCode value={`http://localhost:3000/books` + dbResponseBook._links.book.href.substring(28,52)} /> 
        <a href={`http://localhost:3000/books/` + dbResponseBook._links.book.href.substring(28,52)}>Link to Book Page</a>
        </>
        : ""}

        </Container>

        
    )
}

export default BookDetails;
