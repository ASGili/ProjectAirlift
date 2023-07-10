import { useParams } from "react-router-dom";

const BookPage = ()=>{

    const {isbn} = useParams()
    return(
        <>
            <h2>ISBN: {isbn}</h2>
        </>
    )
}

export default BookPage;