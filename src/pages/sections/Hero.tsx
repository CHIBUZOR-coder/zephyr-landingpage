import { FiLock } from 'react-icons/fi'
import { BsBarChart } from 'react-icons/bs'
import { RiShieldCheckLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

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
      <div>
        <p className='text-[#577884] mt-6  mx-auto text-sm sm:text-base leading-relaxed lg:w-[38%] w-full'>
          Secure, transparent, and non-custodial copy trading on Solana with
          professional-grade risk controls enforced by smart contracts.
        </p>
      </div>

      {/* Buttons */}
      <div className='mt-8 flex justify-center items-center gap-4 flex-wrap'>
        <Link
          to={'https://zephyr-web-sable.vercel.app'}
          target='_blank'
          className='bg-[#007F6D] font-[700] px-6 py-3 rounded-lg flex items-center  justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:opacity-90 transition text-white'
        >
          Launch App
        </Link>

        <Link
          to={'https://zephyr-web-sable.vercel.app/leaderboard'}
          target='_blank'
          className='bg-[#0f1414] font-[700] border border-[#FFFFFF1A] text-gray-300 px-6 py-3 rounded-lg hover:bg-[#141a1a] transition'
        >
          View Top Traders
        </Link>
      </div>

      {/* Feature Cards */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 max-w-[900px]   mx-auto'>
        {[
          {
            id: 1,
            icon: <FiLock />,
            title: 'Non-Custodial',
            desc: 'Your funds never leave your control'
          },
          {
            id: 2,
            icon: <BsBarChart />,
            title: 'On-Chain Performance',
            desc: 'Every trade verifiable on Solana'
          },
          {
            id: 3,
            icon: <RiShieldCheckLine />,
            title: 'Enforced Risk Controls',
            desc: 'Max loss & drawdown enforced by contracts'
          },
          {
            id: 4,
            icon: '/images/trading.svg',
            title: 'Performance-Based Fees',
            desc: 'We earn only when you profit'
          }
        ].map((item, i) => (
          <div
            key={i}
            className='bg-[#0b1212] border border-[#1a2626] rounded-xl p-5 text-left hover:border-[#00E0B8]/30 transition'
          >
            {item.id === 4 ? (
              <>
                <span
                  style={{ backgroundImage: `url("/images/trading.svg")` }}
                  className='text-[#00E0B8] text-lg mb-3 bg-center bg-cover inline-block h-[10px] w-[18px]'
                ></span>
                <h4 className='text-white text-sm font-[700] mb-1'>
                  {item.title}
                </h4>
                <p className='text-[#94A3B8] text-xs leading-relaxed'>
                  {item.desc}
                </p>
              </>
            ) : (
              <>
                <div className='text-[#00E0B8] text-lg mb-3'>{item.icon}</div>
                <h4 className='text-white text-sm font-[700] mb-1'>
                  {item.title}
                </h4>
                <p className='text-[#94A3B8] text-xs leading-relaxed'>
                  {item.desc}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
