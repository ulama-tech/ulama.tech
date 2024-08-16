import { Metadata } from 'next';
import CallToAction from '~/components/widgets/CallToAction';
import Content from '~/components/widgets/Content';
import FAQs from '~/components/widgets/FAQs';
import Hero from '~/components/widgets/Hero';
import Pricing from '~/components/widgets/Pricing';
import Testimonials from '~/components/widgets/Testimonials';
import {
  callToActionServices,
  contentServicesOne,
  faqsServices,
  heroServices,
  testimonialsServices,
  pricingHome,
} from '~/shared/data/pages/products.rose.data';

export const metadata: Metadata = {
  title: 'Rose',
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Content {...contentServicesOne} />
      <Testimonials {...testimonialsServices} />
      <Pricing {...pricingHome} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
