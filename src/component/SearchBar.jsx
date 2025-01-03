import React from 'react'

const SearchBar = ({search, handleChange}) => {
   

  return (
    <div className=' md:w-3/6 mx-auto'>
        <input type="text" onChange={handleChange} value={search}  className='border-2 w-full mt-4 mx-auto min-h-8 px-6 py-3 rounded-full'/>
    </div>
  )
}

export default SearchBar