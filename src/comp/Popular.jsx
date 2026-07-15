import Card from "./Card"

function Popular(){
    return(
        <section className="py-16">
            <h2 className="text-4x1 font-bold text-center">
                Popular Destination
            </h2>
        <div className="flex justify-center gap-8 mt-10">
            <Card />
            <Card />
            <Card />
        </div>
        </section>
    )
}

export default Popular