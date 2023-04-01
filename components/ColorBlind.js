import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {RiEyeCloseFill } from 'react-icons/ri'
import {BsFillEyeFill } from 'react-icons/bs'

const ColorBlind = () => {

    const [mounted, setMounted] = useState (false)
   
    const {systemTheme, theme, setTheme } = useTheme()
  
 const renderThemeChanger = ()=>{
  const currentTheme = theme === 'system' ? systemTheme : theme
  if(currentTheme==='dark'){
    return(
        <div className=' gap-2 flex items-center px-4 shadow-lg shadow-primary/30 dark:shadow-primary-50/30 py-2 bg-primary cursor-pointer dark:bg-primary-50 text-white capitalize  rounded-full ' onClick={()=> setTheme('light')}>
        <p className='text-base font-medium'  >Color Blind On</p>
        <BsFillEyeFill className='w-5 h-6 cursor-pointer'/>  
    </div>
       
    )
  }
  else{
     return(
        <div className='gap-2 flex items-center px-4 shadow-lg shadow-primary/30 dark:shadow-primary-50/30 py-2 bg-primary cursor-pointer dark:bg-primary-50 text-white capitalize  rounded-full'onClick={()=> setTheme('dark')}>
        <p className='text-base font-medium'  >Color Blind Off</p>
        <RiEyeCloseFill className='w-7 h-6 cursor-pointer'  /> 
    </div>
       
    )
  }
 
 }
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className='transition-all duration-500 '>
       
       {renderThemeChanger()}
   </div>
  )
}

export default ColorBlind