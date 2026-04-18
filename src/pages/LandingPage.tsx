import { Link } from 'react-router-dom'
import { CTA } from './sections/CTA'
import { Features } from './sections/Features'

import { Hero } from './sections/Hero'
import { Stats } from './sections/Stats'
import { Why } from './sections/Why'
import Footer from './sections/Footer'

export default function LandingPage () {
  return (
    <div className='bg-[#050B0B] min-h-screen font-sans'>
      <div>
        <div className='header flex justify-between items-center px-4 py-3'>
          <div className='flex items-center gap-3'>
            <span
              style={{
                backgroundImage: `url("/images/zeflogo.png") bg-center bg-cover h-22 w-22`
              }}
            ></span>

            <p className=' font-semibold text-white'>Zephyr</p>
          </div>

          <div className='flex items-center gap-6'>
            <span className='font-[400] text-[#FFFFFFB3]'>How it works</span>
            <Link
              to={'https://zephyr-web-sable.vercel.app/'}
              className='bg-[#006557] text-white  font-[700] px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors shadow-[0px_0px_28px_rgba(0,101,87,1)]'
            >
              Launch Application
            </Link>
          </div>
        </div>
        <p className='border-b-[1px] border-[#006557] w-full'></p>
      </div>
      <Hero />
      <Features />
      <Stats />
      <Why />
      <CTA />
      <Footer />
    </div>
  )
}
