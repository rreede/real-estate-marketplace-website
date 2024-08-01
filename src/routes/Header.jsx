import { NavLink } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <div className="wrapper">
            <h1>RealEstate</h1>
            <nav>
                <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/apartments'>Apartments</NavLink>
                <NavLink to='/houses'>Houses</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/wishlist'>Wishlist</NavLink>
            </nav>
            </div>
        </header>
    )
}