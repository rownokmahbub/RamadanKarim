import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {BiDonateHeart} from 'react-icons/bi' 
import  LoginForm  from "./LoginForm";

const Hero_01 = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className=" bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-10">
      <div className="container mx-auto gap-5 xl:justify-between px-2 md:px-20 py-16 rounded-3xl items-center flex flex-col xl:flex-row  ">
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col gap-10  items-center md:items-start">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold  text-center md:text-start">Celebrate <span className="text-primary dark:text-primary-50">Ramadan</span>  <br /> With Everyone</p>
          <p className="text-base md:text-lg  text-center md:text-start">Ramadan is a holy month for Muslims. It is when they fast, pray, <br /> reflect and do good deeds1. Ramadan follows the lunar calendar, <br /> so it changes every year2. In 2023, it will start on March 23.</p>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <button onClick={openModal}  className="bg-primary dark:bg-primary-50 flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 font-medium hover:scale-95 duration-300 transition shadow-xl shadow-primary/30 hover:shadow-[#ecedc7] dark:shadow-primary-50/20 text-white hover:bg-[#ecc79e] rounded-full hover:text-black capitalize text-lg">Donate People
            <BiDonateHeart/>
            </button>



            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-50 p-6 text-left align-middle shadow-xl transition-all">
              <LoginForm/>
            
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
          </div>
      
        </div>
      </div>
      <img className="max-w-lg w-full rounded-2xl dark:hue-rotate-180" src="./assets/hero.svg" alt="https://www.freepik.com/author/stories" />
      </div>
     
    </div>
  );
};

export default Hero_01;
