import {Link} from 'react-router-dom';
const BattleSisters = () => {
    return (
        <div className='BattleSisters'>
            <Link to="/painting/Orks">
                <p>Back</p>
            </Link>
            <div className='content'>
                <h2>Battle Sisters</h2>
            </div>
        </div>
    )
}
export default BattleSisters;