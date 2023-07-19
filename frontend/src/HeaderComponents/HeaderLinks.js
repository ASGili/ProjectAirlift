import { Home, Login, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const HeaderLinks = ({handleLogOut})=> {

    return(
        <Stack spacing={1} direction="row" >
            <Button variant="contained" color="primary" startIcon={<Home/>} href="/home">Home - Add a Book</Button>
            <Button variant="contained" color="primary" startIcon={<Login/>} href="/">Log In</Button>
            <Button variant="contained" color="info" endIcon={<Logout/>} onClick={handleLogOut}>Log Out</Button>
        </Stack>
    )
}

export default HeaderLinks;