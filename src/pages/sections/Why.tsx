import { Container } from '../components/Container'

export const Why = () => {
  return (
    <section className='py-20'>
      <Container>
        <div className='grid sm:grid-cols-2 gap-12 items-center max-w-[900px] mx-auto'>
          {/* ── Left: heading + feature list ── */}
          <div>
            <h2 className='text-white text-3xl sm:text-4xl font-[900] text-[38px] mb-10'>
              Why Traders Trust Zephyr
            </h2>

            <div className='space-y-8'>
              {[
                {
                  icon: (
                    <svg viewBox='0 0 20 20' fill='none' className='w-5 h-5'>
                      <rect
                        x='3'
                        y='2'
                        width='14'
                        height='16'
                        rx='2'
                        stroke='#00E0B8'
                        strokeWidth='1.5'
                      />
                      <path
                        d='M7 7h6M7 10h6M7 13h4'
                        stroke='#00E0B8'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                      />
                    </svg>
                  ),
                  title: 'Non-Custodial Vaults',
                  desc: 'Your funds never leave your control. Zephyr uses program-derived vaults that follow only your pre-authorized risk parameters.'
                },
                {
                  icon: (
                    <svg viewBox='0 0 20 20' fill='none' className='w-5 h-5'>
                      <polyline
                        points='2,14 6,9 10,11 14,5 18,7'
                        stroke='#00E0B8'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ),
                  title: 'Immutable Performance History',
                  desc: 'No fake stats. Every trade, profit, and loss is pulled directly from the Solana ledger.'
                },
                {
                  icon: (
                    <svg viewBox='0 0 20 20' fill='none' className='w-5 h-5'>
                      <path
                        d='M10 2L4 5v5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5L10 2z'
                        stroke='#00E0B8'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ),
                  title: 'Enforced Risk Controls',
                  desc: 'Traders cannot bypass your safety limits. If a trade violates your max drawdown or loss settings, the contract rejects it.'
                }
              ].map((item, i) => (
                <div key={i} className='flex gap-4'>
                  <div className='mt-0.5 w-8 h-8 rounded-lg bg-[#00E0B8]/10 flex items-center justify-center flex-shrink-0'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='text-white font-[900] text-sm mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-[#94A3B8] text-xs leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Safety Dashboard card ── */}
          <div className='relative bg-[#080f0f] border border-[#1a2e2e] rounded-2xl p-6 overflow-hidden'>
            {/* Active Guard badge */}
            <div className='absolute top-4 right-4 flex items-center gap-1.5'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#00E0B8] animate-pulse' />
              <span className='text-[#00E0B8] text-[10px] font-semibold tracking-widest uppercase'>
                Active Guard
              </span>
            </div>

            <h4 className='text-[#94A3B8] font-bold text-base mb-6'>
              Safety Dashboard
            </h4>

            {/* Daily Max Loss */}
            <div className='mb-5'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-[#94A3B8] text-[11px] tracking-widest uppercase'>
                  Daily Max Loss
                </span>
                <span className='text-white text-sm font-semibold'>2.5%</span>
              </div>
              <div className='w-full h-1.5 bg-[#1a2e2e] rounded-full overflow-hidden'>
                <div
                  className='h-full rounded-full bg-[#00E0B8]'
                  style={{ width: '25%' }}
                />
              </div>
            </div>

            {/* Account Drawdown */}
            <div className='mb-6'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-[#94A3B8] text-[11px] tracking-widest uppercase'>
                  Account Drawdown
                </span>
                <span className='text-white text-sm font-semibold'>12.4%</span>
              </div>
              <div className='w-full h-1.5 bg-[#1a2e2e] rounded-full overflow-hidden'>
                <div
                  className='h-full rounded-full bg-[#00E0B8]'
                  style={{ width: '62%' }}
                />
              </div>
            </div>

            {/* Info row */}
            <div className='flex items-start gap-2 bg-[#0d1e1e] border border-[#1a2e2e] rounded-xl px-4 py-3'>
              <svg
                viewBox='0 0 16 16'
                fill='none'
                className='w-4 h-4 flex-shrink-0 mt-0.5 text-[#00E0B8]'
              >
                <circle
                  cx='8'
                  cy='8'
                  r='6.5'
                  stroke='currentColor'
                  strokeWidth='1.2'
                />
                <path
                  d='M8 7v4M8 5.5v.5'
                  stroke='currentColor'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                />
              </svg>
              <p className='text-[#94A3B8] text-[11px] leading-relaxed'>
                All risk parameters are stored and verified on-chain via Zephyr
                Core contracts.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
