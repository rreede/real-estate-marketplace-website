import { useParams } from "react-router-dom"
import { data } from "./RealEstateArray";
import Header from "./Header";

export default function RealEstateItem() {

    const {realestateid} = useParams();

    
    return(
        <>
         <Header/>
         <div className="wrapper individual-wrapper">
         <img className="individual-view-image" src={`../${data[realestateid].image}`}></img>
         <div key={data[realestateid].id} className="real-estate-item-individual">
        <h1>{data[realestateid].title}</h1>
        <p>{data[realestateid].description}</p>
        <p>{data[realestateid].location}</p>
        <p>3 Rooms</p>
        <p>{data[realestateid].size} m²</p>
        <p><strong>{data[realestateid].price}$</strong></p>
        <button>Add To Wishlist</button>
        <button>Contact</button>
                  
          

        </div>

        
        </div>

        </>
        )
    
}