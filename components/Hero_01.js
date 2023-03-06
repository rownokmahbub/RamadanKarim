import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {TbBrandAirbnb} from 'react-icons/tb'
import {TfiLinkedin} from 'react-icons/tfi'
import {BiDonateHeart} from 'react-icons/bi' 
import ColorBlind from "./ColorBlind";
const Hero_01 = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className=" mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 ">
      <div className="container gap-5 xl:justify-between px-20 py-16 rounded-3xl items-center flex flex-col xl:flex-row  ">
      <div className="flex flex-col gap-10 md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col gap-10  items-center md:items-start">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold  text-center md:text-start">Celebrate <span className="text-primary dark:text-primary-50">Ramadan</span>  <br /> With Everyone</p>
          <p className="text-base md:text-lg  text-center md:text-start">Ramadan is a holy month for Muslims. It is when they fast, pray, <br /> reflect and do good deeds1. Ramadan follows the lunar calendar, <br /> so it changes every year2. In 2023, it will start on March 23.</p>
          <div className="flex flex-col md:flex-row gap-5 items-center">
            <button onClick={openModal}  className="bg-primary dark:bg-primary-50 flex items-center gap-2 px-4 py-3 font-medium hover:scale-95 duration-300 transition shadow-xl shadow-primary/30 hover:shadow-[#ecedc7] dark:shadow-primary-50/20 text-white hover:bg-[#ecc79e] rounded-full hover:text-black capitalize text-lg">Donate People
            <BiDonateHeart/>
            </button>
            <button className="text-xl capitalize font-semibold">How It Works</button>
      
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
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
