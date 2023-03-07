import { Disclosure } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Faq() {
  return (
    <div className="container">
      <div className="mx-auto w-full  rounded-3xl bg-white p-2">
        <p className='text-center text-4xl font-semibold mb-5'>Frequently asked Questions</p>
        <Disclosure >
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-lg'>What is your refund policy?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-700 transition duration-500">
                If you are unhappy with your purchase for any reason, email us
                within 90 days and we will refund you in full, no questions asked.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente in sint perferendis, est autem facilis aut odio modi dignissimos. Ratione enim, magnam facere esse dolores officia. Inventore non nesciunt perspiciatis dolorem ipsa cum unde magnam a fuga ab minima, blanditiis eius earum vel ad quasi temporibus facere quis minus suscipit.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure  as='div' className='mt-5'>
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-lg'>What is your refund policy?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-700 transition duration-500">
              If you are unhappy with your purchase for any reason, email us
                within 90 days and we will refund you in full, no questions asked.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente in sint perferendis, est autem facilis aut odio modi dignissimos. Ratione enim, magnam facere esse dolores officia. Inventore non nesciunt perspiciatis dolorem ipsa cum unde magnam a fuga ab minima, blanditiis eius earum vel ad quasi temporibus facere quis minus suscipit.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure  as='div' className='mt-5'>
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-lg'>What is your refund policy?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-700 transition duration-500">
              If you are unhappy with your purchase for any reason, email us
                within 90 days and we will refund you in full, no questions asked.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente in sint perferendis, est autem facilis aut odio modi dignissimos. Ratione enim, magnam facere esse dolores officia. Inventore non nesciunt perspiciatis dolorem ipsa cum unde magnam a fuga ab minima, blanditiis eius earum vel ad quasi temporibus facere quis minus suscipit.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
