import {React} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';


const Painting = () => {
    return (
        <div className='paintingNavigation'>
            <h2>Painting- Factions</h2>
            <Link to="/painting/DeathGuard">
                <h1>Death Guard</h1>
            </Link>
            <Link to ="/painting/Orks">
                <h1>Orks</h1>
            </Link>
            <Link to="/painting/AdeptaSororitas">
                <h1>Adepta Sororitas</h1>
            </Link>
        </div>
    )
}
export default Painting;