import {Link} from 'react-router-dom';
const BattleSisters = () => {
    return (
        <div className='BattleSisters'>
            <Link to="/painting/AdeptaSororitas">
            <h3>Back</h3>
            </Link>
            <div className='content'>
                <h2>Battle Sisters</h2>
            </div>
        </div>
    )
}
export default BattleSisters;