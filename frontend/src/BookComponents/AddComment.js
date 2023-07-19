import { Stack } from "@mui/material"

const AddComment = ({
    handleCommentAdd, 
    setCommentText, 
    content,
    currentUser
    })=>{

    const handleCommentText = (event)=>{
        setCommentText(event.target.value);
    }

    const handleEnter = (event)=>{
        if (event.keyCode === 13) {
            document.getElementById("addCommentButton").click()
        }
    }

    return(
        <>
         { !currentUser ? ""
        : 
        <Stack>
        <input id="add-comment" value={content} onKeyUpCapture={handleEnter} onChange={handleCommentText}type="text"/>
        <button id="addCommentButton" onClick={handleCommentAdd}>Add Comment</button>
        </Stack>}
        </>
    )
}

export default AddComment