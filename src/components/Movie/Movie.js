import React, { useState } from 'react';
import './Movie.css'; // Import CSS file
import MovieModal from '../MovieModal/MovieModal'

function Movie(props) {
    const [showModal, setShowModal] = useState(false);
    const [clickedItem, setClickedItem] = useState({})

    const handleShow = (item) => {
        setShowModal(true);
        console.log(item)
        setClickedItem(item)
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <figure className="movie">
            <div className="movie__hero">
                <img src={`https://image.tmdb.org/t/p/w500${props.MovieImage}`} alt={props.MovieName} className="movie__img" />
            </div>
            <div className="movie__content">
                <div className="movie__title">
                    <h1 className="heading__primary">{props.MovieName} <i className="fas fa-fire"></i></h1>
                    <div className="movie__tag movie__tag--1">#action</div>
                    <div className="movie__tag movie__tag--2">#thriller</div>
                </div>
                <p className="movie__description">{props.Movieinfo}</p>
                {/* <p className="movie__description" style={{fontSize:'12px', textAlign: 'center', padding:'0px', margin:'0px'}}>{props.Movieyear}</p> */}

                <div className="movie__details">
                    <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock"></i></span>{props.MovieDuration}</p>
                    <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar"></i></span>{props.MoviePrice}</p>
                    

                    {/* Button to open modal */}
                    <button className="btn btn-shared btn-like full-width-btn" onClick={() => handleShow(props)}>
                    Add to Favorites
                    </button>
                </div>
                <MovieModal showModal={showModal} handleClose={handleClose} clickedItem={clickedItem}  />
            </div>
            <div className="movie__price">{props.MoviePrice}</div>
        </figure>
    );
}

export default Movie;
