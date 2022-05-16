import React from 'react'
import "twin.macro";

function Grid({children}:{children:React.ReactNode}) {
  return (
    <div tw='grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {children}
    </div>
  )
}

export default Grid