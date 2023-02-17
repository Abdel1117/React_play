import React from 'react'

export default function Products() {
  return (
    <div className='p-1 md:p-2 lg:p-3 xl:p-4 border shadow-md max-w-[350px] flex flex-col justify-center items-center' >
        <h4>Produits</h4>
        <div>
            <img src="https://via.placeholder.com/250" alt="" />
        </div>
        <div className='p-4'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus repellat nam modi facere.</p>
        </div>
    </div>
  )
}
