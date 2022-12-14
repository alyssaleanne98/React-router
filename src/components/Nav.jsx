import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="nav">
            <Link to='/'>
                <div> Home </div>
            </Link>
            <Link to='/stock'>
                <div> Dashboard </div>
            </Link>
            <Link to='/about'>
                <div> About </div>
            </Link>
        </div>
    );
}

export default Nav;