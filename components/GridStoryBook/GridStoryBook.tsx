import React from 'react'
import tw, { TwStyle } from "twin.macro"

type sizes = 'sm' | 'md' | 'lg' | 'xl'

export interface GridStoryBookProps{
    children:React.ReactNode,
    screen?: sizes
}

const screenVarients: Record<sizes, TwStyle> = {
    sm:tw`grid-cols-2 max-w-[640px]`,
    md:tw`grid-cols-3 w-[768px]`,
    lg:tw`grid-cols-4 w-[1024px]`,
    xl:tw`grid-cols-5 w-[1440px]`
}


function GridStoryBook({children, screen='lg'}:GridStoryBookProps) {
  return (
    <div css={[tw`grid gap-8 m-auto bg-gray-200 p-8`,screenVarients[screen]]}>
        {children}
    </div>
  )
}

export default GridStoryBook