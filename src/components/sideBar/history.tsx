import React from 'react'



export const mockData = [
    {
        id: "1",
        title: "I worked out today...",
        note: "some mock notes here, i did this today, how today went, blabla",
        date: "September 8, 2018",
        time: "9:49 PM",
        category: "School" 
    },
    {
        id: "2",
        title: "I did nothing today...",
        note: "some mock notes here, i did this today, how today went, blabla",
        date: "September 10, 2028",
        time: "9:50 PM",
        category: "Reading" 
    },
    {
        id: "3",
        title: "I wrote some codes...",
        note: "some mock notes here, i did this today, how today went, blabla",
        date: "September 18, 2021",
        time: "9PM",
        category: "Development" 
    },
]



const History = () => {

    



  return (
    <div className='overflow-y-scroll'>
        {mockData.map((journal): React.ReactNode => {
               return (
                <button key={journal.id} className=" py-3 px-2 flex border-y-[1px] border-solid border-stone-500 border-opacity-10 w-full hover:opacity-75 hover:border-opacity-100 ">
                    <p className='text-sm'>{journal.title}</p>
                    {/* <p className='text-xs'>{journal.date}</p> */}
                </button>
               )     
        })}
    </div>
  )
}

export default History
