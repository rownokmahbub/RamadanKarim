import { useTheme } from 'next-themes'
import {IoColorWandOutline,IoColorWand } from 'react-icons/io'
const ThemeBlind = () => {
   
    const {systemTheme, theme, setTheme } = useTheme()
  
 const renderThemeChanger = ()=>{
  const currentTheme = theme === 'system' ? systemTheme : theme
  if(currentTheme==='dark'){
    return(
      <IoColorWandOutline className='w-6' role='button' onclick={()=> setTheme('light')}/>
    )
  }
  else{
     return(
      <IoColorWand className='w-6' role='button' onclick={()=> setTheme('dark')}/>
    )
  }
 
 }
  return (
   <div className='flex justify-center items-center'>
    {renderThemeChanger()}
   </div>
  )
}

export default ThemeBlind