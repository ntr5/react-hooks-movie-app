import React, { useContext } from "react";
import { MovieContext } from '../contexts/MovieContext'
import MovieDetails from './MovieDetails';

const MovieList  = () => {
    const { movies } = useContext(MovieContext)
    return movies.length ? (
        <div className="movie-list">
            <ul>
                {movies.map(movie => {
                    return (
                        <MovieDetails movie={movie} key={movie.id}/>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div>No movies to watch... Add some or go outside?</div>
    )
}

export default MovieList