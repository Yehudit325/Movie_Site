import React from 'react';

function Preview(props) {
    const {movie} = props;

    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}/>
        </div> 
    );
}

export default Preview;

// const Preview = ({movie}) => (
//     <>
//         <h3>{movie.title}</h3>
//         <img src={movie.thumbnailUrl}/>
//     </>
// );