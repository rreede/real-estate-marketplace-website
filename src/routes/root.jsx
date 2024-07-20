import { Outlet, Link } from "react-router-dom"
import Header from "./Header"
import RealEstateList from "./RealEstateList"
import Filter from "./Filter"

export default function Root() {



    return(
        <>
            <Header/>
            <Outlet />
        <div className="wrapper">
        <Filter/>

             <RealEstateList/>
        </div>
                </>
    )
}