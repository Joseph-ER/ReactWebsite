import React from 'react';
import ReactPlayer from 'react-player';

const Gaming = () => {
    return (
        <div className='gaming'>
            <div className="list-style">
                <h2>Gaming</h2>
            </div>
            <div className='list-style'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=MYYlvMn3khE'/>
            </div>
            <div className='list-style'>
                <p>This is my favourite game</p>
            </div>
        </div>
    )
}
export default Gaming;