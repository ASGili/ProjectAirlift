import {Stack } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";

const Header = ({currentUser, handleLogOut})=> {

    return(
        <Stack direction="row" alignItems="center" justifyContent="space-between" maxWidth="false" sx={{mx:10, height:"10vh"}}>
            <a href="/"><h1>Project Airlift</h1></a>
            <HeaderLinks handleLogOut={handleLogOut}/>
            <HeaderProfile currentUser={currentUser} />
        </Stack>
    )
}

export default Header;