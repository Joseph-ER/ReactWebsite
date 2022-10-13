import {Link} from 'react-router-dom';
const PlagueMarines = () => {
    return (
        <div className='PlagueMarines'>
           <div className='back-button'>
            <Link to="/painting/DeathGuard">
                <h3>Back</h3>
            </Link>
            </div>
            <div className='content'>
                <h2>Plague Marines</h2>
            </div>
        </div>
    )
}
export default PlagueMarines;