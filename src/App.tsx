import { Routes, Route } from 'react-router-dom';
import Home from './views/home';
import './App.css'
import Libro from './views/libro';
import Create from './views/crear';
import SearchBook from './views/search_book';
import Perfil from './views/perfil';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:libroId" element={<Libro />} />
          <Route path='/book/create' element={<Create/>}/>
          <Route path='/book/search' element={<SearchBook/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </>
 );
};

export default App;
