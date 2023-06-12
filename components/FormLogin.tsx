'use client'
import { RiLockLine, RiUser3Line } from 'react-icons/ri'

export function FormLogin () {

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log('submit: ', event.currentTarget.password.value)
}

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email' className='font-medium'>Email</label>
        <div className="flex">
            <div className='flex items-center border-b-2 fill-gray-200'>
                <div className="flex self-center fill-icon">
                    <RiUser3Line />                    
                </div>
            </div>
            <input 
            type='email' 
            name='email' 
            id='email' 
            className="
                w-full h-12 px-1 outline-none border-b-2 text-sm border-gray-200
                placeholder:text-sm
            " 
            placeholder='Email'
            />
        </div>
        <label htmlFor="password" className='font-medium' >Password</label>
        <div className='flex'>
            <div className='flex items-center border-b-2 fill-gray-200'>
                <div className="flex self-center fill-icon">
                    <RiLockLine />                    
                </div>
            </div>
            <input 
                type="password" 
                name='password' 
                id='password' 
                className="
                    w-full h-12 px-1 outline-none border-b-2 text-sm border-gray-200
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
