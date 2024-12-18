'use client'
import React from 'react'
import {useFormStatus} from "react-dom"

interface SubmitButtonProps {
    defaultText: string;
    pendingText: string;
}


const SubmitBtn: React.FC<SubmitButtonProps>= ({defaultText = 'Submit', pendingText = "Updating..."}) => {
    const {pending} = useFormStatus()
    return (
    <button
    type='submit'
    disabled={pending}
    className={`btn btn-sm  ${
        pending 
        ? 'bg-gray-300 text-neutral-800s cursor-not-allowed'
        : 'bg-neutral-600 text-white hover:bg-neutral-700'
    }      
        `}
    >
    {pending ? pendingText : defaultText}
    </button>
  )
}

export default SubmitBtn