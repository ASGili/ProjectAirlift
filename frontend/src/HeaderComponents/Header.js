import {AppBar } from "@mui/material";
import HeaderLinks from "./HeaderLinks";
import HeaderProfile from "./HeaderProfile";

const Header = ({currentUser, handleLogOut})=> {

    return(
            <AppBar sx={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", bgcolor: "#FAF4B7" }} >
            <a style={{textDecoration:"none"}} href="/"><h1 style={{color:"#4A47A3"}}>Bookjourney</h1></a>
            <HeaderLinks handleLogOut={handleLogOut}/>
            <HeaderProfile currentUser={currentUser} />
            </AppBar>
    )
}

export default Header;