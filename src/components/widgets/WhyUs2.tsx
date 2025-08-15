'use client';
import { Clock, DollarSign, Receipt } from 'lucide-react';

const WhyUs2 = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#E6DCFF]">
      <div className="mx-auto max-w-7xl">
        <div className="flex md:flex-row flex-col gap-8 justify-between items-center">
          <div className="lg:col-span-2 bg-primary rounded-2xl p-8 sm:p-12 text-white max-w-xl">
            <div className="mb-6 flex gap-2 items-center">
              <span className="text-white font-semibold text-md ">Why us</span>
              <div className="w-16 h-[2px] bg-orange-400 "></div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Here's what Ulama can help you achieve
            </h2>

            <p className="text-lg sm:text-xl text-purple-100 leading-relaxed">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We're building Ulama to take the pain out of compliance—so you and your team can focus on designing great
              buildings and delivering better outcomes for your clients.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-center lg:text-left">
              <div className="flex  mb-4">
                <div className="p-3 rounded-full mr-1">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">3 Mos.</div>
                  <p className="text-lg text-gray-600 font-medium md:max-w-44">Average months saved on permitting</p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="flex  mb-4">
                <div className="p-3 rounded-full mr-1">
                  <Receipt className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">$750K+</div>
                  <p className="text-lg text-gray-600 font-medium md:max-w-44">Average project cost savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs2;
