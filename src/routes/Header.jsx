import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <h1>Header</h1>
            <nav>
                <Link to=''>Apartments</Link>
                <Link to=''>Houses</Link>
                <Link to=''>Statistics</Link>
            </nav>

        </header>
    )
}