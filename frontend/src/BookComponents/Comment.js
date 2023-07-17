import { Card, CardContent, Paper, Stack } from "@mui/material"
import ImageSelect from "./ImageSelect"

const Comment = ({
    id, 
    comment,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput,
    handlePhotoToDb,
    handleImageDelete,
    photo,
    previewNumber
    })=>{

    let date = new Date()
    date.setTime(comment.date)
    

    return (
    <Paper elevation={5} sx={{width:"100%"}}>
        <Card elevation={12} sx={{width:"100%"}}>
            <CardContent>
            <Stack justifyContent="space-between" sx={{py: 2,px:2}}>
                <Stack direction="row" alignItems="center" spacing={1}>
                        <p>"{comment.content}".</p>
                        <p>{date.toLocaleTimeString()} {date.toDateString()}. Comment by User: {comment.user}</p>
                </Stack>
            <ImageSelect id={id} handleFileInput={handleFileInput} handlePhotoAdd={handlePhotoAdd} handlePhotoToDb={handlePhotoToDb} commentImage={comment.photo} photo={photo} previewNumber={previewNumber} />
            <button id={id} onClick={handleImageDelete}>Delete Image</button>
            <button id={id} onClick={handleCommentDelete}>Delete Comment</button>
            </Stack>
            </CardContent>
        </Card>
    </Paper>
    )
}

export default Comment