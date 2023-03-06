import React from 'react'
import {CgCalendarDates} from 'react-icons/cg'
const Calender = () => {
  return (
    <div className='container mx-auto md:h-screen py-4 flex flex-col gap-3'>
        <div className="flex justify-between items-center text-xl capitalize font-medium px-4 py-4 rounded-xl bg-primary text-white">
            <p>hijri shal</p>
            <p>23 Aug 2023</p>
            <p>Day</p>
            <p>Sehri Time</p>
            <p>Sehri Time</p>
            <p>Fajar Time</p>
        </div>
        <div className="flex justify-between items-center text-xl capitalize font-normal px-4 py-4 rounded-xl border border-gray-300 hover:bg-[#056691] hover:text-white shadow-lg shadow-[#056691]/20">
            <p>hijri shal</p>
            <p className='flex items-center gap-2'>
                <CgCalendarDates/>
                23 Aug 2023</p>
            <p>Day</p>
            <p>Sehri Time</p>
            <p>Sehri Time</p>
            <p>Fajar Time</p>
        </div>
    </div>
  )
}

export default Calender