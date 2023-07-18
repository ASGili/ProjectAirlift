import {AppBar } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";

const Header = ({currentUser, handleLogOut})=> {

    return(
            <AppBar sx={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", bgcolor: "#709FB0" }} >
            <a style={{textDecoration:"none"}} href="/"><h1 style={{color:"#4A47A3"}}>Project Airlift</h1></a>
            <HeaderLinks handleLogOut={handleLogOut}/>
            <HeaderProfile currentUser={currentUser} />
            </AppBar>
    )
}

export default Header;