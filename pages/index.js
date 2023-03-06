import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero_01 from '@/components/Hero_01'
import { Nav } from '@/components/Nav'
import Calender from '@/components/Calender'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Nav/>
   <Hero_01/>
   <Calender/>
   
    </>
  )
}
