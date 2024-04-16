import './Body.styles.css'

import MovieList from "../MovieList/MovieList";

export default function () {
    return (
        <div className="body">
            <div className="left-side"></div>
            <div className="right-side">
                <MovieList />
            </div>
        </div>
    );
}