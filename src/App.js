import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header'
import Body from './components/Body/Body'

export default function () {
    return (
        <Router>
            <div className="main-container">
                <Header></Header>
                <Body></Body>
            </div>
        </Router>
    );
}
