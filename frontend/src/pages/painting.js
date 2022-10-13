import {React, Button} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';


const Painting = () => {
    return (
        <div className='paintingNavigation'>
            <div className='list-style'>
            <h2>Painting- Factions</h2>
            </div>
            <div className='list-style'>
            <Link to="/painting/DeathGuard">
                <h1>Death Guard</h1>
            </Link>
            </div>
            <div className='list-style'>
            <Link to ="/painting/Orks">
                <h1>Orks</h1>
            </Link>
            </div>
            <div className='list-style'>
            <Link to="/painting/AdeptaSororitas">
                <h1>Adepta Sororitas</h1>
            </Link>
            </div>
        </div>
    )
}
export default Painting;