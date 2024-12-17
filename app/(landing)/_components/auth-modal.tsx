import React from 'react'
import LoginBtn from './login-btn';
import { signIn } from '@/auth';

interface AuthProps {
    title: string;
    style?: string;
}

const AuthModal:  React.FC<AuthProps>= ({title, style}) => {
  return (
    <>
        {/* The button to open modal */}
<label htmlFor="my_modal_6" className={`btn btn-${style} btn-sm`}>{title}</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">
        Writing<span className='text-neutral-600'>Hub</span>
    </h3>
    <p className="py-4">Your clicks away, login with your google account!</p>
    <div className='flex flex-col w-full items-center justify-center space-y-6'>
        <form
        action={async () => {
            'use server'
            await signIn('google')
        }}
        className='w-full'
        >
            <div className="modal-action">
            <LoginBtn />

            </div>
        </form>
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn btn-error text-white">X</label>
    </div>
  </div>
</div>
    </>
  )
}

export default AuthModal