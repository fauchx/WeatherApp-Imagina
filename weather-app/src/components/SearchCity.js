export default function SearchCity({ citySearch, setSearch, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cityToSearch = citySearch.trim() === "" ? "Cali" : citySearch.trim();
    onSubmit(cityToSearch); 
  };

  return (
    <div className="flex flex-row p-4 m-4 aling-center justify-center text-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-row gap-x-3 w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            value={citySearch}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Write a city name"
            className="w-full rounded-3xl p-3 border-none bg-neutral-800 text-white"
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fffcfc" fill="none">
    <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
          </button>
        </div>
      </form>
    </div>
  );
}
