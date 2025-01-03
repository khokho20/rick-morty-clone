import { useState, useEffect } from "react";
import Card from "../component/Card";
import Filters from "../component/Filters";
import SearchBar from "../component/SearchBar";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch character data");

        const { results, info } = await response.json();
        setCharacters(results || []);
        setInfo(info || {});
      } catch (err) {
        console.error("Error fetching character data:", err);
        setError("Oops! Could not retrieve characters.");
        setCharacters([]);
        setInfo({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [apiUrl]);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const totalPages = info.pages || 1;
  const pageRange = 2;
  const visiblePages = Array.from(
    { length: Math.min(totalPages, page + pageRange) - Math.max(1, page - pageRange) + 1 },
    (_, i) => Math.max(1, page - pageRange) + i
  );

  return (
    <main className="mt-10 font-mono">
      <header className="pt-4 pb-12 text-center">
        <h1 className="text-3xl font-semibold">Characters</h1>
        <SearchBar search={searchQuery} handleChange={handleSearchChange} />
      </header>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : characters.length > 0 ? (
        <div className="w-[90%] mx-auto grid grid-cols-12 gap-5">
          <aside className="col-span-3">
            <Filters />
          </aside>
          <section className="col-span-9">
            <div className="flex flex-wrap gap-5">
              {characters.map(({ id, image, name, status, location }) => (
                <Card
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  status={status}
                  location={location.name}
                />
              ))}
            </div>

            <nav className="flex justify-center items-center mt-10 space-x-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={!info.prev}
                className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Previous
              </button>
              {visiblePages.map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num)}
                  className={`px-3 py-2 rounded ${
                    num === page ? "bg-blue-700 text-white" : "bg-gray-200 text-blue-700"
                  }`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={!info.next}
                className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
              >
                Next
              </button>
            </nav>
          </section>
        </div>
      ) : (
        <p className="text-center">No data found :)</p>
      )}
    </main>
  );
}

export default Home;
