
import Image from 'next/image';
import Link from 'next/link';
import footerimg from '~/assets/images/footerimg.png';
import logoSrc from '~/assets/images/ulama_logo.svg';
import Button from '~/components/ui/Button';
const Footer2 = () => {
  return (
    <div className="bg-primary text-primary-text-white">
      <div className="px-4 md:px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Want to unblock your permitting bottlenecks?
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Book a free demo or email us at{' '}
                <a href="mailto:hello@ulama.tech" className="underline hover:no-underline">
                  hello@ulama.tech
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://cal.com/team/ulama/demo" target="_blank">
                  <Button variant="primary" size="lg">
                    Book a Demo
                  </Button>
                </Link>
                <Link href="mailto:tyce@ulama.tech" target="_blank">

                  <Button variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </Link>

              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 w-82 md:w-96">
                <Image
                  src={footerimg}
                  alt="Building illustration"
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-white/20 px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12 justify-between">
            <div className="flex-1 lg:flex-none lg:w-1/4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded flex items-center justify-center">
                  <Image
                    src={logoSrc}
                    alt="Ulama Logo"
                    width={30}
                    height={30}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-2xl font-bold">Ulama</span>
              </div>
              <p className="text-white/80 mb-6 max-w-64">
                So architects can focus on what they do best — designing better spaces.
              </p>
              <div className="flex gap-4">
                {/* <a href="#" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C16.1913 2 18.2867 2.00043 19.7324 3.05078C20.1993 3.39002 20.61 3.80066 20.9492 4.26758C21.9996 5.71334 22 7.80871 22 12C22 16.1913 21.9996 18.2867 20.9492 19.7324C20.61 20.1993 20.1993 20.61 19.7324 20.9492C18.2867 21.9996 16.1913 22 12 22C7.80871 22 5.71334 21.9996 4.26758 20.9492C3.80066 20.61 3.39002 20.1993 3.05078 19.7324C2.00043 18.2867 2 16.1913 2 12C2 7.80871 2.00043 5.71334 3.05078 4.26758C3.39002 3.80066 3.80066 3.39002 4.26758 3.05078C5.71334 2.00043 7.80871 2 12 2ZM12 6.70605C9.07632 6.70605 6.70605 9.07632 6.70605 12C6.70605 14.9237 9.07632 17.2939 12 17.2939C14.9237 17.2939 17.2939 14.9237 17.2939 12C17.2939 9.07632 14.9237 6.70605 12 6.70605ZM12 8.69141C13.8238 8.69141 15.3086 10.1749 15.3086 12C15.3086 13.8238 13.8238 15.3086 12 15.3086C10.1762 15.3086 8.69141 13.8238 8.69141 12C8.69141 10.1749 10.1762 8.69141 12 8.69141ZM17.6914 5.60352C17.3019 5.60352 16.9855 5.9191 16.9854 6.30859C16.9854 6.6982 17.3018 7.01465 17.6914 7.01465C18.0809 7.01453 18.3965 6.69812 18.3965 6.30859C18.3964 5.91917 18.0808 5.60363 17.6914 5.60352Z" fill="white" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a> */}
                <a href="https://linkedin.com/company/ulama" target="_blank" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M4.86874 3.16323C4.87277 3.68105 4.67291 4.17966 4.31234 4.55134C3.95179 4.923 3.45947 5.13788 2.94178 5.14955C2.42517 5.13059 1.93559 4.91389 1.5742 4.54421C1.21282 4.17454 1.00726 3.68017 1 3.16323C1.02246 2.65961 1.23557 2.18334 1.59615 1.83102C1.95672 1.47869 2.43778 1.27666 2.94178 1.26587C3.44433 1.27686 3.92368 1.47939 4.28185 1.83207C4.64003 2.18475 4.84998 2.66092 4.86874 3.16323ZM1.20752 8.67747C1.20752 7.53608 1.93384 7.71396 2.94178 7.71396C3.94974 7.71396 4.66123 7.53608 4.66123 8.67747V19.7949C4.66123 20.9511 3.93491 20.7139 2.94178 20.7139C1.94867 20.7139 1.20752 20.9511 1.20752 19.7949V8.67747Z" stroke="white" strokeWidth="1.57849" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.65625 8.67687C7.65625 8.03947 7.89341 7.8023 8.26398 7.72817C8.63456 7.65406 9.90931 7.72817 10.354 7.72817C10.7987 7.72817 10.9765 8.45451 10.9617 9.00298C11.3421 8.49246 11.8471 8.08808 12.4285 7.82856C13.0098 7.56902 13.648 7.463 14.282 7.52066C14.9047 7.48259 15.5282 7.57593 16.1124 7.79464C16.6966 8.01332 17.2282 8.35247 17.6728 8.79004C18.1173 9.22761 18.4648 9.7538 18.6928 10.3344C18.9207 10.9151 19.0239 11.5372 18.9957 12.1603V19.7499C18.9957 20.906 18.2842 20.6688 17.2763 20.6688C16.2683 20.6688 15.5568 20.906 15.5568 19.7499V13.8205C15.5829 13.5154 15.5429 13.2082 15.4397 12.9198C15.3366 12.6314 15.1726 12.3686 14.9589 12.1493C14.745 11.9299 14.4867 11.7591 14.2011 11.6485C13.9155 11.5379 13.6095 11.49 13.3037 11.5081C12.9994 11.5004 12.6969 11.5574 12.4163 11.6753C12.1357 11.7933 11.8833 11.9695 11.6759 12.1923C11.4685 12.4152 11.3108 12.6795 11.2132 12.9679C11.1157 13.2562 11.0805 13.562 11.11 13.865V19.7942C11.11 20.9505 10.3836 20.7132 9.3757 20.7132C8.36775 20.7132 7.65625 20.9505 7.65625 19.7942V8.67687Z" stroke="white" strokeWidth="1.57849" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-8 md:gap-16'>

              <div>
                <h3 className="text-xl font-semibold mb-6 opacity-75">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:text-white transition-colors">Home</a></li>
                  <li><a href="#why-us" className="text-white hover:text-white transition-colors">Why Us</a></li>
                  <li><a href="#" className="text-white hover:text-white transition-colors">Features</a></li>
                  <li><a href="#team" className="text-white hover:text-white transition-colors">Team</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 opacity-75">Support</h3>
                <ul className="space-y-3">
                  <li><a href="/terms" className="text-white hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="/privacy" className="text-white hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 opacity-75">Contact Us</h3>
                <div className="space-y-3 text-white">
                  <p>
                    <a href="mailto:tyce@ulama.tech" className="hover:text-white transition-colors">
                      tyce@ulama.tech
                    </a>
                  </p>
                  <p>370 Jay St, 7th Fl</p>
                  <p>Brooklyn, NY - 11201</p>
                  <p>
                    <a href="tel:+16469338961" className="hover:text-white transition-colors">
                      +1 (646) 933-8961
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
