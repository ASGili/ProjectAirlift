import { Stack } from "@mui/material"

const Comment = ({commentText,commentDate})=>{
    let date = new Date()
    date.setTime(commentDate)
    return (
        <Stack spacing={1} sx={{border:3}}>
        <p>{commentText}</p>
        <p>{date.toDateString()}</p>
        <p>{date.toTimeString()}</p>
        </Stack>
    )
}

export default Comment