import { Container } from '../components/Container'

const tiers = [
  {
    name: 'Community Trader',
    desc: 'Entry level for new traders',
    trader: 80,
    platform: 20,
    color: '#00E0B8',
    icon: '✓',
    iconBg: '#00E0B8'
  },
  {
    name: 'Rising Trader',
    desc: 'Proven track record emerging',
    trader: 85,
    platform: 15,
    color: '#5B8AF0',
    icon: '✓',
    iconBg: '#5B8AF0'
  },
  {
    name: 'Verified Alpha',
    desc: 'Established alpha generator',
    trader: 90,
    platform: 10,
    color: '#9B6FE8',
    icon: '✓',
    iconBg: '#9B6FE8'
  },
  {
    name: 'Elite Alpha',
    desc: 'Top-tier performance history',
    trader: 92.5,
    platform: 7.5,
    color: '#F0A030',
    icon: '✓',
    iconBg: '#F0A030'
  },
  {
    name: 'Institutional Alpha',
    desc: 'Institutional-grade track record',
    trader: 95,
    platform: 5,
    color: '#ffffff',
    icon: '✓',
    iconBg: 'transparent',
    iconBorder: true
  }
]

export const Stats = () => {
  return (
    <section className='py-20'>
      <Container>
        {/* ── 3-step cards ── */}
        <p className='text-[#00A991] text-xs font-semibold tracking-widest text-center uppercase mb-3'>
          The Zephyr Process
        </p>
        <h2 className='text-white text-[38px] font-[900] text-center mb-14'>
          Start Mirroring in 3 Steps
        </h2>

        <div className='grid sm:grid-cols-3 gap-4 max-w-[900px] mx-auto'>
          {[
            {
              icon: '1',
              title: 'Connect',
              desc: 'Securely link your Phantom or Solflare wallet. You maintain 100% control over your private keys at all times.'
            },
            {
              icon: '2',
              title: 'Choose',
              desc: 'Browse top-performing traders with real, on-chain performance histories. Filter by ROI, Win Rate, or Drawdown.'
            },
            {
              icon: '3',
              title: 'Set Risk',
              desc: 'Define your parameters: max position size, daily stop loss, and max drawdown. Our smart contracts enforce these limits.'
            }
          ].map((step, i) => (
            <div
              key={i}
              className='relative bg-[#0a1a1a] border border-[#1a2e2e] rounded-xl p-5 text-left overflow-hidden'
            >
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,224,184,0.06),transparent_60%)]' />
              <div className='relative z-10'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='w-5 h-5 font-[900]  flex items-center justify-center text-[#00A991] bg-[#334155] text-xs rounded-full '>
                    {step.icon}
                  </span>
                  <span className='text-[#00E0B8] text-xs font-[700]'>
                    {step.title}
                  </span>
                </div>
                <p className='text-[#6b8080] text-[13px] font-[400] leading-relaxed '>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trader Rewards Card ── */}
        <div className='mt-20 max-w-[900px] mx-auto'>
          <h3 className='text-white text-[38px]  font-[900] text-center mb-2'>
            Trader Rewards Scale With
            <br />
            Consistency, Not One-Off Wins
          </h3>
          <p className='text-[#94A3B8] text-[13px] font-[600] text-center mb-8'>
            Verification-style achievement system based on sustained volume and
            performance
          </p>

          {/* Tier rows */}
          <div className='bg-[#080f0f] border border-[#1a2e2e] rounded-2xl overflow-hidden'>
            {/* Header labels */}
            <div className='flex items-center justify-between px-5 py-3 border-b border-[#1a2e2e]'>
              <span className='text-transparent text-xs'>_</span>
              <span className='text-[#4a6060] text-[11px] tracking-wide'>
                Trader / Platform
              </span>
            </div>

            {tiers.map((tier, i) => (
              <div
                key={i}
                className='flex items-center justify-between px-5 py-4 border-b border-[#1a2e2e] last:border-b-0 hover:bg-[#0d1e1e] transition-colors'
              >
                {/* Left: icon + name */}
                <div className='flex items-center gap-3'>
                  <span
                    className='w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0'
                    style={{
                      background: tier.iconBorder
                        ? 'transparent'
                        : `${tier.iconBg}22`,
                      color: tier.color,
                      border: tier.iconBorder
                        ? `1.5px solid ${tier.color}55`
                        : 'none'
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className='text-white text-sm font-medium leading-tight'>
                      {tier.name}
                    </p>
                    <p className='text-[#94A3B8] text-[11px] mt-0.5'>
                      {tier.desc}
                    </p>
                  </div>
                </div>

                {/* Right: split percentage */}
                <div
                  className='text-sm  tabular-nums font-[700]'
                  style={{ color: tier.color }}
                >
                  {tier.trader}% /{' '}
             
                    {tier.platform}%
          
                </div>
              </div>
            ))}
          </div>

          <p className='text-[#3a5050] text-[11px] text-center mt-4'>
            Fees are earned through sustained volume and consistency.
          </p>
        </div>
      </Container>
    </section>
  )
}
