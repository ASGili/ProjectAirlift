import { Container } from "@mui/material";
import FooterLinks from "./FooterLinks";

const Footer = ()=> {

    return(
        <Container maxWidth="false" sx={{height: "5vh"}}>
            <footer className="footer-main">
                <h4>Aric Gilinsky 2023</h4>
                <FooterLinks/>
            </footer>
        </Container>
    )
}

export default Footer;