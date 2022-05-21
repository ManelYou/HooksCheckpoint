import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = ({movies}) =>{
    return(
    <div className='listAlign'>
       {
       movies.map(item =>(
            <MovieCard key = {item.title} movie = {item}/>
       ))}
    </div>
    );
}

export default MovieList;