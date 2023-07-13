import { Await, useParams } from "react-router-dom";
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
    const [photoFile, setPhoto] = useState({})

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

    const fetchComments = ()=>{
        fetch("http://localhost:8080/books/" + DbBookId + "/comments/")
       .then(data => data.json())
       .then(data => setCommentData(data._embedded.comments))
   }

    const handleCommentAdd = ()=>{
        if(content){
        let commentToSend = {content,"date":Date.now(),"book":{"id":DbBookId}}
        fetch("http://localhost:8080/books/" +DbBookId+ "/comments/",{
            method: "POST", 
            body: JSON.stringify(commentToSend),  
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(()=> fetchComments())
        setCommentText("")
        }
    }

    const handleCommentDelete= (event)=>{
        let id = event.target.id
        if(commentData){
            fetch(commentData[id]._links.comment.href,{
                method: "DELETE",   
                headers: {"Content-Type": "application/json"}
            })
            .then(()=> fetchComments())
        }
    }

    const handlePhotoAdd= (event)=>{
        console.log(event)
    }

    const handleFileInput=(event)=>{
        setPhoto(event.target.files[0])
        const reader = new FileReader()
        reader.onload = () => {
            console.log(reader.result);
          };
        // reader.readAsBinaryString(photoFile)
    }

   
    
        // fetch("http://localhost:8080/books/" +DbBookId+ "/comments/",{
        //     method: "POST", 
        //     body: JSON.stringify(),  
        //     headers: {"Content-Type": "application/json"}
        // })

    


    return(

        <Container>
            <h2>{fetchedBook.title}</h2>
            {apiData[0] ?<p><img alt="front-cover" src={apiData[0].volumeInfo.imageLinks.thumbnail} /></p>: ""}
            <BookMap />
            <AddComment handleCommentAdd={handleCommentAdd} setCommentText={setCommentText} content={content}/>
            <BookComments commentData={commentData} handleCommentDelete={handleCommentDelete} handlePhotoAdd={handlePhotoAdd} handleFileInput={handleFileInput} />

        </Container>
    )
}

export default BookPage
