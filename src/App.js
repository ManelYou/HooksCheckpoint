import React, {useEffect, useState} from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css';


function App() {

  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState(movies);
  const [newMovie, setMovieValues] = useState({title:'', description:'', poster:null}); //Change to useReducer
  const [filterVal, setFilterVal] = useState("");
  const addNewMovie  = ()=>{
    //add if title does exit do not add the movie
      let updatedMovie = [...movies, newMovie]
      // update the state to the updatedUsers
      setMovies(updatedMovie);
      setDisplayedMovies(updatedMovie);
      console.log("add movie");
    }
const handleMovieTitle = (event) =>{
  event.persist();
  setMovieValues((newMovie) => ({
		...newMovie,
		title: event.target.value,
	}));
 
}

const handleMovieDescription = (event) =>{
  event.persist();
  setMovieValues((newMovie) => ({
		...newMovie,
		description: event.target.value,
	}));
}

const handleMoviePoster = (event) =>{

console.log(URL.createObjectURL(event.target.files[0]));

setMovieValues((newMovie) =>({...newMovie, poster:URL.createObjectURL(event.target.files[0])}));
  console.log("handleMoviePoster");
  console.log(newMovie);
}

const GetFilteredMovies = (filterVal) =>{
  let moviList;
  if(filterVal !== ""){
    moviList = movies.filter(mov => mov.title === filterVal);
    console.log("get filtered movies...");
    console.log(moviList);
    setDisplayedMovies(moviList);
  }
  else{
    setDisplayedMovies(movies);
  }
  
  
}

useEffect(()=>{
  console.log("use effect run");
  GetFilteredMovies(filterVal);
}, [filterVal])

  return (
    <div>
      <h1>Welcome to my movie application</h1>
      <br/>

      <Filter filterVal = {filterVal} setFilterVal = {setFilterVal}/>
      <MovieList movies = {displayedMovies}/>

     <Form>
        <Form.Group className="mb-3">
            <Form.Label>Movie  Title</Form.Label>
            <Form.Control type="text" placeholder="Movie Title" value= {newMovie.title} onChange ={handleMovieTitle}/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Movie Description</Form.Label>
            <Form.Control type="text" placeholder = "Movie Description" value= {newMovie.description} onChange = {handleMovieDescription} rows={3} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file"  onChange = {handleMoviePoster}/>
        </Form.Group>

        <Button variant="primary" onClick = {addNewMovie}>
          Submit
        </Button>
      </Form>
      
    </div>
  );
}

export default App;
