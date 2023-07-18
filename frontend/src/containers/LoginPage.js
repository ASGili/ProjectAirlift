import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { Stack } from '@mui/material';

const LoginPage = ()=>{

  const firebaseConfig = {
    apiKey: "AIzaSyDQJW_XlB3cmU-qjmQd0fL9QBoTOdcl1Qo",
    authDomain: "airlift-392708.firebaseapp.com",
    projectId: "airlift-392708",
    storageBucket: "airlift-392708.appspot.com",
    messagingSenderId: "939039241193",
    appId: "1:939039241193:web:bfdf26a557fc0a49725178",
    measurementId: "G-B75RJ3VR7N"
  };

  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const [displayName, setDisplayName]= useState("")

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const handleEmail = (event)=>{
      setEmail(event.target.value)
    }
  const handlePassword = (event)=>{
      setPassword(event.target.value)
    }
  const handleRegister = ()=>{
      console.log(auth.currentUser)
      createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
          const user = userCredential.user;
        })
        .then(()=>updateProfile(auth.currentUser,{displayName}))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
  }

  const handleLogin = ()=>{
    console.log(auth.currentUser)
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  }

    return(
        <Stack direction={'row'} sx={{height:"110vh"}}>
          <Stack spacing={1} sx={{mx:"5vw",p:"5vw", width:300}}>  
          <h3>Register a new account:</h3> 
          <label htmlFor="username">Username:</label>
          <input onChange={(event)=>setDisplayName(event.target.value)} type="text" name="username" id="username"/>
          <label htmlFor="email">Email:</label>
          <input onChange={handleEmail} type="text" name="email" id="email"/>
          <label htmlFor="password">Password:</label>
          <input onChange={handlePassword} type="password" name="password" id="password"/>
          <button onClick={handleRegister} type="submit">Register</button>
          </Stack>
          <Stack spacing={1} sx={{mx:"5vw",p:"5vw", width:300}}>
          <h3>Login with an existing account:</h3> 
          <label htmlFor="email">Email:</label>
          <input onChange={handleEmail} type="text" name="email" id="email"/>
          <label htmlFor="password">Password:</label>
          <input onChange={handlePassword} type="password" name="password" id="password"/>
          <button onClick={handleLogin} type="submit">Login</button>
          </Stack>
        </Stack>)
}



export default LoginPage