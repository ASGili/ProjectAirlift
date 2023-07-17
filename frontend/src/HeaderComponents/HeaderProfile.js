const HeaderProfile= ({currentUser})=>{


    return(

        currentUser ? <p>Current User Logged In: {currentUser.displayName}</p> : null
    )
}

export default HeaderProfile