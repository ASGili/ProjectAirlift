import Comment from "./Comment"

const BookComments = ({
    commentData,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput,
    handlePhotoToDb,
    handleImageDelete,
    photo})=>{

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
    />)

    
    return (
        bookComments
    )
}

export default BookComments