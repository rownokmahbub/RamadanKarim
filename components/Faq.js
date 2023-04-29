import { Disclosure } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'

export default function Faq() {
  return (
    <div className="">
      <div className="container mx-auto w-full  rounded-3xl bg-white p-2 py-10">
        <p className='text-center text-2xl md:text-4xl font-semibold mb-7'>Frequently asked Questions</p>
        <Disclosure >
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-sm md:text-lg'>How can I contribute to providing sehri and iftar meals for those in need during Ramadan?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg text-gray-700 transition duration-500">
              You can make a donation to our organization, which works to provide sehri and iftar meals for poor and underprivileged individuals during Ramadan. Your donation can help ensure that everyone has access to nutritious food during this holy month.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure  as='div' className='mt-5'>
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-sm md:text-lg'>What does your organization do with the donations it receives?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg text-gray-700 transition duration-500">
              Our organization uses donations to provide sehri and iftar meals to those in need, as well as to support other Ramadan-related initiatives such as distributing zakat to the poor, sponsoring the education of underprivileged children, and providing healthcare services.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure  as='div' className='mt-5'>
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-sm md:text-lg'>How do I know that my donation will be used for its intended purpose?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg text-gray-700 transition duration-500">
              Our organization is committed to transparency and accountability, and we provide regular updates on how donations are being used to support Ramadan-related initiatives. You can also contact us directly if you have any questions or concerns about how your donation will be used.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure  as='div' className='mt-5'>
          {({ open }) => (
            <div className='rounded-lg border border-primary dark:border-primary-50 overflow-hidden shadow-lg shadow-primary/40 dark:shadow-primary-50/40'>
              <Disclosure.Button className="flex w-full justify-between bg-primary dark:bg-primary-50 text-white px-4 py-4 text-left text-sm font-medium   focus:outline-none  transition duration-500 ">
                <span className='text-sm md:text-lg'>Can I volunteer with your organization to help provide sehri and iftar meals?</span>
                <IoIosArrowDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:text-lg text-gray-700 transition duration-500">
              Yes, we welcome volunteers who are interested in helping us provide sehri and iftar meals to those in need during Ramadan. You can get in touch with us to learn more about volunteer opportunities and how you can get involved.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
