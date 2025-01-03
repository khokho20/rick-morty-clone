import React from 'react'


const Navbar = () => {
  return (
    <nav className='w-full flex justify-between py-4 px-24 bg-slate-50 shadow-sm shadow-slate-300'>
      <h2 className=" text-2xl font-semibold">Rick & Morty <span className="text-blue-500">Wiki</span></h2>
      <ul className='flex gap-6 text-lg font-medium'>
        <li>Characters</li>
        <li>Espisode</li>
        <li>Location</li>
      </ul>
    </nav>
  )
}

export default Navbar