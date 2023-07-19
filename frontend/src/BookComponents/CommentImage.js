import { Card, CardContent } from "@mui/material"

const CommentImage = ({commentImage})=>{

    return(
        <Card sx={{px:10}}>
        <CardContent>
        <img alt="current" id="savedimage" height="auto" width="250vw" src={commentImage} />
        </CardContent>
        </Card>
    )
}

export default CommentImage