import { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';
import BIMRoses from '~/assets/images/bim_roses.jpg';

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
          <p>Your account is all set! Download Rose and get started.</p>
          <br />
          <p>
            Reach out to us at{' '}
            <a className="font-semibold" href="mailto:hello@ulama.tech">
              hello@ulama.tech
            </a>{' '}
            if you have any questions or concerns.
          </p>
          <br />
          <a className="btn btn-primary" href="https://ulama-releases.s3.amazonaws.com/ulama-rose-380019a.zip">
            Download Now
          </a>
        </>
      }
      image={{ src: BIMRoses, alt: 'A building composed of Roses' }}
    />
  );
}
