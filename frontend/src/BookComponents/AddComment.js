import { Stack } from "@mui/material"

const AddComment = ({
    handleCommentAdd, 
    setCommentText, 
    content})=>{

    const handleCommentText = (event)=>{
        setCommentText(event.target.value);
    }

    const handleEnter = (event)=>{
        if (event.keyCode === 13) {
            document.getElementById("addCommentButton").click()
        }
    }

    return(
        <Stack>
        <input value={content} onKeyUpCapture={handleEnter} onChange={handleCommentText}type="text"/>
        <button id="addCommentButton" onClick={handleCommentAdd}>Add Comment</button>
        </Stack>
    )
}

export default AddComment