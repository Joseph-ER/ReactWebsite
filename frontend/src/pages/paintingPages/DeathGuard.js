import {Link} from 'react-router-dom';
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
                </Link>
            </div>
        </div>
    )
}
export default DeathGuard;