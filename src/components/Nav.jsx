import { Link } from 'react-router-dom'
//needed to allow user to navigate to another page by clicking on it.

function Nav () {
    // function with empty parameter - no argument
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