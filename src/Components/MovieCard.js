import React from 'react';
import {Card} from 'react-bootstrap'


const MovieCard = ({movie}) =>{
    //console.log("movieCard");
    return(
        <div>
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
        </div>
    );
}

export default MovieCard;