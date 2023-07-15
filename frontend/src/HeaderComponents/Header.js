import { Container } from "@mui/material";
import HeaderLinks from "./HeaderLinks";


const Header = ()=> {

    return(
            <header className="header-main">
                <a href="/"><img height={100} width={100} src="logo.jpg"></img></a> <h1>Project Airlift</h1>
                <HeaderLinks/>
            </header>
    )
}

export default Header;

