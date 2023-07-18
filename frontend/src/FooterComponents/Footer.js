import FooterLinks from "./FooterLinks";
import { Box } from "@mui/system";

const Footer = ()=> {

    return(
        <Box maxWidth="false" sx={{height: "5vh",mx:5}}>
            <footer className="footer-main">
                <h4>Aric Gilinsky 2023</h4>
                <FooterLinks/>
            </footer>
        </Box>
    )
}

export default Footer;