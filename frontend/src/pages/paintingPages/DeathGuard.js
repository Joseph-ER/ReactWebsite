import {Link} from 'react-router-dom';
const DeathGuard = () => {
    return (
        <div className='deathguard'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            <div className='content'>
                <h2>Death Guard</h2>
                <Link to="/painting/DeathGuard/PlagueMarines">
                    <h2>Plague Marines</h2>
                </Link>
            </div>
        </div>
    )
}
export default DeathGuard;