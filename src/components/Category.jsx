import React from 'react'
import { categories } from '../data/data';

const Category = () => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-6'>
			<h1 className='text-orange-600 font-bold text-4xl text-center'>Browse by Category</h1>
			{/* Categories */}
			<div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
				{categories.map((type, index) => (
					<div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300'>
							<h2 className='font-bold sm:text-xl'>{type.name}</h2>
							<img className='w-20' src={type.image} alt={type.name} />
					</div>
				))}
			</div>
    </div>
  )
}

export default Category;