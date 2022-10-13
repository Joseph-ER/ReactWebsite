import {Link} from 'react-router-dom';
import plagueMarines1 from '../../components/images/plagueMarines1.jpg';
import typhus from '../../components/images/typhus.jpg';
import poxwalkers from '../../components/images/poxWalkers.jpg';
const DeathGuard = () => {
    return (
        <div className='deathguard'>
           <div className='back-button'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            </div>
            <div className='list-style'>
                <h2>Death Guard</h2>
            </div>
            <div className='list-style'>
                <Link to="/painting/DeathGuard/PlagueMarines">
                    <h1>Plague Marines</h1>
                    <img src={plagueMarines1} className='list-img'/>
                </Link>
            </div>
            <div className='list-style'>
                <Link to="/painting/DeathGuard/PlagueMarines">
                    <h1>Typhus</h1>
                    <img src={typhus} className='list-img'/>
                </Link>
            </div>
            <div className='list-style'>
                <Link to="/painting/DeathGuard/PlagueMarines">
                    <h1>Pox Walkers</h1>
                    <img src={poxwalkers} className='list-img'/>
                </Link>
            </div>
        </div>
    )
}
export default DeathGuard;