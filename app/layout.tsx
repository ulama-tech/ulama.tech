import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import { Lora, DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import '~/assets/styles/base.css';

import dynamic from 'next/dynamic';
import Footer2 from '~/components/widgets/Footer2';

const loraFont = Lora({ subsets: ['latin'], variable: '--font-lora' });
const dmSansFont = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const ibmPlexMonoFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-ibm-mono' });

const PostHogPageView = dynamic(() => import('../src/components/PostHogPageView'), {
  ssr: false,
});

const CookieConsentBanner = dynamic(() => import('../src/components/common/CookieConsentBanner'), { ssr: false });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${loraFont.variable} ${dmSansFont.variable} ${ibmPlexMonoFont.variable} font-dm-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        <Providers>
          <PostHogPageView />
          {/* <CookieConsentBanner />
          <Announcement />  */}
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
