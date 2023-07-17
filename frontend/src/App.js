import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./FooterComponents/Footer";
import Header from "./HeaderComponents/Header";
import BookPage from './containers/BookPage';
import ErrorPage from './containers/ErrorPage';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState("")

  const firebaseConfig = {
      apiKey: "AIzaSyDQJW_XlB3cmU-qjmQd0fL9QBoTOdcl1Qo",
      authDomain: "airlift-392708.firebaseapp.com",
      projectId: "airlift-392708",
      storageBucket: "airlift-392708.appspot.com",
      messagingSenderId: "939039241193",
      appId: "1:939039241193:web:bfdf26a557fc0a49725178",
      measurementId: "G-B75RJ3VR7N"
    };
  
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
  if (user) {
      setCurrentUser(user)
  }
  });
  return (
    <div className="App">
    <Header currentUser={currentUser} />
    <Router>
      <Routes>
        <Route path ="*" element= <ErrorPage /> />
        <Route path ="/" element= <Home currentUser={currentUser} /> />
        <Route path ="/home" element= <Home currentUser={currentUser}/> />
        <Route path ="/books/:DbBookId" element= <BookPage currentUser={currentUser}/> />
        <Route path ="/login" element= <LoginPage currentUser={currentUser}/> />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
