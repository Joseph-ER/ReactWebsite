import {Link} from 'react-router-dom';
const AdeptaSororitas = () => {
    return (
        <div className='Adepta Sororitas'>
           <div className='back-button'>
            <Link to="/painting">
                <h3>Back</h3>
            </Link>
            </div>
            <div className='list-style'>
                <h2>Adepta Sororitas</h2>
            </div>
                <div className='list-style'>
                <Link to="/painting/AdeptaSororitas/BattleSisters">
                    <h1>Battle Sisters</h1>
                </Link>
            </div>
        </div>
    )
}
export default AdeptaSororitas;