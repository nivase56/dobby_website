import Image from 'next/image';
import React from 'react';

interface CarouselItemProps {
  image: any;
  name: string;
  location: string;
  stars: number;
  review: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image, name, location, stars, review }) => {
  return (
    <div className="carousel-item flex shadow-xl mx-5 mb-20 rounded-xl bg-white">
        <div className='w-1/2 p-5'>
      <Image src={image} alt={name} className="carousel-item-image h-full object-cover rounded"/>
      </div>
      <div className='w-1/2 p-5'>
      <h3 className='text-5xl'>{stars}.0<span className='text-2xl'> stars</span></h3>
      <p className='py-1'>{"⭐".repeat(stars)}</p>
      <p className='h-44 my-6'>{review}</p>
      <p className='text-xl font-semibold' >{name}</p>
      <p className='text-xs text-gray-500'>{location}</p>
      
      
      </div>
    </div>
  );
};

export default CarouselItem;
