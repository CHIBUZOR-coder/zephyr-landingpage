import { Container } from '../components/Container'
import { FiCheckCircle } from 'react-icons/fi'

export const Features = () => {
  return (
    <section className='py-20'>
      <Container>
        <div className='w-full flex justify-center items-center'>
          
          <div className='relative rounded-2xl border border-[#1a2a2a] bg-[#071313] px-3 lg:px-8 py-4 lg:py-8 sm:p-10 overflow-hidden w-full lg:w-[70%] '>
            {/* subtle glow */}
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,224,184,0.08),transparent_60%)] pointer-events-none' />

            {/* Content */}
            <div className='relative z-10 max-w-[700px]'>
              <h2 className='text-white text-[24px] md:text-[28px] lg:text-[35px] sm:text-2xl font-[700] leading-snug text-center'>
                Zephyr uses a transparent, performance-based fee model enforced
                entirely on-chain.
              </h2>

              {/* List */}
              <ul className='mt-6 space-y-4'>
                {[
                  'Success fees are charged only on profitable trades',
                  'Fees are dynamically calculated and capped at 20%',
                  'Master traders earn the majority of fees',
                  'Platform fees are visible, deterministic, and verifiable on-chain',
                  'No subscriptions. No spreads. No custody.'
                ].map((item, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-[#CBD5E1] text-sm leading-relaxed'
                  >
                    <span className='text-[#00E0B8] mt-[2px]'>
                      <FiCheckCircle size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Info Bar */}
            <div className='relative z-10 mt-8 flex items-center gap-2 bg-[#FFFFFF0D] rounded-md p-2'>
              <span
                style={{
                  backgroundImage: `url("/images/leave.svg")`
                }}
                className=' bg-center bg-cover h-[20px] w-[20px]  flex justify-center items-center'
              ></span>

              <span className='text-[#94A3B8] text-[13px] italic'>
                Fee logic is executed by Zephyr core smart contracts and cannot
                be bypassed.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
