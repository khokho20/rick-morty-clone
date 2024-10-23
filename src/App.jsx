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
      <h2 className="text-3xl text-red-700 p-2 text-bold">Rick & Morty <span className="text-blue-600 text-3xl">Wiki</span></h2>
     <p className="text-1xl text-black-500 p-3">Life isn't a bed of roses,neither is a land full of milk and homey are keeping us in that situation</p>
    </nav>
    <main>

    </main>
    </>
  )
}

export default App


