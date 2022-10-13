import React from 'react';
import me from "../components/images/me.JPG";
const Home = () => {
    return (
        <div className='homepage'>
            <div className="list-style">
                <h2>About me!</h2>
            </div>
            <div className='main-style'>
            <div className="Image">
                <img src={me} alt="Me"/>
            </div>
            <div className='about'>
                <p style={{display: 'flex'}}>Hi, I'm Joe! A new Software Developer from the Makers Academy Bootcamp. I love that my new life is problem-solving through code! What I love about tech is how flexible it is; for every single problem I've come across I've found multiple different ways to solve the issue in varying complexities!</p>
            </div>
            </div>

        </div>
    )
}
export default Home;