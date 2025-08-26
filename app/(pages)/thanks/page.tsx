import { Metadata } from 'next';
import Hero2 from '~/components/widgets/Hero2';

export const metadata: Metadata = {
  title: 'Thanks!',
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const { orderConfirmationId } = params;

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
      image={{ src: '/images/bim_roses.jpg', alt: 'A building composed of Roses' }}
    />
  );
}
