import React from 'react';
import me from "../components/images/me.JPG";
const Home = () => {
    return (
        <div classNamwe='home-page'>
            <div className='about'>
                <h2>About me!</h2>
                <p>Hi, I'm Joe! A new Software Developer from the Makers Academy Bootcamp. I love that my new life is problem-solving through code! What I love about tech is how flexible it is; for every single problem I've come across I've found multiple different ways to solve the issue in varying complexities!</p>
            </div>
            <div className="Image">
                <img src={me} alt="Me"/>
            </div>
        </div>
    )
}
export default Home;