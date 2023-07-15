import { QRCode } from "@jackybaby/react-custom-qrcode";
import { Container, Stack } from "@mui/material";
import AddBookButton from "./AddBookButton";
const BookDetails = ({fetchedBook, handleAddBook, dbResponseBook})=> {

    return(
        <Stack spacing={3} direction="row">
        {fetchedBook.totalItems === 1 ? 
        <>
        <section>
        <p>Is the book below correct?</p>
        <p>{fetchedBook.items[0].volumeInfo.title} </p>
        </section>
        <p> <img alt="book-cover" src={fetchedBook.items[0].volumeInfo.imageLinks.thumbnail} /> </p>
        <AddBookButton handleAddBook={handleAddBook} />
        </>
        :  ""} 


        {dbResponseBook._links ?
        <section>
        <QRCode value={`http://localhost:3000/books` + dbResponseBook._links.book.href.substring(28,52)} /> <br/>
        <a href={`http://localhost:3000/books/` + dbResponseBook._links.book.href.substring(28,52)}>Link to Book Page</a>
        </section>
        : ""}

        </Stack>

        
    )
}

export default BookDetails;
