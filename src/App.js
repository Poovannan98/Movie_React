import './App.css';
import './Components/AddMovie.css'
// import Navi from './Components/Navi';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import ColorGame from './Components/ColorGame';
import { useState } from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Ini_movie_list} from "./Components/Ini_movie_list"
import MovieDetails from './Components/MovieDetails';
import ResponsiveAppBar from './Components/AppBar';

function App() {

  const [movieList,setMovieList] = useState(Ini_movie_list)
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const [theme,setTheme] = useState(true)

  const theme1= theme ? lightTheme : darkTheme  

  function NotFound(){
     return <>
     <div className='notfound'>
      <h1>Page Not Found</h1>
     <img src='https://i.ytimg.com/vi/q1AAumPtAx4/maxresdefault.jpg' alt='not found' width="800px" height="500px"/>
     </div>
      </>
  } 
  
  return <> 
   <ThemeProvider theme={theme1}>
      
       
      {/* <Navi theme={darkTheme}/> */}
      <ResponsiveAppBar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<h1>Welcome to Movies app!</h1>} />
        <Route path="/colorgame" element={<ColorGame/>} />
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/movielist" element={<MovieList movieList={movieList}/> } />
        <Route path="/movielist/:id" element={<MovieDetails movieList={movieList} /> } />
        <Route path="/flims" element={<Navigate replace to = "/movielist"/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>   
      <CssBaseline /> 
    </ThemeProvider>
  </>
}

export default App;
