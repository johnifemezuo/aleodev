import { ArrowRight } from '@/Components/Icons/ArrowRight'
import React from 'react'

export const Button = ({children, className}:{children: React.ReactNode; className?: string}) => {
  return (
    <button className={`${className} space-x-4 py-2 px-3 flex justify-items-center items-center rounded-full justify-center bg-primary hover:bg-primary/40 text-white`}>
    <span className='pl-2 text-lg'>{children}</span>{" "}
    <span className="rounded-full w-9 h-9 place-content-center grid bg-white ">
      <ArrowRight className='text-primary' />
    </span>
  </button>
  )
}
