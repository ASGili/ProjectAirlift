import { useParams } from "react-router-dom";
import BookComments from "../BookComponents/BookComments";
import BookMap from "../BookComponents/BookMap";

const BookPage = ()=>{

    const {isbn} = useParams()
    return(
        <>
            <h2>ISBN: {isbn}</h2>
            <BookMap />
            <BookComments />
        </>
    )
}

export default BookPage;