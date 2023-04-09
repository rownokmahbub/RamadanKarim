import React from 'react'
import { Form,Formik,Field } from 'formik'
import * as Yup from 'yup'
const SignIn = () => {
 
  const validationSchema =Yup.object().shape({
    fname:Yup.string().required('Email required !'),
    lname:Yup.string().max(25).min(3, 'Give At Least 6 Character').required(' too long!'),
    pass:Yup.string().max(20).min(6)
  })
  return (
    <div className='container mx-auto md:h-screen flex flex-col xl:flex-row justify-between items-center w-full'>
       
 <Formik
       initialValues={{
         fname: '',
         lname: '',
         pass: '',
       }}
       validationSchema={validationSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form className='flex flex-col gap-6 px-4 py-4 border border-gray-300 rounded-2xl shadow-2xl shadow-blue-50'>
            <p className='text-center font-semibold text-2xl mb-4'>Sign in to your Account</p>
           <Field name="fname" type='email' className='px-2 py-3 bg-white border w-[500px] border-gray-300 rounded-lg focus:outline-none' placeholder='Rownok'/>
           {errors.fname && touched.fname ? (
             <div className='text-red-500 dark:text-primary-50 text-sm'>{errors.fname}</div>
           ) : null}
         
           <Field name="pass" type="password" className='px-2 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none' placeholder='Rownok '/>
           {errors.pass && touched.pass ? <div  className='text-red-500 dark:text-primary-50 text-sm'>{errors.pass}</div> : null}
           <button  className='btn btn-primary dark:bg-primary-50' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     <img className='max-w-xl dark:hue-rotate-180' src="/assets/login.png" alt="login page" />
    </div>
  )
}

export default SignIn