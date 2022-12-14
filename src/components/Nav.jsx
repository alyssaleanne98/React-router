import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="nav">
            <Link to='/'>
                <div> Crypto Price </div>
            </Link>
            <Link to='/Stocks'>
                <div> Stocks </div>
            </Link>
        </div>
    );
}

export default Nav;