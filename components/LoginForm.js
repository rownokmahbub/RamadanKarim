import React from 'react'
import { Form,Formik,Field } from 'formik'
import * as Yup from 'yup'
const LoginForm = () => {
 
  const validationSchema =Yup.object().shape({
    fname:Yup.string().max(25).min(3, 'too short').required('first  name required !'),
    lname:Yup.string().max(25).min(3, 'too short').required('last name required !'),
    pass:Yup.string().max(20).min(6)
  })
  return (
    <div>
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
         <Form className='flex flex-col gap-2'>
           <Field name="fname" className='px-2 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none' placeholder='Rownok'/>
           {errors.fname && touched.fname ? (
             <div className='text-red-500 dark:text-primary-50 text-sm'>{errors.fname}</div>
           ) : null}
           <Field name="lname" className='px-2 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none' placeholder='Mahbub'/>
           {errors.lname && touched.lname ? (
             <div className='text-red-500 dark:text-primary-50 text-sm'>{errors.lname}</div>
           ) : null}
           <Field name="pass" type="password" className='px-2 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none' placeholder='Rownok '/>
           {errors.pass && touched.pass ? <div  className='text-red-500 dark:text-primary-50 text-sm'>{errors.pass}</div> : null}
           <button  className='btn btn-primary dark:bg-primary-50' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     
    </div>
  )
}

export default LoginForm