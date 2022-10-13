import {Link} from 'react-router-dom';
const Orks = () => {
    return (
        <div className='Orks'>
            <div className='back-button'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            </div>
            <div className='list-style'>
                <h2>Orks</h2>
            </div>
                <div className='list-style'>
                <Link to="/painting/Orks/Kommandos">
                    <h1>Kommandos</h1>
                </Link>
            </div>
        </div>
    )
}
export default Orks;