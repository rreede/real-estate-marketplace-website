import Header from "./Header"
import {data} from './RealEstateArray'
import { Link } from "react-router-dom"
export default function ApartmentsView() {

const filteredApartments = data.filter((apartment) => {
    return apartment.type === 'Apartment'
})

    const apartments = filteredApartments.map((apartment) => {
        return (
            <>
                <div key={apartment.id} className="real-estate-item">
              

              <ul >
                  <div className="real-estate-image">
                      {apartment.new && <span className='new-property'>New</span>} 
                      <span className="realEstate-type">{apartment.type}</span> 
                      <li><img src={apartment.image}></img></li>
                  </div>
              <div className="real-estate-info">
                   <li>{apartment.title}</li>
                   <li>{apartment.description}</li>
                   <li><strong>{apartment.price} $</strong></li>
                  
                   <Link to={`/realestate/${apartment.id}`}><span className='seeMoreButton'>SEE MORE</span></Link>
                   </div>
                   
      
              </ul>
              </div>
            </>
        )
    })

    return(
        <>
        <Header/>
       
        <div className="wrapper">
        <h1>Apartments View</h1>
           

            {apartments}
            </div>
        </>
    )
}