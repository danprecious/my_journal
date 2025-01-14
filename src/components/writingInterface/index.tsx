import React from 'react'
import WritingForm from './writingForm'

const WritingInterface = () => {
  return (
    <section className='w-full h-full pt-md flex-col'>
    
      <div className='mb-5 text-[1.5rem]'>
      Start Writing...
    </div>
      <div className="">
            <WritingForm />

      </div>
      </section>
  )
}

export default WritingInterface