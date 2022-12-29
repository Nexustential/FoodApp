import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/* Card 1 */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-2'>Sun's Out, BOGO's Out</p>
					<p className='px-2'>Through 4/18</p>
					<button className='border-white bg-white/30 text-white mx-2 absolute bottom-4 hover:bg-white/60 hover:text-black'>Order Now</button>
				</div>
				<img 
				className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				src="https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=400"
				alt="/"
				/>
			</div>
			{/* Card 2 */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-2'>New Restaurants</p>
					<p className='px-2'>Added Daily</p>
					<button className='border-white bg-white/30 text-white mx-2 absolute bottom-4 hover:bg-white/60 hover:text-black'>Order Now</button>
				</div>
				<img 
				className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1600"
				alt="/"
				/>
			</div>
			{/* Card 3 */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-2'>Deal Of The Day</p>
					<p className='px-2'>New Deal Every 24H</p>
					<button className='border-white bg-white/30 text-white mx-2 absolute bottom-4 hover:bg-white/60 hover:text-black'>Order Now</button>
				</div>
				<img 
				className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
				src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=400"
				alt="/"
				/>
			</div>
    </div>
  )
}

export default HeadlineCards;