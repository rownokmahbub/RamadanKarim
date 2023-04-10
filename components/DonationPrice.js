import React from 'react'
import {BsPatchCheck, BsFillPatchCheckFill} from "react-icons/bs";

const DonationPrice = () => {

  return (
      <div className='bg-[#f1f7fd] py-20'>
          <div className='container mx-auto  flex justify-center items-center flex-col'>
              <p className='text-3xl md:text-5xl font-bold text-center'>Our Donation Plan</p>
              <p className='text-sm md:text-base font-medium mt-2  flex justify-center text-center mb-10'>We believe that every donation can make a difference, no matter the size.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
                  <div className="px-10 py-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-[#eef4fa] hover:bg-primary
                  dark:hover:bg-primary-50 hover:text-white group">
                      <div className="flex justify-between items-center w-full mb-4">
                      <div>
                              <p className='font-semibold text-base md:text-2xl'>Silver </p>
                              <p className='text-sm md:text-base'> 4 Member</p>
                          </div>
                          <div className='bg-[#edf3fa] dark:group-hover:bg-[#b3a980] group-hover:bg-amber-800 px-2 py-2 rounded-xl items-center flex flex-col justify-center ml-14'>
                                <p className='text-xl font-bold '>10.00$</p>
                                <p className='text-xs  capitalize'>per month</p>
                          </div>
                      </div>
                        <hr className=' w-full  border border-gray-200'/>
                      <div className="flex items-center gap-2 w-full py-2">
                           <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p> Dates , Rice</p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lentils , Vegetables </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Spices , Cooking oil </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Chickpeas , Parched Rice </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsPatchCheck className='w-5 h-5 flex-shrink-0'/>
                          <p>Juice , Sugar</p>

                      </div>

                      <div className="flex items-center gap-2 w-full py-2">
                          <BsPatchCheck className='w-5 h-5 flex-shrink-0'/>
                          <p>Chicken , Fish </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsPatchCheck className='w-5 h-5 flex-shrink-0'/>
                          <p>Beef , Lamb</p>

                      </div>
                     
                      <button className='btn bg-black text-white rounded-2xl  group-hover:bg-white group-hover:text-black border-none shadow-md w-full mt-3 capitalize font-semibold text-lg'> Donate Now</button>
                  </div>
                  <div className="px-10 py-6 flex flex-col justify-center items-center bg-slate-900 text-white rounded-2xl shadow-xl shadow-[#eef4fa] hover:bg-primary
                  dark:hover:bg-primary-50 hover:text-white group">
                      <div className="flex justify-between items-center w-full mb-4">
                      <div>
                              <p className='font-semibold text-base md:text-2xl'>Gold </p>
                              <p className='text-sm md:text-base'>Most Donated</p>
                          </div>
                          <div className='bg-slate-600 dark:group-hover:bg-[#b3a980] group-hover:bg-amber-800 px-2 py-2 rounded-xl items-center flex flex-col justify-center ml-14'>
                              <p className='text-xl font-bold '>49.34$</p>
                              <p className='text-xs  capitalize'>per month</p>
                          </div>
                      </div>
                      <hr className=' w-full  border border-gray-100'/>
                      <div className="flex items-center gap-2 w-full py-2">
                           <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p> Dates , Rice</p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lentils , Vegetables </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Spices , Cooking oil </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Chickpeas , Parched Rice </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Juice , Sugar</p>

                      </div>

                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Chicken , Fish </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsPatchCheck className='w-5 h-5 flex-shrink-0'/>
                          <p>Beef , Lamb</p>

                      </div>
                            <button className='btn bg-white text-black rounded-2xl  group-hover:bg-white w-full mt-3 capitalize font-semibold text-lg'> Donate Now</button>
                  </div>
                  <div className="px-10 py-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-[#eef4fa] hover:bg-primary
                  dark:hover:bg-primary-50 hover:text-white group transition duration-300">
                      <div className="flex justify-between items-center w-full mb-4">
                          <div>
                              <p className='font-semibold text-base md:text-2xl'>Platinum </p>
                              <p className='text-sm md:text-base'>Most Donated</p>
                          </div>
                          <div className='bg-[#edf3fa] dark:group-hover:bg-[#b3a980] group-hover:bg-amber-800 px-2 py-2 rounded-xl items-center flex flex-col justify-center ml-14'>
                              <p className='text-xl font-bold '>49.34$</p>
                              <p className='text-xs  capitalize'>per month</p>
                          </div>
                      </div>
                      <hr className=' w-full  border border-gray-200'/>
                      <div className="flex items-center gap-2 w-full py-2">
                           <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p> Dates , Rice</p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Lentils , Vegetables </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                          <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Spices , Cooking oil </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Chickpeas , Parched Rice </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Juice , Sugar</p>

                      </div>

                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Chicken , Fish </p>

                      </div>
                      <div className="flex items-center gap-2 w-full py-2">
                      <BsFillPatchCheckFill className='w-5 h-5 flex-shrink-0'/>
                          <p>Beef , Lamb</p>

                      </div>
                      <button className='btn bg-black text-white rounded-2xl  group-hover:bg-white group-hover:text-black border-none shadow-md w-full mt-3 capitalize font-semibold text-lg'> Donate Now</button>
                  </div>
              </div>
          </div>

      </div>

  )
  }
  export default DonationPrice

