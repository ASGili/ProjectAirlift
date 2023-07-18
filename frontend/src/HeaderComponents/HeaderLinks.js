import { Home, Login, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const HeaderLinks = ({handleLogOut})=> {

    return(
        <Stack spacing={3} direction="row" >
            <Button variant="contained" startIcon={<Home/>} ><a href="/">Home - Add a Book</a></Button>
            <Button variant="contained" startIcon={<Login/>}> <a href="/login">Log In</a></Button>
            <Button variant="contained" endIcon={<Logout/>} onClick={handleLogOut}>Log Out</Button>
        </Stack>
    )
}

export default HeaderLinks;