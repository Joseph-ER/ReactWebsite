import {Link} from 'react-router-dom';
const Kommandos = () => {
    return (
        <div className='Kommandos'>
            <Link to="/painting/Orks">
                <p>Back</p>
            </Link>
            <div className='content'>
                <h2>Kommandos</h2>
            </div>
        </div>
    )
}
export default Kommandos;