import {Link} from 'react-router-dom';
const PlagueMarines = () => {
    return (
        <div className='PlagueMarines'>
            <Link to="/painting/DeathGuard">
            <h3>Back</h3>
            </Link>
            <div className='content'>
                <h2>Plague Marines</h2>
            </div>
        </div>
    )
}
export default PlagueMarines;