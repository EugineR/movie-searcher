import { useEffect, useState } from "react";

import './MovieList.styles.css';
import { getRandomMovies } from "../../services/movie.service";
import  MovieTile from "../MovieTile/MovieTile";

export default function () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRandomMovies();
            setMovies(response.data.movies);
        }

        fetchData();
    }, [])


    return (
        <div className="movie-list">
            { movies.map(item => <MovieTile data={item}></MovieTile>) }
        </div>
    );
}