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
      Your account is active, and you can now log in within the plugin.
      <br />
      <br />
      We&apos;re thrilled to have you, and thanks for your help!
    </>
  );

  const faqProps: FAQsProps = {
    header: {
      title: 'Frequently Asked Questions',
    },
    items: [
      {
        title: "Hold up, I don't actually have the plugin!",
        description: (
          <>
            We&apos;re currently in a private alpha, so we don&apos;t distribute public links to download the installer.
            Reach out to <a href="mailto:hello@ulama.tech">hello@ulama.tech</a> (or{' '}
            <a href="mailto:max@ulama.tech">Max</a> or <a href="mailto:tyce@ulama.tech">Tyce</a>) and we&apos;ll help
            you out.
          </>
        ),
      },
      {
        title: 'What versions of Revit do you support?',
        description: (
          <>
            We currently support Revit 2021-2025. If you need an additional version supported,{' '}
            <a href="mailto:hello@ulama.tech">let us know</a>.
          </>
        ),
      },
    ],
  };

  return (
    <>
      <Hero title="You're in! 🥳" subtitle={subtitleElem} />
      <FAQs {...faqProps} />
    </>
  );
};

export default Page;
