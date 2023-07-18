import { Stack } from "@mui/system";

const HeaderLinks = ({handleLogOut})=> {

    return(
        <Stack spacing={3} direction="row">
            <a href="/">Home - Add a Book</a>
            <a href="/login">Log In</a>
            <a onClick={handleLogOut}>Log Out</a>
        </Stack>
    )
}

export default HeaderLinks;