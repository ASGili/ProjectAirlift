import { Stack } from "@mui/material"
import CommentImage from "./CommentImage"

const Comment = ({
    id, 
    commentText,
    commentDate,
    commentImage,
    handleCommentDelete,
    handlePhotoAdd,
    handleFileInput,
    handlePhotoToDb,
    handleImageDelete,
    photo
    })=>{

    let date = new Date()
    date.setTime(commentDate)
    

    return (
    <Stack direction="row" justifyContent="space-between" sx={{py: 2,px:2, border:3}}>
        <Stack spacing={1}>
            <p>"{commentText}"</p>
            <p>{date.toLocaleTimeString()} {date.toDateString()}</p>
        </Stack>
        
        <Stack alignItems="center">  
            <Stack className="select-image" direction="row" alignItems="flex-start" sx={{px:1}}>
                <label style={{padding:"inherit"}} htmlFor="img"></label>
                <input onInput={handleFileInput} type="file" id="img" name="img" accept="image/*"/>
                <input id={id} onClick={handlePhotoAdd} type="submit" value={"See Preview of Image"}/>
                <input id={id} onClick={handlePhotoToDb} type="submit" value={"Save Image"}/>
            </Stack>
            {photo == ""? "": <img  height={132} width={165} src={photo}/>}
            <CommentImage commentImage={commentImage}/>
        </Stack>    
        <button id={id} onClick={handleImageDelete}>Delete Image</button>
        <button id={id} onClick={handleCommentDelete}>Delete Comment</button>
    </Stack>
    )
}

export default Comment