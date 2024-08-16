import { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';
import GasImage from '~/assets/images/gas.jpg';

export const metadata: Metadata = {
  title: 'Thanks!',
};

type PageProps = {
  searchParams: Record<string, string>;
};

export default function Page({ searchParams }: PageProps) {
  const { orderConfirmationId } = searchParams;

  return (
    <Hero2
      title={'Thanks for your order!'}
      subtitle={
        <>
          <p>We'll be in touch within 24 hours to onboard your account and get you up and running.</p>
          <br />
          <p>
            In the meantime, feel free to reach out to us at{' '}
            <a className="font-semibold" href="mailto:hello@ulama.tech">
              hello@ulama.tech
            </a>{' '}
            if you have any questions or concerns.
          </p>
        </>
      }
      image={{ src: GasImage, alt: 'Gas pump' }}
    />
  );
}
