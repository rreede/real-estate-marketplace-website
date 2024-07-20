import {Link} from 'react-router-dom'
import { data } from './RealEstateArray'


export default function RealEstateList() {
    
const list = data.map((apartment) => {

    return(
      <div key={apartment.id} className="real-estate-item">
                <Link to={`/realestate/${apartment.id}`}>TEST</Link>

        <ul >
            <div className="real-estate-image">
                {apartment.new && <span className='new-property'>New</span>} 
                <span className="realEstate-type">{apartment.type}</span> 
                <li><img src={apartment.image}></img></li>
            </div>
        <div className="real-estate-info">
             <li>{apartment.title}</li>
             <li>{apartment.description}</li>
             <li>Price {apartment.price} $</li>
             </div>
            

        </ul>
        </div>
        
       
    )
}
)


    return(
        <div  className="listItem">
        {list}
        </div>
    )
}