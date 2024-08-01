import { Outlet, Link } from "react-router-dom"
import Header from "./Header"
import RealEstateList from "./RealEstateList"
import Filter from "./Filter"
import { useSearchParams } from "react-router-dom"



export default function Root() {
    let [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get('price')
    
    const displayedRealEstate = '';


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