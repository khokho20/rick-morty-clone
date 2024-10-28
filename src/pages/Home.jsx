import {useState, useEffect} from "react"
import Card from "../component/Card";
import Navbar from "../layouts/Navbar";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const api = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    (async function () {
      let response = await fetch(api)
        .then((res) => res.json())
        .catch((err) => console.log(err));
      const { results, info } = response;
      setData(results);
      setInfo(info);
    })();
  }, [api]);
  console.log(info, data)

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (info?.next) {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (info?.prev) {
      setPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Calculate visible page numbers around the current page
  const totalPages = info.pages || 1;
  const pageRange = 2; 
  const startPage = Math.max(1, page - pageRange);
  const endPage = Math.min(totalPages, page + pageRange); 
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <main className="mt-10 font-mono">
      {data.length > 0 ? (
        <>
        <div className="w-5/6 mx-auto grid grid-cols-12 gap-5">
          <div className="bg-red-300 h-64 col-span-3">

          </div>
          <div className="col-span-9">
            <div className="flex flex-wrap gap-5 ">
            {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              name={item.name}
              status={item.status}
              location={item.location.name}
            />
          ))}
            </div>
            <div className="flex justify-center  items-center mt-10 space-x-2">
              <button
            onClick={handlePrev}
            disabled={!info.prev}
            className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Previous
              </button>
              {visiblePages.map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-3 py-2 rounded ${num === page ? "bg-blue-700 text-white" : "bg-gray-200 text-blue-700"}`}
          >
            {num}
          </button>
              ))}
              <button
            onClick={handleNext}
            disabled={!info.next}
            className="px-3 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
          Next
              </button>
            </div>
          </div>
        </div>
        </>
      ): (
        <div>
            <p>No data found:)</p>
        </div>
      )}
      
    </main>
  );
}


export default Home;