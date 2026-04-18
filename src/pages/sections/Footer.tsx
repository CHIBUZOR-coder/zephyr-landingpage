import { FaInstagram, FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TbZeppelin } from 'react-icons/tb'

export default function Footer () {
  return (
    <footer
      className='w-full'
      style={{
        backgroundColor: '#0d0d13',
        fontFamily: "'Inter', 'Helvetica Neue', sans-serif"
      }}
    >
      {/* Top section */}
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-8'>
        <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-10'>
          {/* Left: Logo + tagline */}
          <div className='max-w-xs'>
            {/* Logo */}
            <div className='flex items-center gap-2 mb-3'>
              <TbZeppelin
                size={20}
                style={{ color: '#4dd9e0', transform: 'rotate(-45deg)' }}
              />
              <span
                className='text-white font-semibold tracking-wide'
                style={{ fontSize: '15px', letterSpacing: '0.02em' }}
              >
                Zephyr
              </span>
            </div>
            {/* Tagline */}
            <p
              className='leading-relaxed'
              style={{
                color: '#8a8a9a',
                fontSize: '12.5px',
                lineHeight: '1.65',
                maxWidth: '230px'
              }}
            >
              On-chain social copy trading platform delivering transparent,
              non-custodial trading on the Solana blockchain.
            </p>
          </div>

          {/* Right: Nav columns + social icons */}
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-20'>
            {/* PLATFORM column */}
            <div>
              <h3
                className='font-semibold tracking-widest mb-4'
                style={{
                  color: '#ffffff',
                  fontSize: '11px',
                  letterSpacing: '0.12em'
                }}
              >
                PLATFORM
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='#'
                    className='transition-colors duration-150 hover:text-white'
                    style={{ color: '#8a8a9a', fontSize: '13px' }}
                  >
                    How it Works
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY column + social icons */}
            <div className='flex flex-col gap-0'>
              <div className='flex flex-row gap-14 sm:gap-10 items-start'>
                {/* COMPANY */}
                <div>
                  <h3
                    className='font-semibold tracking-widest mb-4'
                    style={{
                      color: '#ffffff',
                      fontSize: '11px',
                      letterSpacing: '0.12em'
                    }}
                  >
                    COMPANY
                  </h3>
                  <ul className='space-y-2'>
                    {['About', 'Discord', 'Twitter'].map(item => (
                      <li key={item}>
                        <a
                          href='#'
                          className='transition-colors duration-150 hover:text-white'
                          style={{ color: '#8a8a9a', fontSize: '13px' }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social icons — aligned to top-right */}
                <div className='flex items-start gap-2 mt-0 pt-0 self-center sm:self-start sm:mt-0'>
                  {[
                    { Icon: FaInstagram, label: 'Instagram' },
                    { Icon: FaXTwitter, label: 'X / Twitter' },
                    { Icon: FaDiscord, label: 'Discord' }
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href='#'
                      aria-label={label}
                      className='flex items-center justify-center rounded-lg transition-colors duration-150'
                      style={{
                        width: '34px',
                        height: '34px',
                        backgroundColor: '#1a1a24',
                        border: '1px solid #2a2a38',
                        color: '#c0c0d0'
                      }}
                      onMouseEnter={e => {
                        ;(
                          e.currentTarget as HTMLElement
                        ).style.backgroundColor = '#222232'
                        ;(e.currentTarget as HTMLElement).style.color =
                          '#ffffff'
                      }}
                      onMouseLeave={e => {
                        ;(
                          e.currentTarget as HTMLElement
                        ).style.backgroundColor = '#1a1a24'
                        ;(e.currentTarget as HTMLElement).style.color =
                          '#c0c0d0'
                      }}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #1e1e2a' }} />

      {/* Bottom bar */}
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
          <span style={{ color: '#5a5a6e', fontSize: '12px' }}>
            © 2026 Zephyr Labs. All rights reserved.
          </span>
          <div className='flex items-center gap-5'>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href='#'
                className='transition-colors duration-150 hover:text-white'
                style={{ color: '#5a5a6e', fontSize: '12px' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
