import { Card, CardContent } from "@mui/material"

const CommentImage = ({commentImage})=>{

    return(
        <Card sx={{m:2,p:2}}>
        <CardContent>
        <img alt="current" id="savedimage" height={300} width={360} src={commentImage} />
        </CardContent>
        </Card>
    )
}

export default CommentImage