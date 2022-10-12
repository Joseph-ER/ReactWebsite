import {Link} from 'react-router-dom';
const PlagueMarines = () => {
    return (
        <div className='PlagueMarines'>
            <Link to="/painting/Orks">
                <p>Back</p>
            </Link>
            <div className='content'>
                <h2>Plague Marines</h2>
            </div>
        </div>
    )
}
export default PlagueMarines;