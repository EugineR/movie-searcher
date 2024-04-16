import { Route, Routes } from 'react-router-dom';

import './Body.styles.css'

import MovieList from "../MovieList/MovieList";

export default function () {
    return (
        <div className="body">
            <div className="left-side"></div>
            <div className="right-side">
                <Routes>
                    <Route path="/movie" element={ <div>Movie page</div> }/>

                    <Route path="/" element={ <MovieList/> }/>
                </Routes>
            </div>
        </div>
    );
}