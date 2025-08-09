
import Image from 'next/image';
import bgNet from '~/assets/images/bg-net.svg';
import heroImage1 from '~/assets/images/hero-image-1-u.png';
import heroImage2 from '~/assets/images/hero-image-2-u.png';

const Hero = () => {
  return (
    <section id="heroOne" className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src={bgNet}
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto px-8 lg:px-0 lg:pl-24 py-12 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left">
            <h1 className="font-dm-sans text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-semibold text-primary-text-white leading-tight">
              Code compliance at the{' '}
              <span className="text-[#2DE1C2]">speed of design</span>
            </h1>

            <p className="mt-6 text-md sm:text-lg text-white/80 font-dm-sans leading-none max-w-lg">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              With Ulama's AI-powered, lightning-fast compliance checks,
              designs are approved in record time, and permits are issued
              3 months faster on average.
            </p>

            <div className="mt-8">
              <button className="bg-secondary text-white font-medium py-2 px-8 rounded-md hover:bg-orange-500 transition-all duration-200 ease-in-out whitespace-nowrap shadow-orange-glow w-full md:w-auto">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative h-[32rem]">
              <div className="absolute top-0 right-0 h-[25rem] w-[28rem] ">
                <Image
                  src={heroImage1}
                  alt="Code compliance interface"
                  fill
                  className="object-contain rounded-lg "
                />
              </div>

              <div className="absolute top-10 right-30 2xl:right-72 w-80 h-[30rem]  ">
                <Image
                  src={heroImage2}
                  alt="Design approval dashboard"
                  fill
                  className="object-contain rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-12 relative">
          <div className="relative h-80 mx-auto max-w-sm">
            <div className="absolute top-0 right-0 h-60 w-64">
              <Image
                src={heroImage1}
                alt="Code compliance interface"
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="absolute top-8 left-0 w-56 h-72">
              <Image
                src={heroImage2}
                alt="Design approval dashboard"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
