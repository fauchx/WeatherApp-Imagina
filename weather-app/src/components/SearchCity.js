export default function SearchCity({ citySearch, setSearch, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cityToSearch = citySearch.trim() === "" ? "Cali" : citySearch.trim();
    onSubmit(cityToSearch); 
  };

  return (
    <div className="flex flex-row p-4 m-4 text-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-row gap-x-3 w-1/2">
        <div className="relative w-full">
          <input
            type="text"
            value={citySearch}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Escribe el nombre de una ciudad"
            className="w-full rounded-3xl p-3 border-none bg-neutral-800 text-white"
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2">Buscar</button>
        </div>
      </form>
    </div>
  );
}
