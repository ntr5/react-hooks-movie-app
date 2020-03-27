import React, { useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';


const MovieForm = () => {
    const { dispatch } = useContext(MovieContext);
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    
    const handleSubmit  = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_MOVIE',
            movie: {
                title: title,
                genre: genre
            }
        })
        setTitle('')
        setGenre('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Movie Title"
                value={title}
                onChange={(event) => {setTitle(event.target.value)}}
            />
            <input type="text"
                placeholder="Movie Genre"
                value={genre}
                onChange={(event) => {setGenre(event.target.value)}}
            />
            <button type="submit" value="Add Movie">Save</button>
        </form>
    )
}

export default MovieForm