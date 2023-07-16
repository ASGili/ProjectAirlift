import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./FooterComponents/Footer";
import Header from "./HeaderComponents/Header";
import BookPage from './containers/BookPage';
import ErrorPage from './containers/ErrorPage';
import Home from './containers/Home';
import LoginPage from './containers/LoginPage';

function App() {
  
  return (
    <div className="App">
    <Header/>
    <Router>
      <Routes>
        <Route path ="*" element= <ErrorPage /> />
        <Route path ="/" element= <Home/> />
        <Route path ="/home" element= <Home/> />
        <Route path ="/books/:DbBookId" element= <BookPage/> />
        <Route path ="/login" element= <LoginPage/> />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
