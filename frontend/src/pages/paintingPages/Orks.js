import {Link} from 'react-router-dom';
import {Button} from 'react';
const Orks = () => {
    return (
        <div className='Orks'>
            <Link to="/painting">
                <p>back</p>
            </Link>
            <div className='content'>
                <h2>Orks</h2>
            </div>
        </div>
    )
}
export default Orks;