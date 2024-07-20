import { useParams } from "react-router-dom"

export default function RealEstateItem() {

    const {realestateid} = useParams();
console.log(realestateid)

    return(
        <>
        <h1>Hi</h1>
        </>
    )
}