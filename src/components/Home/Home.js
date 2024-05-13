import MovieList from '../MovieList/MovieList';
import React, { useEffect, useState } from "react";

function Home() {
    const [movieArr, setMoviesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `http://localhost:3000/trending`;
        const res = await fetch(serverURL);
        const jsonRes = await res.json();
        console.log(jsonRes)
        setMoviesArr(jsonRes);
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <>
            <h1 style={{
                textAlign: 'center',
                padding: '40px',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to left, #553c9a, #b393d3)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text'
            }}>Netflix Movies</h1>
            <MovieList movieArr={movieArr} />
        </>
    )
}

export default Home;
