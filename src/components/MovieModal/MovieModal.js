import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function MovieModal(props) {
    const [, setShow] = useState(false); 
    const [comment, setComment] = useState('');

    const handleClose = () => {
        setShow(false);
        props.handleClose(); 
    };

    const addToFavorites = async () => {
        const movieData = {
            title: props.clickedItem.MovieName,
            // release_year: props.clickedItem.Movieyear,
            comments: comment
        };
        try {
            // Send the movie data along with the comment to the backend
            const response = await axios.post('http://localhost:3000/addMovie', movieData);
            // Handle success
            console.log('Movie added to favorites:', response.data);
            handleClose(); // Close the modal after adding to favorites
        } catch (error) {
            // Handle error
            console.error('Error adding movie to favorites:', error);
        }
    };
    
    
    return (
        <>
            <Modal show={props.showModal} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.clickedItem.MovieName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`https://image.tmdb.org/t/p/w500${props.clickedItem.MovieImage}`} alt={props.clickedItem.MovieName} style={{marginBottom:'10px', maxWidth: '100%' , border: '6px solid #FFBBEC'}} />
                    <Form.Label >please write your comment here: </Form.Label>
                    <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={addToFavorites}>Save Changes</Button>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MovieModal;
