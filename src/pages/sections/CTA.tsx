import { Link } from 'react-router-dom'
import { Container } from '../components/Container'

export const CTA = () => {
  return (
    <section className='py-20'>
      <Container>
        <div
          className='relative rounded-2xl px-10 py-16 text-center overflow-hidden'
          style={{
            background:
              'linear-gradient(135deg, #155157 0%, #155157 10%, #00E0B8 65%, #00ebb8 100%)'
          }}
        >
          {/* Subtle radial overlay for depth */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]' />

          <div className='relative z-10 max-w-md mx-auto'>
            <h2 className='text-white   text-[24px] md:text-[28px] lg:text-[35px] font-[900] leading-tight mb-4'>
              Ready to trade with
              <br />
              the best?
            </h2>

            <p className='text-white/70 text-sm mb-8 leading-relaxed'>
              Connect your wallet and follow expert strategies with transparent
              fees and enforced risk management.
            </p>

            <div className='flex items-center justify-center gap-3 flex-wrap'>
              <Link
                target='_blank'
                to={'https://zephyr-web-sable.vercel.app/'}
                className='bg-white text-[#00A991] text-sm font-[900] px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors'
              >
                Launch Application
              </Link>
              <Link
                to={'https://zephyr-web-sable.vercel.app/docs'}
                target='_blank'
                className='bg-[#0a2a20]/30 text-white text-sm font-[900] px-6 py-2.5 rounded-lg border border-white/20 hover:bg-[#0a2a20]/40 transition-colors'
              >
                Read Docs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
