import { Card, CardContent, Paper, Stack } from "@mui/material"
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
    <Paper elevation={0}>
        <Card elevation={5}>
            <CardContent>
            <Stack justifyContent="space-between" sx={{py: 2,px:2}}>
                <Stack spacing={1}>
                        <p>"{commentText}"</p>
                        <p>{date.toLocaleTimeString()} {date.toDateString()}</p>
                </Stack>
                <Stack alignItems="center" direction='row' justifyContent="space-between" >  
                    <Stack className="select-image" direction="column" alignItems="flex-start" sx={{px:1}}>
                        <label style={{padding:"inherit"}} htmlFor="img">Select Image:</label>
                        <input id="img" onInput={handleFileInput} type="file" name="img" accept="image/*"/>
                        <input id={id} onClick={handlePhotoAdd} type="submit" value={"See Preview of Image"}/>
                        <input id={id} onClick={handlePhotoToDb} type="submit" value={"Save Image"}/>
                    </Stack>
                    {photo == ""? "": 
                        <div>
                            <label>Preview Image</label><br/>
                            <img id="preview-img" alt="upload-preview"  height={108} width={108} src={photo}/>
                        </div>}
                        <CommentImage commentImage={commentImage}/>
                </Stack>    
            <button id={id} onClick={handleImageDelete}>Delete Image</button>
            <button id={id} onClick={handleCommentDelete}>Delete Comment</button>
            </Stack>
            </CardContent>
        </Card>
    </Paper>
    )
}

export default Comment