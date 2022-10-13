import {React, Button} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import typhus from '../components/images/typhus.jpg';
import kommandoNob from '../components/images/kommandoNob.jpg';
import battleSisters from '../components/images/battleSisters.jpg'


const Painting = () => {
    return (
        <div className='paintingNavigation'>
            <div className='list-style'>
            <h2>Painting- Factions</h2>
            </div>
            <div className='list-style'>
            <Link to="/painting/DeathGuard">
                <h1>Death Guard</h1>
                <img src={typhus} className='list-img'/>
            </Link>
            </div>
            <div className='list-style'>
            <Link to ="/painting/Orks">
                <h1>Orks</h1>
                <img src={kommandoNob} className='list-img'/>
            </Link>
            </div>
            <div className='list-style'>
            <Link to="/painting/AdeptaSororitas">
                <h1>Adepta Sororitas</h1>
                <img src={battleSisters} className='list-img'/>
            </Link>
            </div>
        </div>
    )
}
export default Painting;