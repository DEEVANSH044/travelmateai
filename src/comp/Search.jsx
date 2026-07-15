

function Search(){
    return(
        <div className="flex justify-center mt-8">
            <input type="text" placeholder="Search destination......" className="w-96 p-3 border rounded-lg outline-none"/>
            <button className="ml-3 px-5 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700">Search</button>
        </div>
    )
}

export default Search