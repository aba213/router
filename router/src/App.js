import './App.css';
import MovieList from './Components/MovieList';
import { Route,Routes } from 'react-router-dom';
import Description from './Components/Description';
import Home from './Components/Home ';
import MovieFilter from './Components/MovieFilter';
  function App() {
    return (
        <div>
            <Routes>
           
            <Route path = "/"element={<MovieList/>} />
        
            <Route path = "/Description/:title" element={< Description/>} />
            <Route path = "/*"element={<home/>} />
            </Routes>
        </div>
    );
}

export default App;
