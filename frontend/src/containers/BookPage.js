import { useParams } from "react-router-dom";
import BookComments from "../BookComponents/BookComments";
import BookMap from "../BookComponents/BookMap";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import AddComment from "../BookComponents/AddComment";

const BookPage = ()=>{
    const {DbBookId} = useParams()

    const [fetchedBook, setBook] = useState({})
    const [content, setCommentText] = useState("")
    const [apiData, setApiData] = useState([])
    const [commentData, setCommentData] = useState([])


    useEffect(()=>{
        fetch("http://localhost:8080/books/" + DbBookId)
        .then(data => data.json())
        .then(data => setBook(data))
    },[DbBookId])

    useEffect(()=>{     
        if(fetchedBook.isbn){
        fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + fetchedBook.isbn + "&key=AIzaSyDQJW_XlB3cmU-qjmQd0fL9QBoTOdcl1Qo")
            .then(res => res.json())
            .then(data => setApiData(data.items))}
    },[fetchedBook])

    useEffect(()=>{
        fetchComments();
    },[])

    const handleAddComment = ()=>{
        if(content){
        let commentToSend = {content,"date":Date.now(),"book":{"id":DbBookId}}
        fetch("http://localhost:8080/books/" +DbBookId+ "/comments/",{
            method: "POST", 
            body: JSON.stringify(commentToSend),  
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(()=> fetchComments())
        setCommentText("")

    }
    }

    const fetchComments = ()=>{
         fetch("http://localhost:8080/books/" + DbBookId + "/comments/")
        .then(data => data.json())
        .then(data => setCommentData(data._embedded.comments))
    }

    return(

        <Container>
            <h2>{fetchedBook.title}</h2>
            {apiData[0] ?<p><img alt="front-cover" src={apiData[0].volumeInfo.imageLinks.thumbnail} /></p>: ""}
            <BookMap />
            <AddComment handleAddComment={handleAddComment} setCommentText={setCommentText} content={content}/>
            <BookComments commentData={commentData} />

        </Container>
    )
}

export default BookPage;