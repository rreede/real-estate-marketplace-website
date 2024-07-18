export default function RealEstateList() {

const apartments = [
    {
      id:0,
      title:'1 room apartment in Vilnius',
      price: 50000,
      
    },
]

    return(
        <>
        <p>{apartments[0].title}</p>
        <p>Apartment 2</p>
        </>
    )
}