import { Stack } from "@mui/material"
import { useState } from "react"

const AddComment = ({handleAddComment})=>{



    return(
        <Stack>
        <input type="text"></input>
        <button onClick={handleAddComment}>Add Comment</button>
        </Stack>
    )
}

export default AddComment