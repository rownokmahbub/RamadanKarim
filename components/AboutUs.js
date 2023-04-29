import React from 'react'

const AboutUs = () => {
  return (
    <div className=" mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-10">
      <div className="container gap-5 xl:justify-between px-2 md:px-20 py-16 rounded-3xl items-center flex flex-col xl:flex-row">
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col gap-10  items-center md:items-start">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold  text-center md:text-start">Make <span className="text-primary dark:text-primary-50">People</span>  <br /> Happy With Fod</p>
          <p className="text-base md:text-lg  text-center md:text-start">Welcome to our Ramadan website, where we strive to make a difference in <br /> the lives of those in need during the holy month of Ramadan. We are a <br /> non-profit organization that is dedicated to providing support and <br /> assistance to underprivileged individuals and families in our local communities.</p>
        
      
        </div>
      </div>
      <img className="max-w-2xl w-full h-full rounded-2xl dark:hue-rotate-180" src="./assets/g6.jpg" alt="https://www.freepik.com/author/stories" />
      </div>
     
     <p className='text-center font-semibold text-2xl md:text-4xl'>We proud to be help people</p>
     <p className='container mx-auto max-w-6xl mt-6'>
     Our organization was founded with the goal of helping those who are most in need during Ramadan, a time when the act of giving and helping others is especially important. We believe that every individual deserves access to nutritious food, education, and healthcare, regardless of their background or religious affiliation.
<br />
<br />
One of our primary initiatives is providing sehri and iftar meals to those who are unable to afford them. With the help of our volunteers and generous donors, we are able to distribute thousands of meals to those in need each year.
<br />
<br />
In addition to providing meals, we also work to support other Ramadan-related initiatives such as distributing zakat to the poor, sponsoring the education of underprivileged children, and providing healthcare services.
<br />
<br />
We believe in transparency and accountability, and we strive to keep our donors and supporters informed about how their contributions are being used to support our initiatives. We also welcome volunteers who are interested in helping us make a difference in the lives of those in need.
<br />
<br />
Thank you for visiting our website and for your interest in our organization. Together, we can make a positive impact on the lives of those in need during Ramadan and beyond.
     </p>

    </div>
  )
}

export default AboutUs