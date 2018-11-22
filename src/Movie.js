import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster title={title} poster={poster}/>
            <h1>{title}</h1>
        </div>
    );
}

const MoviePoster = ({poster, title}) => {
    return (
        <img src={poster}  alt={title} />
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
