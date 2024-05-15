import React from 'react';
import Movie from '../Movie/Movie'; // Import Movie component
import './MovieList.css'; // Import CSS file

function MovieList(props) {
    console.log(props.movieArr); 
    return (
        <div className="Movie-container">
            {props.movieArr.map((item) => (
                <Movie 
                    key={item.id}
                    MovieID={item.id} 
                    MovieName={item.title} 
                    MovieImage={item.poster_path}
                    Movieinfo={item.overview}
                    Movieyear={item.release_date} />
            ))}
        </div>
    );
}
export default MovieList;
