import { Stack } from "@mui/material"
import CommentImage from "./CommentImage"

const ImageSelect = ({
    id,
    handleFileInput,
    handlePhotoAdd,
    handlePhotoToDb,
    commentImage,
    photo,
    previewNumber
})=>{
    return(
        <Stack alignItems="center" direction='row' justifyContent="center" sx={{height:200}}>  
            <Stack className="select-image" direction="column" alignItems="flex-start" sx={{px:1}}>
                <label style={{padding:"inherit"}} htmlFor="img">Select Image:</label>
                <input id="img" onInput={handleFileInput} type="file" name="img" accept="image/*"/>
                <input id={id} onClick={handlePhotoAdd} type="submit" value={"See Preview of Image"}/>
            </Stack>
                {previewNumber !== id ? "": 
                <Stack spacing={0} alignItems="center" sx={{}}>
                    <label>Preview Image</label><br/>
                    <img id="preview-img" alt="upload-preview"  height={108} width={108} src={photo}/><br/>
                    <input id={id} onClick={handlePhotoToDb} type="submit" value={"Save Image"}/>
                </Stack>}
        </Stack>    
    )
}

export default ImageSelect