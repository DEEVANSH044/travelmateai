import Card from "./Card"

function Popular(){
    return(
        <section className="py-16">
            <h2 className="text-4x1 font-bold text-center">
                Popular Destination
            </h2>
        <div className="flex justify-center gap-8 mt-10">
            <Card 
            name="Manali"
            state="Himachal Pradesh"
            img="https://picsum.photos/300/200?1"
            />
            <Card 
            name="Goa"
            state="Goa"
            img="https://picsum.photos/300/200?2"
            />
            <Card 
            name="Jaipur"
            state="Rajasthan"
            img="https://picsum.photos/300/200?3"
            />
        </div>
        </section>
    )
}

export default Popular