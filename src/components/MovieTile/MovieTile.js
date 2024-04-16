import './MovieTile.styles.css'

import defaultPoster from '../../assets/default-poster.png'

export default function ({ data }) {
    const posterSrc = data?.medium_cover_image
        || defaultPoster

    return (
        <div className="movie-tile">
            <img src={ posterSrc } alt="movie poster" className="poster-image"/>

            <div>
                <span>{ data?.title_long }</span>
            </div>
        </div>
    );
}