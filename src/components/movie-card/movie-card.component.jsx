import React from 'react';
import '../movie-card/movie-card.css';

 const MovieCard = (props) => {
    return (
        <div className='card'>
            <h4>{props.title}</h4>
            <div className='img-wrapper'>
                <img src={props.imageUrl} alt={props.imageUrl}  /> 
            </div>
            <p>Released : {props.year}</p>
        </div>
    )
}

export default MovieCard;