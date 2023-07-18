import { Home, Login, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const HeaderLinks = ({handleLogOut})=> {

    return(
        <Stack spacing={3} direction="row" >
            <Button variant="contained" startIcon={<Home/>} href="/home">Home - Add a Book</Button>
            <Button variant="contained" startIcon={<Login/>} href="/">Log In</Button>
            <Button variant="contained" endIcon={<Logout/>} onClick={handleLogOut}>Log Out</Button>
        </Stack>
    )
}

export default HeaderLinks;