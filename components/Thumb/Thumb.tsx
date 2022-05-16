import React from 'react'
import Image from 'next/image';
import "twin.macro";

export type ThumbProps = {
  image:string;
  name:string
}

function Thumb({image, name}:ThumbProps) {
  return (
    <div tw="bg-white rounded-lg p-4 text-center shadow-lg">
        <Image tw="rounded-lg" src={image} alt={name} width={200} height={200} unoptimized/>
        <h2 tw="font-bold text-[1.1rem] uppercase my-4">{name}</h2>
    </div>
  )
}

export default Thumb