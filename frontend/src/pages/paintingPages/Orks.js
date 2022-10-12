import {Link} from 'react-router-dom';
import {Button} from 'react';
const Orks = () => {
    return (
        <div className='Orks'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            <div className='content'
            >
                <h1>Orks</h1>
                <Link to="/painting/Orks/Kommandos">
                    <h2>Kommandos</h2>
                </Link>
            </div>
        </div>
    )
}
export default Orks;