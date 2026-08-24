function Search() {
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search destination..."
        className="w-96 p-3 bg-[#0F0F0F] border border-[#262626] rounded-xl text-xs sm:text-sm text-white placeholder-[#6B7280] outline-none focus:border-sky-500 transition-colors"
      />
      <button className="ml-3 px-5 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default Search;