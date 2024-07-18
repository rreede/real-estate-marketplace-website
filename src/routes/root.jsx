import { Outlet, Link } from "react-router-dom"
import Header from "./Header"

export default function Root() {
    return(
        <>
            <Header/>
            <Outlet />

           <Link to='contacts/1'>1</Link>
        </>
    )
}