import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-mid">
            <h1 className="text-2xl font-bold text-sky-600">
                TravelMate AI
             </h1>
        <ul className="flex gap-8 text-gray-700 font-medium">
            <Link to="/" className="cursor-pointer hover:text-blue-600">Home</Link>
            <Link to="/destinations" className="hover:text-blue-600">Explore</Link>
            <Link to="/planner" className="hover:text-blue-600">Planner</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
        </ul>

        <button className="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700">login</button>
        </nav>
    )
}
export default Nav