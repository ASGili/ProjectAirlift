import Comment from "./Comment"

const BookComments = ({commentData})=>{

    let bookComments =commentData.map((comment) => 
    <Comment 
    key={comment.date} 
    commentText={comment.content}
    commentDate={comment.date}    
    />)

    
    return (
        bookComments
    )
}

export default BookComments