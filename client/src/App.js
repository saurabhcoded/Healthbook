import {Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Book from './pages/Book';
import List from './pages/Recordlist';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/record' element={<List/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
