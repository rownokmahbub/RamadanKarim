import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {RiEyeCloseFill } from 'react-icons/ri'
import {BsFillEyeFill } from 'react-icons/bs'
import Image from 'next/image'
const ColorBlind = () => {
    const [mounted, setMounted] = useState (false)
   
    const {systemTheme, theme, setTheme } = useTheme()
  
 const renderThemeChanger = ()=>{
  const currentTheme = theme === 'system' ? systemTheme : theme
  if(currentTheme==='dark'){
    return(
        <div className=' gap-2 btn btn-sm capitalize btn-primary rounded-full ' onClick={()=> setTheme('light')}>
        <p className='text-base font-medium'  >Color Blind On</p>
        <BsFillEyeFill className='w-5 h-6 cursor-pointer'/>  
    </div>
       
    )
  }
  else{
     return(
        <div className='flex justify-center gap-2 btn btn-sm capitalize btn-primary rounded-full items-center'onClick={()=> setTheme('dark')}>
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
    <div className='transition-all duration-300 '>
       
       {renderThemeChanger()}
   </div>
  )
}

export default ColorBlind