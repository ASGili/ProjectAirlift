import { useParams } from "react-router-dom";
import BookComments from "../BookComponents/BookComments";
import BookMap from "../BookComponents/BookMap";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import AddComment from "../BookComponents/AddComment";

const BookPage = ()=>{

    const [fetchedBook, setBook] = useState({})
    const {DbBookId} = useParams()
    const [commentText, setCommentText] = useState("")


    useEffect(()=>{
        fetch("http://localhost:8080/books/" + DbBookId)
        .then(data => data.json())
        .then(data => setBook(data))
    },[])

    useEffect(()=>{     
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + fetchedBook.isbn)
            .then(res => res.json())
            .then(data => console.log(data.items))
    },[fetchedBook])

    const handleAddComment = ()=>{
        return null
    }

    return(

        <Container>
            <h1>{fetchedBook.title}</h1>
            <p> <img src={fetchedBook.apilink} /> </p>
            <BookMap />
            <AddComment handleAddComment={handleAddComment} />
            <BookComments fetchedBook={fetchedBook} />

        </Container>
    )
}

export default BookPage;