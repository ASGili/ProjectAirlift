import { Container, Stack } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";

const Header = ({currentUser})=> {

    return(
        <Stack direction="row" alignItems="center" justifyContent="space-between" maxWidth="false" sx={{mx:10, height:"10vh"}}>
            <a href="/"><h1>Project Airlift</h1></a>
            <HeaderLinks/>
            <HeaderProfile currentUser={currentUser}/>
        </Stack>
    )
}

export default Header;