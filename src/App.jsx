import {useState, useEffect} from "react"
import Badge from "./component/Badge";




function App() {
  const [data, setData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character`

  useEffect(()=>{
     (async function () {
      let response = await fetch(api)
      .then((res) => res.json())
      .catch((err)=> console.log(err));
      const {info, results} = response;
      setData(results);
      console.log(results)
    })();
  },[api])



  return (
    <>
    <nav>
      <h2 className="bg-red-600">Rick & Morty <span className="text-blue-500">Wiki</span></h2>
    </nav>
    <main className="mt-10 font-mono">
       { data.length > 0 && 
      <div className=" w-4/5 mx-auto flex flex-wrap gap-5 ">
        {data.map((item, index)=>(
          <div key={index} className="w-64 relative min-h-[400px]  border-2 border-solid border-blue-600 rounded-xl overflow-hidden">
            <div className="h-3/5">
              <img src={item.image} alt="" />
            </div>
            <Badge status={item.status}/>
            <div className="p-2 h-2/5 flex flex-col gap-6">
            <p className="text-lg font-semibold pt-3">{item.name}</p>
            <div className="">
            <span className="text-xs">Last Location</span>
            <p className="text-base font-medium">{item.location.name}</p>
            </div>
            </div>
            <div className="absolute  top-3 right-2">
             
            </div>
          </div>
        ))}
      </div>
      }
    </main>
    </>
  )
}

export default App



