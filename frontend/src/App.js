import './App.css';
import Header from "./HeaderComponents/Header"
import Footer from "./FooterComponents/Footer"
import Home from './containers/Home';
import ErrorPage from './containers/ErrorPage';
import BookPage from './containers/BookPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Paper } from '@mui/material';

function App() {
  
  return (
    <div className="App">
    <Container>
    <Header />
    <Router>
      <Routes>
        <Route path ="*" element= <ErrorPage /> />
        <Route path ="/" element= <Home/> />
        <Route path ="/home" element= <Home/> />
        <Route path ="/books/:DbBookId" element= <BookPage/> />
      </Routes>
    </Router>
    <Footer/>
    </Container>
    </div>
  );
}

export default App;
