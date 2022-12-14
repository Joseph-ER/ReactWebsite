import {Link} from 'react-router-dom';
import plagueMarines1 from '../../components/images/plagueMarines1.jpg';
import plagueMarines2 from '../../components/images/plagueMarines2.jpg';
const PlagueMarines = () => {
    return (
        <div className='PlagueMarines'>
           <div className='back-button'>
            <Link to="/painting/DeathGuard">
                <h3>Back</h3>
            </Link>
            </div>
            <div className='list-style'>
                <h2>Plague Marines</h2>
            </div>
            <div className='view-style'>
                <img src={plagueMarines1} className='view-img'/>
            </div>
        </div>
    )
}
export default PlagueMarines;