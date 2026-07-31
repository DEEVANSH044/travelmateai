import Places from "../data/Places"
import Card from "../comp/Card"

function Destination(){
    return(
        <div className="p-10">
            <h1 className="text-4xl font-bold text-center">
                Explore Destinations
            </h1>
            <div className="flex gap-8 flex-wrap justigy-center">
                {Places.map((Places,index)=>(
                    <Card
                    key={index}
                    name={Places.name}
                    state={Places.state}
                    img={Places.img}
                    />
                ))}
            </div>
        </div>
    )
}
export default Destination