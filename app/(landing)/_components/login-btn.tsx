'use client'
import {useFormStatus} from "react-dom"
import {FcGoogle} from "react-icons/fc"
const LoginBtn = () => {
    const {pending} = useFormStatus()
    return (
      <>
          {pending ? (
              <button disabled className="flex items-center justify-center w-full space-x-1">
                  <span className="loading loading-dots loading-md"></span>
                  One Moment...
              </button>
          ) :
          (
              <button className="btn btn-ghost btn-outline w-full">
                <span>
                    <FcGoogle
                    className="h-6 w-6"
                    />
                </span>
                SignIn With Google</button>
          )
      
      }
      </>
    )
  }
export default LoginBtn