import { Stack } from "@mui/system"

const WelcomeLanding = () => {

    return (
        <Stack sx={{mx:5,mt:11, fontWeight:"bold"}}>
        <section>
            <p>Scan a book's barcode or enter the ISBN below to get started.</p>
        </section>
        </Stack>
    )
}

export default WelcomeLanding