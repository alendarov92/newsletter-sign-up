import React from 'react'
import icon from './assets/images/icon-success.svg'

const Success = ({user, setSuccess}) => {
  return (
    <div className='bg-g w-full h-screen flex items-center justify-center'>
      <div className='bg-white pt-32 px-4 flex flex-col justify-between h-screen md:p-10 md:h-auto md:w-[450px] md:rounded-3xl'>
        <div>
        <img src={icon} alt="" />

        <h1 className='text-5xl py-8 font-bold text-slate-800'>Thanks for subscribing!</h1>
        <p className=''>A confirmation email has been sent to <strong>{user}</strong>.
          Please open it and click the button inside to confirm your subscription.</p>
        </div>

        <button onClick={() => setSuccess(false)} className='w-full p-4 bg-btn mt-5 mb-5 rounded-md hover:shadow-2xl hover:shadow-slate-500
             hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-400 text-white'>Dismiss message</button>
      </div>
    </div>
  )
}

export default Success