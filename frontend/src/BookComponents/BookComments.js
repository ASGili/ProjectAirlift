import { Stack } from "@mui/material"
import Comment from "./Comment"

const BookComments = ({
    commentData,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput,
    handlePhotoToDb,
    handleImageDelete,
    photo,
    previewNumber
    })=>{

    let bookComments =commentData.map((comment,index) => 
    <Comment 
    key={index} 
    id={index}
    commentText={comment.content}
    commentDate={comment.date}    
    commentImage={comment.photo}
    handleCommentDelete={handleCommentDelete}
    handlePhotoAdd={handlePhotoAdd}
    handleFileInput={handleFileInput}
    handlePhotoToDb={handlePhotoToDb}
    handleImageDelete={handleImageDelete}
    photo={photo}
    previewNumber={previewNumber}
    />)

    
    return (
        <Stack spacing={3} sx={{my:5}}>
        {bookComments}
        </Stack>
    )
}

export default BookComments