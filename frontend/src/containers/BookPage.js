import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../BookComponents/AddComment";
import BookComments from "../BookComponents/BookComments";
import BookMap from "../BookComponents/BookMap";
import { Stack } from "@mui/system";

const BookPage = ({currentUser})=>{
    const {DbBookId} = useParams()

    const [fetchedBook, setBook] = useState({})
    const [content, setCommentText] = useState("")
    const [apiData, setApiData] = useState([])
    const [commentData, setCommentData] = useState([])
    const [photoFile, setPhotoFile] = useState({})
    const [photo, setPhoto] = useState("")
    const [previewNumber, setPreviewNumber] = useState("")


    useEffect(()=>{
        fetch("http://localhost:8080/books/" + DbBookId,{
            method:"PATCH",
            body: JSON.stringify({"frontendLink":"http://localhost:3000/books/"}),
            headers: {"Content-Type": "application/json"}
        })
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
        let commentToSend = {content,"date":Date.now(),"book":{"id":DbBookId},"user":currentUser.displayName}
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

    const handleFileInput=(event)=>{
        setPhotoFile(event.target.files[0])
    }

    const handlePhotoAdd= (event)=>{
        setPreviewNumber(Number(event.target.id))
        const reader = new FileReader()
        reader.onload = () => {
            setPhoto(reader.result)
        }
        reader.readAsDataURL(photoFile)
    }

    const handlePhotoToDb = (event)=>{
        let id = event.target.id
        fetch(commentData[id]._links.comment.href,{
            method: "PATCH", 
            body: JSON.stringify({photo}),  
            headers: {"Content-Type": "application/json"}
        })
        .then(()=>setPhoto(""))
        .then(()=> setPreviewNumber(""))
        .then(()=> fetchComments())
    }
 
    const handleImageDelete= (event)=>{
        let id = event.target.id
        if(commentData){
            fetch(commentData[id]._links.comment.href,{
                method: "PATCH",  
                body: JSON.stringify({"photo":null}),  
                headers: {"Content-Type": "application/json"}
            })
            .then(()=> fetchComments())
        }
    }

    return(

        <Container>
            <h2>{fetchedBook.title}</h2>
            {apiData.length !== 0 ?<img alt="front-cover" src={apiData[0].volumeInfo.imageLinks.thumbnail} />: ""}
            <Stack sx={{px:4}}>
            <AddComment handleCommentAdd={handleCommentAdd} setCommentText={setCommentText} content={content}/>
            <BookMap commentData={commentData} />
            <BookComments commentData={commentData} handleCommentDelete={handleCommentDelete} handlePhotoAdd={handlePhotoAdd} handleFileInput={handleFileInput} handlePhotoToDb={handlePhotoToDb} handleImageDelete={handleImageDelete} photo={photo} previewNumber={previewNumber} currentUser={currentUser}/>
            </Stack>
        </Container>
    )
}

export default BookPage
