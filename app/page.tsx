import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import WhyUlama from '~/components/widgets/WhyUlama';
import FeatureCarousel from '~/components/widgets/FeatureCarousel';
import WhyUs2 from '~/components/widgets/WhyUs2';
import Buildings from '~/components/widgets/Buildings';
import Team from '~/components/widgets/Team';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero />
      <WhyUlama />
      <FeatureCarousel />
      <WhyUs2 />
      <Buildings />

      {/* <SocialProof {...socialProofHome} /> */}
      {/* <Features {...featuresHome} /> */}
      {/* <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} /> */}
      {/* <Pricing {...pricingHome} /> */}
      <Team />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
