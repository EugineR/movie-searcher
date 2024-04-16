import { Link } from 'react-router-dom';

import './Header.css'

export default function () {
    return (
        <div className="header">
            <Link to="/"><h1>Movie Searcher</h1></Link>
            <span>Log in</span>
        </div>
    );
}