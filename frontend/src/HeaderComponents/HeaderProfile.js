
const HeaderProfile= ({currentUser})=>{


    return(
        currentUser ?<p>Current User Logged In: {currentUser.displayName}</p>: <p style={{width:170}}></p>
    )
}

export default HeaderProfile