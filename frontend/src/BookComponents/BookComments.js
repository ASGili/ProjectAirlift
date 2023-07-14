import Comment from "./Comment"

const BookComments = ({commentData,handleCommentDelete,handlePhotoAdd,handleFileInput,photo})=>{

    let bookComments =commentData.map((comment,index) => 
    <Comment 
    key={index} 
    id={index}
    commentText={comment.content}
    commentDate={comment.date}    
    handleCommentDelete={handleCommentDelete}
    handlePhotoAdd={handlePhotoAdd}
    handleFileInput={handleFileInput}
    photo={photo}
    />)

    
    return (
        bookComments
    )
}

export default BookComments