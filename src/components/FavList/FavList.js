import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from "react-bootstrap/Modal";

function FavList() {

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [updateComment, setUpdateComment] = useState('');
    const [editComment, setEditComment] = useState(false);
    const [favArr, setFavArr] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        try {
            const response = await fetch('http://localhost:3000/getMovies');
            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.json();
            setFavArr(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
        setUpdateComment('');
        setEditComment(false);
    };

    const handleUpdateClick = (item) => {
        setSelectedItem(item);
        setUpdateComment(item.comment);
        setEditComment(true);
        setShowModal(true);
    };

    const handleUpdate = async () => {
        if (!selectedItem) return;
    
        const updatedItem = { ...selectedItem, comment: updateComment };
        try {
            const response = await fetch(`http://localhost:3000/editMovie/${selectedItem.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedItem),
            });
            if (!response.ok) {
                throw new Error('Failed to update item');
            }
            getMovies(); // Update movie list after successful update
            handleCloseModal();
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDeleteClick = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:3000/deleteMovie/${itemId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            getMovies(); // Update movie list after successful delete
            handleCloseModal();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {favArr.map(movie => (
                    <Col key={movie.id}>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                            <Card.Body>
                                <Card.Title>{movie.original_title}</Card.Title>
                                {movie.overview} 
                                <Button variant="outline-primary" onClick={() => handleUpdateClick(movie)}>See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    {selectedItem && <Modal.Title>{selectedItem.title}</Modal.Title>}
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (
                        <>
                            <img src={selectedItem.poster_path} alt={selectedItem.title} style={{ maxWidth: '100%' }} />
                            <p>{selectedItem.overview}</p>
                            {editComment && (
                                <textarea value={updateComment} onChange={(edit) => setUpdateComment(edit.target.value)} placeholder="Your New Comment"/>
                            )}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleCloseModal}> Close </Button>
                    <Button variant="outline-primary" onClick={handleUpdate}>Update</Button>
                    <Button variant="outline-danger" onClick={() => handleDeleteClick(selectedItem.id)}>  Delete </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FavList;
