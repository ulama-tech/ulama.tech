
import Image from 'next/image';
import Link from 'next/link';

const Team = () => (
  <section className="py-16 md:py-20 bg-white" id="team">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
              <div className=" h-[2px] w-16 bg-primary"></div>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-primary"> We build</span>
              </h3>

              <h3 className="text-4xl md:text-5xl font-bold leading-tight ">
                <span className="text-secondary">for the builders.</span>
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-600  max-w-md">
            We have a combined 17+ years of experience of working in the AEC space, building cutting-edge software, and deploying AI solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-64 h-80 rounded-lg overflow-hidden ">
                <Image
                  src="/images/tyce.jpeg"
                  alt="Tyce Herrman, CEO"
                  className="w-full h-full object-cover"
                  width={256}
                  height={320}
                />
              </div>
              <div className="absolute bottom-0 left-0 flex ">
                <div className="w-12 h-12 bg-secondary cursor-pointer hover:bg-orange-500 transition-all duration-300 flex items-center justify-center ">
                  <Link href="mailto:tyce@ulama.tech" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M7.77429 13.495L10.1903 15.8999C10.3385 16.0517 10.5238 16.1623 10.7279 16.2207C10.932 16.279 11.1478 16.283 11.3539 16.2323C11.5614 16.1841 11.7529 16.0833 11.9101 15.9397C12.0673 15.796 12.1849 15.6145 12.2516 15.4122L16.2192 3.52067C16.3019 3.29786 16.319 3.05597 16.2684 2.82373C16.2177 2.59148 16.1015 2.37868 15.9333 2.2106C15.7653 2.04252 15.5525 1.92623 15.3202 1.87557C15.0881 1.8249 14.8461 1.84199 14.6233 1.92479L2.73174 5.89233C2.52255 5.96378 2.33625 6.08981 2.19207 6.25736C2.04789 6.42492 1.95108 6.62794 1.91163 6.84543C1.87091 7.04325 1.87998 7.24808 1.93801 7.44152C1.99604 7.63496 2.10123 7.81095 2.24411 7.95368L5.28072 10.9903L5.18097 14.836L7.77429 13.495Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.4638 2.33972L5.69067 10.4857" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="w-12 h-12 bg-primary  flex items-center justify-center cursor-pointer hover:bg-violet-800 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/tyceherrman/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clipPath="url(#clip0_990_1454)">
                        <path d="M4.92296 2.45229C4.92613 2.86011 4.76873 3.25279 4.48476 3.54551C4.2008 3.83821 3.81307 4.00744 3.40536 4.01663C2.9985 4.0017 2.61293 3.83104 2.32831 3.53989C2.04371 3.24876 1.88181 2.85941 1.8761 2.45229C1.89379 2.05566 2.06162 1.68057 2.3456 1.4031C2.62957 1.12562 3.00843 0.966503 3.40536 0.958008C3.80115 0.966661 4.17867 1.12617 4.46075 1.40392C4.74283 1.68168 4.90818 2.05669 4.92296 2.45229ZM2.03953 6.79507C2.03953 5.89617 2.61155 6.03626 3.40536 6.03626C4.19919 6.03626 4.75953 5.89617 4.75953 6.79507V15.5507C4.75953 16.4613 4.18751 16.2745 3.40536 16.2745C2.62323 16.2745 2.03953 16.4613 2.03953 15.5507V6.79507Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.11804 6.79506C7.11804 6.29307 7.30482 6.10629 7.59667 6.04791C7.88851 5.98954 8.89246 6.04791 9.24267 6.04791C9.59289 6.04791 9.73297 6.61994 9.72131 7.05189C10.0209 6.64983 10.4186 6.33135 10.8764 6.12696C11.3343 5.92256 11.8369 5.83907 12.3362 5.88448C12.8266 5.8545 13.3177 5.92801 13.7778 6.10025C14.2378 6.27248 14.6565 6.53958 15.0067 6.88419C15.3567 7.2288 15.6304 7.64321 15.8099 8.1005C15.9894 8.55779 16.0707 9.04772 16.0485 9.53848V15.5157C16.0485 16.4262 15.4882 16.2394 14.6944 16.2394C13.9005 16.2394 13.3402 16.4262 13.3402 15.5157V10.846C13.3607 10.6056 13.3292 10.3637 13.248 10.1366C13.1667 9.9095 13.0376 9.70254 12.8693 9.52978C12.7009 9.35702 12.4974 9.22251 12.2725 9.13538C12.0476 9.04826 11.8065 9.01054 11.5658 9.02482C11.3261 9.01873 11.0879 9.06362 10.8669 9.15652C10.6459 9.24941 10.4471 9.38821 10.2838 9.56369C10.1204 9.73919 9.99622 9.94736 9.91938 10.1745C9.84255 10.4016 9.81482 10.6424 9.83804 10.881V15.5506C9.83804 16.4612 9.26602 16.2744 8.47221 16.2744C7.67839 16.2744 7.11804 16.4612 7.11804 15.5506V6.79506Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_990_1454">
                          <rect width="17.4041" height="17.4041" fill="white" transform="translate(0.220093 0.130005)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-[#442876]">Tyce Herrman</h4>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-64 h-80 rounded-lg overflow-hidden ">
                <Image
                  src="/images/leul.jpeg"
                  alt="Leul Tesfaye, CTO"
                  className="w-full h-full object-cover"
                  width={256}
                  height={320}
                />
              </div>
              <div className="absolute bottom-0 left-0 flex ">
                <div className="w-12 h-12 bg-secondary cursor-pointer hover:bg-orange-500 transition-all duration-300 flex items-center justify-center ">
                  <Link href="mailto:leul@ulama.tech" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M7.77429 13.495L10.1903 15.8999C10.3385 16.0517 10.5238 16.1623 10.7279 16.2207C10.932 16.279 11.1478 16.283 11.3539 16.2323C11.5614 16.1841 11.7529 16.0833 11.9101 15.9397C12.0673 15.796 12.1849 15.6145 12.2516 15.4122L16.2192 3.52067C16.3019 3.29786 16.319 3.05597 16.2684 2.82373C16.2177 2.59148 16.1015 2.37868 15.9333 2.2106C15.7653 2.04252 15.5525 1.92623 15.3202 1.87557C15.0881 1.8249 14.8461 1.84199 14.6233 1.92479L2.73174 5.89233C2.52255 5.96378 2.33625 6.08981 2.19207 6.25736C2.04789 6.42492 1.95108 6.62794 1.91163 6.84543C1.87091 7.04325 1.87998 7.24808 1.93801 7.44152C1.99604 7.63496 2.10123 7.81095 2.24411 7.95368L5.28072 10.9903L5.18097 14.836L7.77429 13.495Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.4638 2.33972L5.69067 10.4857" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
                <div className="w-12 h-12 bg-primary  flex items-center justify-center cursor-pointer hover:bg-violet-800 transition-all duration-300">
                  <Link href="https://www.linkedin.com/in/leul-tesfaye/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clipPath="url(#clip0_990_1454)">
                        <path d="M4.92296 2.45229C4.92613 2.86011 4.76873 3.25279 4.48476 3.54551C4.2008 3.83821 3.81307 4.00744 3.40536 4.01663C2.9985 4.0017 2.61293 3.83104 2.32831 3.53989C2.04371 3.24876 1.88181 2.85941 1.8761 2.45229C1.89379 2.05566 2.06162 1.68057 2.3456 1.4031C2.62957 1.12562 3.00843 0.966503 3.40536 0.958008C3.80115 0.966661 4.17867 1.12617 4.46075 1.40392C4.74283 1.68168 4.90818 2.05669 4.92296 2.45229ZM2.03953 6.79507C2.03953 5.89617 2.61155 6.03626 3.40536 6.03626C4.19919 6.03626 4.75953 5.89617 4.75953 6.79507V15.5507C4.75953 16.4613 4.18751 16.2745 3.40536 16.2745C2.62323 16.2745 2.03953 16.4613 2.03953 15.5507V6.79507Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.11804 6.79506C7.11804 6.29307 7.30482 6.10629 7.59667 6.04791C7.88851 5.98954 8.89246 6.04791 9.24267 6.04791C9.59289 6.04791 9.73297 6.61994 9.72131 7.05189C10.0209 6.64983 10.4186 6.33135 10.8764 6.12696C11.3343 5.92256 11.8369 5.83907 12.3362 5.88448C12.8266 5.8545 13.3177 5.92801 13.7778 6.10025C14.2378 6.27248 14.6565 6.53958 15.0067 6.88419C15.3567 7.2288 15.6304 7.64321 15.8099 8.1005C15.9894 8.55779 16.0707 9.04772 16.0485 9.53848V15.5157C16.0485 16.4262 15.4882 16.2394 14.6944 16.2394C13.9005 16.2394 13.3402 16.4262 13.3402 15.5157V10.846C13.3607 10.6056 13.3292 10.3637 13.248 10.1366C13.1667 9.9095 13.0376 9.70254 12.8693 9.52978C12.7009 9.35702 12.4974 9.22251 12.2725 9.13538C12.0476 9.04826 11.8065 9.01054 11.5658 9.02482C11.3261 9.01873 11.0879 9.06362 10.8669 9.15652C10.6459 9.24941 10.4471 9.38821 10.2838 9.56369C10.1204 9.73919 9.99622 9.94736 9.91938 10.1745C9.84255 10.4016 9.81482 10.6424 9.83804 10.881V15.5506C9.83804 16.4612 9.26602 16.2744 8.47221 16.2744C7.67839 16.2744 7.11804 16.4612 7.11804 15.5506V6.79506Z" stroke="white" strokeWidth="1.24315" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_990_1454">
                          <rect width="17.4041" height="17.4041" fill="white" transform="translate(0.220093 0.130005)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-[#442876]">Leul Tesfaye</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;
