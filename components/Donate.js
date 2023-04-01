import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Donate = () => {
    const notify = () =>toast.success('Successfully created!');;
  return (
    <div>
    <button onClick={notify}>Make me a toast here</button>
    <Toaster />
  </div>
  )
}

export default Donate