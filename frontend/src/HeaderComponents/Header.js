import { Container, Stack } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";

const Header = ({currentUser})=> {

    return(
        <Stack direction="row" justifyContent="space-between" maxWidth="false" sx={{mx:10, height:"10vh"}}>
            <header className="header-main">
                <h1>Project Airlift</h1>
                <HeaderLinks/>
            </header>
            <HeaderProfile currentUser={currentUser}/>
        </Stack>
    )
}

export default Header;