import React, { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
  //console.log(data)
	const [foods, setFoods] = useState(data);

	//Filter Type Function
	const filterType = (category) => {
		setFoods(
			data.filter((type) => {
				return type.category === category;
			})
		)
	} 

	//Filter Price Function
	const filterPrice = (price) => {
		setFoods(
			data.filter((type) => {
				return type.price === price;
			})
		)
	}

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
		<h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
		{/* Filter Row */}
		<div className='flex flex-col lg:flex-row justify-between'>

			{/* Filter Type Buttons*/}
			<div>
				<p className='font-bold'>Filter Type</p>
				<div className='flex flex-wrap'>
					<button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
					<button onClick={()=> filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
					<button onClick={()=> filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
					<button onClick={()=> filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
					<button onClick={()=> filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
				</div>
			</div>

			{/* Filter Price */}
			<div>
				<p className='font-bold'>Filter Price</p>
				<div className='flex max-w-[390px] w-full'>
					<button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
					<button onClick={()=> filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
					<button onClick={()=> filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
					<button onClick={()=> filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
					<button onClick={()=> filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
				</div>
			</div>
		</div>

		{/* Grid */}
		<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
			{foods.map((type, index)=>(
				<div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
					<img
						className='w-full h-[200px] object-cover rounded-t-lg' 
						src={type.image} 
						alt={type.name} 
					/>
					<div className='flex justify-between px-2 py-4'>
						<p className='font-bold'>{type.name}</p>
						<p><span className='bg-orange-500 text-white p-1 rounded-full'>{type.price}</span></p>
					</div>
				</div>
			))}
		</div>
    </div>
  )
}

export default Food;