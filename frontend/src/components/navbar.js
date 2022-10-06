import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <header>
            <div className="container">
            <Link to="/">
                <h1>About me</h1>
            </Link>
            <Link to="/software">
                <h1>Software projects</h1>
            </Link>
            <Link to="/painting">
                <h1>Painted Miniatures</h1>
            </Link>
            <Link to="/gaming">
                <h1>My Gaming Obsession</h1>
            </Link>
            </div>
        </header>
    )
}

export default Navbar;