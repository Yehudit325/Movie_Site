import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Preview from '../shared/Preview';
import {apiRequest} from '../../services/api'

function MovieIndex(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //once
        apiRequest().then(data => setMovies(data.results));

        //unmount
        return () => console.log("I'm dead");
    }, []);

    
    return (
        <div>
            <h1>Movies</h1>
            <Navigation />
            {movies.map(movie =>(
                <Link to={'/details/' + movie.id}>
                <Preview movie={movie}/>
                </Link>
            ))}
        </div>
    );
}

export default MovieIndex;

// <pre>{JSON.stringify(movie, 1, 1)}</pre>