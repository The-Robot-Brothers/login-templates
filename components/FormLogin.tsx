'use client'
import { RiLockLine, RiUser3Line } from 'react-icons/ri'

export function FormLogin () {

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log('submit: ', event.currentTarget.password.value)
}

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6 text-gray-600'>
        
        {/* //Input */}
        <div className="flex">
            <div className='flex items-center border-b-2 border-gray-300'>
                <div className="flex self-center">
                    <RiUser3Line className='fill-gray-500'/>                    
                </div>
            </div>
            <input 
            type='email' 
            name='email' 
            id='email' 
            className="
                w-full h-12 px-1 outline-none border-b-2 text-sm border-gray-300 bg-transparent
                placeholder:text-sm
            " 
            placeholder='Email'
            />
        </div>

        <div className='flex '>
            <div className='flex items-center border-b-2 border-gray-300'>
                <div className="flex self-center">
                    <RiLockLine className='fill-gray-500'/>                    
                </div>
            </div>
            <input 
                type="password" 
                name='password' 
                id='password' 
                className="
                    w-full h-12 px-1 outline-none border-b-2 text-sm border-gray-300 bg-transparent
                    placeholder:text-sm
                "
                placeholder='Password'
            />
        </div>
      </div>

      <button
        type='submit'
        className='
            bg-background rounded-3xl w-full h-12 text-white font-bold transition text-sm
            focus:outline-none focus:brightness-110
            hover:brightness-110
        '
        >
            LOGIN
        </button>
    </form>
  )
}
