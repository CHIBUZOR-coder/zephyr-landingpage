import { FaArrowRight } from 'react-icons/fa'
import { FiLock, FiActivity } from 'react-icons/fi'
import { BsBarChart } from 'react-icons/bs'
import { RiShieldCheckLine } from 'react-icons/ri'

export const Hero = () => {
  return (
    <section className='pt-28 pb-20 text-center relative'>
      {/* Top Badge */}
      <div className='flex justify-center mb-6'>
        <span className='text-[11px] tracking-wide px-4 py-1 rounded-full bg-[#0c1f1c] text-[#00E0B8] border border-[#123c36]'>
          ● LIVE ON SOLANA MAINNET
        </span>
      </div>

      {/* Heading */}
      <h1 className='text-[40px] sm:text-[56px]  leading-[1.1] font-[900]'>
        <span className='text-white'>On-Chain Social</span> <br />
        <div className=' bg-gradient-to-tr from-[#0e5255] to-gray-300 bg-clip-text text-transparent'>
          <span className=''>Copy Trading</span>
        </div>
      </h1>

      {/* Description */}
      <p className='text-[#577884] mt-6 max-w-[520px] mx-auto text-sm sm:text-base leading-relaxed'>
        Secure, transparent, and non-custodial copy trading on Solana with
        professional-grade risk controls enforced by smart contracts.
      </p>

      {/* Buttons */}
      <div className='mt-8 flex justify-center items-center gap-4 flex-wrap'>
        <button className='bg-[#007F6D] font-[700] px-6 py-3 rounded-lg flex items-center  justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:opacity-90 transition text-white'>
          Launch App <FaArrowRight />
        </button>

        <button className='bg-[#0f1414] font-[700] border border-[#FFFFFF1A] text-gray-300 px-6 py-3 rounded-lg hover:bg-[#141a1a] transition'>
          View Top Traders
        </button>
      </div>

      {/* Feature Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-[900px] mx-auto'>
        {[
          {
            icon: <FiLock />,
            title: 'Non-Custodial',
            desc: 'Your funds never leave your control'
          },
          {
            icon: <BsBarChart />,
            title: 'On-Chain Performance',
            desc: 'Every trade verifiable on Solana'
          },
          {
            icon: <RiShieldCheckLine />,
            title: 'Enforced Risk Controls',
            desc: 'Max loss & drawdown enforced by contracts'
          },
          {
            icon: <FiActivity />,
            title: 'Performance-Based Fees',
            desc: 'We earn only when you profit'
          }
        ].map((item, i) => (
          <div
            key={i}
            className='bg-[#0b1212] border border-[#1a2626] rounded-xl p-5 text-left hover:border-[#00E0B8]/30 transition'
          >
            <div className='text-[#00E0B8] text-lg mb-3'>{item.icon}</div>
            <h4 className='text-white text-sm font-[700] mb-1'>
              {item.title}
            </h4>
            <p className='text-[#94A3B8] text-xs leading-relaxed'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
