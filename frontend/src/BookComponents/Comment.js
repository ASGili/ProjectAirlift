import { Stack } from "@mui/material"

const Comment = ({
    id, 
    commentText,
    commentDate,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput
    })=>{

    let date = new Date()
    date.setTime(commentDate)
    

    return (
    <Stack direction="row" justifyContent="space-between" sx={{py: 2,px:2, border:3}}>
        <Stack spacing={1}>
            <p>"{commentText}"</p>
            <p>{date.toLocaleTimeString()} {date.toDateString()}</p>
        </Stack>
        <Stack className="select-image" direction="row" alignItems="flex-end" sx={{px:2}}>
            <label style={{padding:"inherit"}} htmlFor="img">Select image: </label>
            <input onInput={handleFileInput} type="file" id="img" name="img" accept="image/*"/>
            <input onClick={handlePhotoAdd} type="submit" value={"Submit Photo"}/>
        </Stack>
        <button id={id} onClick={handleCommentDelete}>Delete Comment</button>
    </Stack>
    )
}

export default Comment