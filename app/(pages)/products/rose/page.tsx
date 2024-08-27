import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Features3 from '~/components/widgets/Features3';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  contentRoseOne,
  faqsServices,
  heroServices,
  testimonialsServices,
  pricingHome,
  featuresRoseOne,
} from '~/shared/data/pages/products.rose.data';

export const metadata: Metadata = {
  title: 'Rose',
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Content {...contentRoseOne} />
      <Features3 {...featuresRoseOne} />
      {/* <Testimonials {...testimonialsServices} /> */}
      <Pricing {...pricingHome} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
