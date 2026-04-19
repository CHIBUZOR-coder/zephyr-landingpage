import { Link } from 'react-router-dom'
import { CTA } from './sections/CTA'
import { Features } from './sections/Features'

import { Hero } from './sections/Hero'
import { Stats } from './sections/Stats'
import { Why } from './sections/Why'
import Footer from './sections/Footer'

export default function LandingPage () {
  return (
    <div className='bg-[#050B0B] min-h-screen font-sans '>
      <div className='w-full'>
        <div className='w-full flex justify-center items-center'>
          <div className=' w-full md:w-[70%]'>
            <div className='w-full flex flex-col justify-center '>
              <div className='header flex justify-between items-center px-4 py-3'>
                <div className='flex items-center gap-3'>
                  <span
                    className='bg-center bg-cover h-[20px] lg:h-[40px] w-[20px] lg:w-[40px] block'
                    style={{
                      backgroundImage: `url("/images/zeflogo.png") `
                    }}
                  ></span>

                  <p className=' font-semibold text-white'>Zephyr</p>
                </div>

                <div className='flex items-center gap-6 text-xs lg:text-[16px]'>
                  <Link
                    to={'https://zephyr-web-sable.vercel.app/how_it_works'}
                    className='font-[400] text-[#FFFFFFB3]'
                  >
                    How it works
                  </Link>
                  <Link
                    to={'https://zephyr-web-sable.vercel.app'}
                    className='bg-[#006557] text-white  font-[700] px-2 md:px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors shadow-[0px_0px_28px_rgba(0,101,87,1)]'
                  >
                    Launch App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='border-b-[1px] border-[#006557] w-full'></p>
      </div>
      <div className='w-ful px-2 md:px-5'>
        <Hero />
        <Features />
        <Stats />
        <Why />
        <CTA />
      </div>
      <Footer />
    </div>
  )
}
