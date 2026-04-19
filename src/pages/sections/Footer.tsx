import { FaInstagram, FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <footer className='w-full bg-[#0d0d13] font-sans'>
      {/* Top section */}
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-8'>
        <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-10'>
          {/* Left: Logo + tagline */}
          <div className='max-w-xs'>
            {/* Logo */}
            <div className='flex items-center gap-2 mb-3'>
              <span
                className='bg-center bg-cover h-10 w-10 inline-block'
                style={{ backgroundImage: `url("/images/zeflogo.png")` }}
              />
              <span className='text-white font-semibold tracking-wide text-[18px]'>
                Zephyr
              </span>
            </div>

            {/* Tagline */}
            <p className='text-[#577884] text-[12.5px] leading-[1.65] max-w-[230px]'>
              On-chain social copy trading platform delivering transparent,
              non-custodial trading on the Solana blockchain.
            </p>
          </div>

          {/* Right: Nav columns + social icons */}
          <div className='flex flex-col sm:flex-row gap-10 sm:gap-20'>
            {/* PLATFORM column */}
            <div>
              <h3 className='text-white font-semibold text-[11px] tracking-[0.12em] mb-4 uppercase'>
                Platform
              </h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to={'https://zephyr-web-sable.vercel.app/how_it_works'}
                    target='_blank'
                    className='text-[#94A3B8] text-[13px] hover:text-white transition-colors duration-150'
                  >
                    How it Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY column + social icons */}
            <div>
              <div className='flex flex-row gap-14 sm:gap-10 items-start'>
                {/* COMPANY */}
                <div>
                  <h3 className='text-white font-semibold text-[11px] tracking-[0.12em] mb-4 uppercase'>
                    Company
                  </h3>
                  <ul className='space-y-2'>
                    {['About', 'Discord', 'Twitter'].map(item => (
                      <li key={item}>
                        <a
                          href='#'
                          className='text-[#94A3B8] text-[13px] hover:text-white transition-colors duration-150'
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social icons */}
                <div className='flex items-start gap-2 self-center sm:self-start'>
                  {[
                    { Icon: FaInstagram, label: 'Instagram' },
                    { Icon: FaXTwitter, label: 'X / Twitter' },
                    { Icon: FaDiscord, label: 'Discord' }
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href='#'
                      aria-label={label}
                      className='flex items-center justify-center w-[34px] h-[34px] rounded-lg
                                 bg-[#1a1a24] border border-[#2a2a38] text-[#c0c0d0]
                                 hover:bg-[#222232] hover:text-white transition-colors duration-150'
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
      <div className='border-t border-[#1e1e2a]' />

      {/* Bottom bar */}
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-4'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
          <span className='text-[#577884] text-[12px]'>
            © 2026 Zephyr Labs. All rights reserved.
          </span>
          <div className='flex items-center gap-5'>
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href='#'
                className='text-[#577884] text-[12px] hover:text-white transition-colors duration-150'
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
