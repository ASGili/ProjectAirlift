import { Stack } from "@mui/material"

const AddComment = ({handleAddComment, setCommentText, content})=>{

    const handleCommentText = (event)=>{
        setCommentText(event.target.value);
        console.log(event.target.value)
    }

    return(
        <Stack>
        <input value={content} onChange={handleCommentText}type="text"/>
        <button onClick={handleAddComment}>Add Comment</button>
        </Stack>
    )
}

export default AddComment