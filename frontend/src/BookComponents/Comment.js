import { Card, CardContent, Paper, Stack } from "@mui/material"
import ImageSelect from "./ImageSelect"
import CommentImage from "./CommentImage"

const Comment = ({
    id, 
    comment,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput,
    handlePhotoToDb,
    handleImageDelete,
    photo,
    previewNumber,
    currentUser
    })=>{

    let date = new Date()
    date.setTime(comment.date)
    
  

    return (
    <Paper id={id} elevation={5} sx={{width:"100%"}}>
        <Card elevation={12} sx={{width:"100%", minHeight:350}}>
            <CardContent>
            <Stack spacing={1} sx={{pl:5}}>
                <Stack spacing={3} direction="row" alignItems="center" >
                        <Card sx={{px:2}}>
                            <CardContent>
                                <p>"{comment.content}".</p>
                            </CardContent>
                        </Card>
                        <CommentImage commentImage={comment.photo}/>
                </Stack>
                <Card sx={{width:160, px:4}}>
                    <p>{date.toLocaleTimeString()}</p>
                    <p>{date.toDateString()}.</p>
                    <p>Comment by User: {comment.user}</p>
                </Card>
            {currentUser.displayName == comment.user ? <>
            <ImageSelect id={id} handleFileInput={handleFileInput} handlePhotoAdd={handlePhotoAdd} handlePhotoToDb={handlePhotoToDb} commentImage={comment.photo} photo={photo} previewNumber={previewNumber} />
            <button id={id} onClick={handleImageDelete}>Delete Image</button>
            <button id={id} onClick={handleCommentDelete}>Delete Comment</button>
            </>: ""}
            </Stack>

            </CardContent>
        </Card>
    </Paper>
    )
}

export default Comment