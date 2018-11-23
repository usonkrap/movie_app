import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function Movie({title, poster, synopsis, genres}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster title={title} poster={poster}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis text = {synopsis} maxLine = {3} />
                </div>
            </div>
        </div>
    );
}

const MoviePoster = ({poster, title}) => {
    return (
        <img className="Movie__Poster" src={poster}  alt={title} title={title} />
    );
}

const MovieGenre = ({genre}) => {
    return(
        <span className="Movie__Genre">{genre}</span>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
}

MoviePoster.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;
