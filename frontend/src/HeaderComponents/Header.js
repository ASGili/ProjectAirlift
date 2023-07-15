import { Container } from "@mui/material";
import HeaderLinks from "./HeaderLinks";

const Header = ()=> {

    return(
        <Container maxWidth="false" sx={{height: 25}}>
            <header className="header-main">
                <h1>Project Airlift</h1>
                <HeaderLinks/>
            </header>
        </Container>
    )
}

export default Header;