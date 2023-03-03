import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=c66f91b1c6b4c4d5485721c5e1d01b10&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setSearchResults(data.results)
      })
    
    // console.log(searchText, "is the search text")
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutView />} />
        <Route path='search' element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path='movies/:id' element={<MovieView />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
