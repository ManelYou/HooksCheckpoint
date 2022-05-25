import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const MovieCard = ({movie}) =>{
    //console.log("movieCard");
    return(
        <div>
            <Link to="/details/${id}" state={{desc: movie.description, trailer: movie.trailer}}>
            <Card style={{ width: "10rem" }}>
                <Card.Img
                variant="top"
                src={movie.poster}
                style={{ width: "150px" }}
                />
                <Card.Body>
                
                <Card.Title >{movie.title}</Card.Title>
                
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text>{movie.rating}</Card.Text> 
                </Card.Body>
            </Card>
            </Link>
            
        </div>
    );
}

export default MovieCard;