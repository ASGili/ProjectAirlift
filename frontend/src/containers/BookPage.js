import { Skeleton } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../BookComponents/AddComment";
import BookComments from "../BookComponents/BookComments";
import BookMap from "../BookComponents/BookMap";

const BookPage = ({currentUser})=>{
    const {DbBookId} = useParams()

    const [fetchedBook, setBook] = useState({})
    const [content, setCommentText] = useState("")
    const [apiData, setApiData] = useState([])
    const [commentData, setCommentData] = useState([])
    const [photoFile, setPhotoFile] = useState({})
    const [photo, setPhoto] = useState("")
    const [previewNumber, setPreviewNumber] = useState("")
    const [coordinates, setCoordinates] = useState(null)


    function locSuccess(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const location = {long, lat};
        setCoordinates(location);
      }

    function locError(){
        console.log("Error")
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(locSuccess,locError)
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
            if(commentData.filter((comment)=>{return comment.user == currentUser.displayName}).length == 0){
        let commentToSend = {content,"date":Date.now(),"book":{"id":DbBookId},"user":currentUser.displayName,coordinates}
        console.log(commentToSend)
        fetch("http://localhost:8080/books/" +DbBookId+ "/comments/",{
            method: "POST", 
            body: JSON.stringify(commentToSend),  
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(()=> fetchComments())
        setCommentText("")
            }
            else{
                alert("You have already left a comment, please delete if you wish to leave another.");
                setCommentText("")

        }
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

        <Stack sx={{pt:10, mx:10}}>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            <h2>{fetchedBook.title}</h2>
            {apiData.length !== 0 
            ? <img style={{width:150,height:230}} alt="front-cover" src={apiData[0].volumeInfo.imageLinks.thumbnail} />
            : <Skeleton variant="rectangular" width={150} height={230} />}
            </div>
            <Stack spacing={1} sx={{px:4}}>
            <AddComment handleCommentAdd={handleCommentAdd} setCommentText={setCommentText} content={content} currentUser={currentUser}/>
            <BookMap commentData={commentData} />
            <BookComments commentData={commentData} handleCommentDelete={handleCommentDelete} handlePhotoAdd={handlePhotoAdd} handleFileInput={handleFileInput} handlePhotoToDb={handlePhotoToDb} handleImageDelete={handleImageDelete} photo={photo} previewNumber={previewNumber} currentUser={currentUser}/>
            </Stack>
        </Stack>
    )
}

export default BookPage
