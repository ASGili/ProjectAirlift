import { Container } from "@mui/material";

const ErrorPage = ()=>{

    return (
        <Container sx={{p: "2.5vh",height:"78vh", boxSizing:"unset"}}>
        <h1>404 Error</h1>
        <p>The page you are looking for does not exist, but really, does anything?</p>
        <p>Don't answer that.</p>
        </Container>

    )
}

export default ErrorPage;