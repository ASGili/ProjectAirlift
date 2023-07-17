import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Card, CardContent, Stack } from '@mui/material';

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

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
        <Stack direction={'row'}>
        <Stack spacing={1} sx={{m:5,p:5, width:300}}>   
        <label htmlFor="email">Email:</label>
        <input onChange={handleEmail} type="text" name="email" id="email"/>
        <label htmlFor="password">Password:</label>
        <input onChange={handlePassword} type="password" name="password" id="password"/>
        <button onClick={handleRegister} type="submit">Register</button>
        <button onClick={handleLogin} type="submit">Login</button>
        </Stack>

        <Card>
            <CardContent>
            <p>Current User:</p>
            {auth.currentUser == null ? "" :<p>{auth.currentUser.email}</p>}
            </CardContent>
        </Card>
        </Stack>)
}



export default LoginPage