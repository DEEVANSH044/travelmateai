import { Link } from "react-router-dom";


function Card(props) {
  return (
    <div className="w-72 p-4 rounded-xl shadow-lg">
        <img src={props.img} alt={props.name} className="rounded-lg"/>
          <h2 className="text-2xl font-bold mt-3">{props.name}</h2>
          <p className="text-gray-600 mt-2">{props.state}</p>
          <Link to={`/destination/${props.name.toLowerCase()}`}className="inline-block mt-4 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700">Explore</Link>
    </div>
  )
}

export default Card