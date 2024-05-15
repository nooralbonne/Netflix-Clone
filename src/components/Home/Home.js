import MovieList from '../MovieList/MovieList';
import React, { useEffect, useState } from "react";

function Home() {
    const [movieArr, setMoviesArr] = useState([]);

    const sendReq = async () => {
        // const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
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
                padding: '80px 80px 30px 80px',
                color: 'transparent',
                backgroundImage: 'linear-gradient(to left, #553c9a, #b393d3)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text'
            }}> </h1>
            <MovieList movieArr={movieArr} />
        </>
    )
}

export default Home;
