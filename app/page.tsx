import { FormLogin } from '@/components/FormLogin'
import Image from 'next/image'
import { RiFacebookBoxLine, RiLinkedinBoxLine, RiTwitterLine, RiCopyrightLine} from 'react-icons/ri'

export default function Home() {
  return (
    <div className='
        flex justify-center items-center
        w-screen h-screen bg-background
      '
    >
      <div className='
        flex flex-col min-h-screen justify-between
        md:w-4/5 md:py-2
      '>
        <header className='
          font-bold text-4xl text-white h-44 items-end hidden 
          md:flex
        '>
            <h1>Title</h1>
        </header>
        
        <main className='flex items-center justify-center'>
          <div
            className='
              flex flex-col justify-center h-screen w-screen gap-8 p-4 bg-white
              md:w-96 md:h-1/2 md:p-8 md:rounded-lg md:shadow-lg
            '
          >
            <h1 className='font-black text-3xl text-gray-700 flex justify-center'>
              Login
            </h1>

            <FormLogin />

          </div>
        </main>
        
        <footer className='
          justify-between text-white h-44 items-end hidden 
          md:flex
          '>
          <span className='flex gap-1 text-white'> 
            <RiCopyrightLine size={25}/>
            Copyright | Terms of Service | Privacy Policy
          </span>    
          <div className='flex gap-2'>
            <RiFacebookBoxLine size={25} />
            <RiLinkedinBoxLine size={25} />
            <RiTwitterLine size={25} />
          </div>    
        </footer>
      </div>

    </div>
  )
}
