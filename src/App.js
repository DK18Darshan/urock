import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Shop from './Page/Shop';
import NavBar from './components/Navbar';
import Single from './Page/Single';


function App() {
  return (
    <>
      <Nav/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/single/:id' element={<Single/>} />

      </Routes>
      <Footer/>


    </>
  );
}

export default App;
