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
    previewNumber,
    currentUser
    })=>{

    let bookComments =commentData.map((comment,index) => 
    <Comment 
    key={index} 
    id={index}
    comment={comment}
    handleCommentDelete={handleCommentDelete}
    handlePhotoAdd={handlePhotoAdd}
    handleFileInput={handleFileInput}
    handlePhotoToDb={handlePhotoToDb}
    handleImageDelete={handleImageDelete}
    photo={photo}
    previewNumber={previewNumber}
    currentUser={currentUser}
    />)

    
    return (
        <Stack spacing={3} sx={{my:5}}>
        {bookComments}
        </Stack>
    )
}

export default BookComments