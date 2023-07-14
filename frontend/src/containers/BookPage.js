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
    const [photoFile, setPhotoFile] = useState({})
    const [photo, setPhoto] = useState("")

    useEffect(()=>{
        fetch("http://localhost:8080/books/" + DbBookId,{
            method:"PATCH",
            body: JSON.stringify({"frontendLink":"http://localhost:3000/books/"}),
            headers: {"Content-Type": "application/json"}
        })
        .then(data => data.json())
        .then(data => setBook(data))
    },[DbBookId])

    // useEffect(()=>{     
    //     if(fetchedBook.isbn){
    //     fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + fetchedBook.isbn + "&key=AIzaSyDQJW_XlB3cmU-qjmQd0fL9QBoTOdcl1Qo")
    //         .then(res => res.json())
    //         .then(data => setApiData(data.items))}
    // },[fetchedBook])

    useEffect(()=>{
        fetchComments();
    },[])

    useEffect(()=>{

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
        let id = event.target.id
        const reader = new FileReader()
        reader.onload = () => {
            setPhoto(reader.result)
            fetch(commentData[id]._links.comment.href,{
                method: "PATCH", 
                body: JSON.stringify({photo}),  
                headers: {"Content-Type": "application/json"}
                })
            
        }
        reader.readAsDataURL(photoFile)
    }

    const handleFileInput=(event)=>{
        setPhotoFile(event.target.files[0])
    }
    
    const handlePhotoToDb = (event)=>{
        
  
    }
 

    


    return(

        <Container>
            <h2>{fetchedBook.title}</h2>
            {apiData.length !== 0 ?<p><img alt="front-cover" src={apiData[0].volumeInfo.imageLinks.thumbnail} /></p>: ""}
            <BookMap />
            <AddComment handleCommentAdd={handleCommentAdd} setCommentText={setCommentText} content={content}/>
            <BookComments commentData={commentData} handleCommentDelete={handleCommentDelete} handlePhotoAdd={handlePhotoAdd} handleFileInput={handleFileInput} photo={photo} />
        </Container>
    )
}

export default BookPage
