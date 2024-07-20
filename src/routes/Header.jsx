import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <div className="wrapper">
            <h1>RealEstate</h1>
            <nav>
                <Link to='/'>Homepage</Link>
                <Link to=''>Apartments</Link>
                <Link to=''>Houses</Link>
                <Link to=''>Wishlist</Link>
            </nav>
            </div>
        </header>
    )
}