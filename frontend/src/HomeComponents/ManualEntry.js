import { Container } from "@mui/material"
import { useState } from "react"

const ManualEntry = ({setBarcode})=>{

    const handleClick = (event)=>{
        console.log(inputValue)
        setBarcode(inputValue)
    }

    const [inputValue, setInputValue] = useState("")

    return (

        <Container>
            <form>    
                <label htmlFor="submitButton">ISBN Entry:</label>        
                <input onChange={(event) => setInputValue(event.target.value)} type="text" maxLength="13" id="submitButton"/>
                <button onClick={handleClick} type="button" id="submitButton">Submit</button>
            </form>
        </Container>
    )
}

export default ManualEntry