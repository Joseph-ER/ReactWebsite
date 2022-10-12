import {Link} from 'react-router-dom';
const DeathGuard = () => {
    return (
        <div className='deathguard'>
            <Link to="/painting">
                <p>back</p>
            </Link>
            <div className='content'>
                <h2>Death Guard</h2>
            </div>
        </div>
    )
}
export default DeathGuard;