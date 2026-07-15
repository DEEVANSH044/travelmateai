

function Nav(){
    return(
        <nav class="flex items-center justify-between px-8 py-4 bg-white shadow-mid">
            <h1 class="text-2xl font-bold text-sky-600">
                TravelMate AI
             </h1>
        <ul class="flex gap-8 text-grey-700 font-medium">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Explore</li>
            <li className="cursor-pointer hover:text-blue-600">Planner</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
        </ul>

        <button className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">login</button>
        </nav>
    )
}
export default Nav