import { Avatar, Stack } from "@mui/material"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const HeaderProfile= ({currentUser})=>{


    return(

        currentUser ? <p>Current User Logged In: {currentUser.email}</p> : null
    )
}

export default HeaderProfile