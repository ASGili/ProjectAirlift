import { Card, CardContent } from "@mui/material"

const CommentImage = ({commentImage})=>{

    return(
        <Card sx={{m:2,p:2}}>
        <CardContent>
        <label>Current Image</label><br/>
        <img id="savedimage" height={240} width={300} src={commentImage} />
        </CardContent>
        </Card>
    )
}

export default CommentImage