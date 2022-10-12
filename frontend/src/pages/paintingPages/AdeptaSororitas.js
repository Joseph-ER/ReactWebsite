import {Link} from 'react-router-dom';
const AdeptaSororitas = () => {
    return (
        <div className='Adepta Sororitas'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            <div className='content'>
                <h2>Adepta Sororitas</h2>
                <Link to="/painting/AdeptaSororitas/BattleSisters">
                    <h2>Battle Sisters</h2>
                </Link>
            </div>
        </div>
    )
}
export default AdeptaSororitas;