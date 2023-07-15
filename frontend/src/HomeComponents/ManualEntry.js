import { Container, Paper, Stack } from "@mui/material"
import { useState } from "react"

const ManualEntry = ({setBarcode})=>{

    const handleClick = (event)=>{
        setBarcode(inputValue)
    }

    const [inputValue, setInputValue] = useState("")

    return (
        <Stack direction="row" spacing={4} >  
                <label htmlFor="submitButton">ISBN Entry:</label>        
                <input onChange={(event) => setInputValue(event.target.value)} type="text" maxLength="13" id="submitButton"/>
                <button onClick={handleClick} type="button" id="submitButton">Submit</button>
        </Stack>
    )
}

export default ManualEntry