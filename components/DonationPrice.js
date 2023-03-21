import React from 'react'
import {BsPatchCheck, BsFillPatchCheckFill} from "react-icons/bs";

const DonationPrice = () => {

  return (
      <div className='bg-[#f1f7fd]'>
          <div className='container mx-auto md:h-screen flex justify-center items-center flex-col'>
              <p className='text-5xl font-bold text-center'>Our Donation Plan</p>
              <p className='text-base font-bold text-center mb-10'>Our Donation Plan</p>
              <div className="grid grid-cols-3 gap-10 items-center">
                  <div className="px-6 py-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-[#eef4fa] hover:bg-primary
                  dark:hover:bg-primary-50 hover:text-white group">
                      <div className="flex justify-between items-center w-full mb-4">
                          <div>
                              <p className='font-semibold text-2xl'>Silver Pack</p>
                              <p className=' text-base'>Most Donated</p>
                          </div>
                          <div className='bg-[#edf3fa] group-hover:bg-amber-800 px-2 py-2 rounded-xl items-center flex flex-col justify-center'>
                                <p className='text-xl font-bold '>49.34$</p>
                                <p className='text-xs  capitalize'>per month</p>
                          </div>
                      </div>
                        <hr className=' border border-gray-600'/>
                      <div className="flex items-center gap-2 w-full py-2">
                           <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adip </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adip </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adip </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsPatchCheck className='w-5 h-5 flex-shrink-0'/>
                          <p>Lorem ipsum dolor sit amet, consectetur adip </p>

                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
  }
  export default DonationPrice

