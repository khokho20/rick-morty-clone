import {useState, useEffect} from "react"




function App() {
  const [data, setData] = useState(null);
  let api = `https://rickandmortyapi.com/api/character`

  useEffect(()=>{
     (async function () {
      let data = await fetch(api)
      .then((res) => res.json())
      .catch((err)=> console.log(err));

      setData(data);
      console.log(data.results)
    })();
  },[api])

  return (
    <>
    <nav>
      <h2 className="">Rick & Morty <span className="text-blue-500">Wiki</span></h2>
    </nav>
    <main>

    </main>
    </>
  )
}

export default App


