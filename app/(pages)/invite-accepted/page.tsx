import type { Metadata } from 'next';
import FAQs from '~/components/widgets/FAQs';
import Hero from '~/components/widgets/Hero';
import { FAQsProps } from '~/shared/types';

export const metadata: Metadata = {
  title: "You're in!",
};

const Page = () => {
  const subtitleElem = (
    <>
      You&apos;ve accepted your invite and your account is now fully created. You can now login to your account through
      the Revit Plugin.
      <br />
      <br />
      We&apos;re thrilled to have you!
    </>
  );

  const faqProps: FAQsProps = {
    header: {
      title: 'Frequently Asked Questions',
    },
    items: [
      {
        title: "I don't have a build of the Ulama Revit Plugin.",
        description: (
          <>
            Ulama is currently in a closed alpha, and so we don&apos;t distribute public links to download the
            installer. If you don&apos;t already have access to a build of the app, reach out to{' '}
            <a href="mailto:hello@ulama.tech">hello@ulama.tech</a> or whoever you last spoke to with us and we&apos;ll
            help you out.
          </>
        ),
      },
      {
        title: 'What versions of Revit do you currently support?',
        description: (
          <>
            We strive to support all versions of Revit that our customers use, within reason. Currently we support Revit
            2021, 2022, 2023, 2024, and 2025. If you need an additional version supported, reach to us at{' '}
            <a href="mailto:hello@ulama.tech">hello@ulama.tech</a>.
          </>
        ),
      },
    ],
  };

  return (
    <>
      <Hero title="You're in!" subtitle={subtitleElem} />
      <FAQs {...faqProps} />
    </>
  );
};

export default Page;
