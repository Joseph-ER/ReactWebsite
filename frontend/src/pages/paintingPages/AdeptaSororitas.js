import {Link} from 'react-router-dom';
const AdeptaSororitas = () => {
    return (
        <div className='Adepta Sororitas'>
            <Link to="/painting">
                <p>Back</p>
            </Link>
            <div className='content'>
                <h2>Adepta Sororitas</h2>
            </div>
        </div>
    )
}
export default AdeptaSororitas;