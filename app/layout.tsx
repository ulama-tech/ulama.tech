import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Lora } from 'next/font/google';
import '~/assets/styles/base.css';

import dynamic from 'next/dynamic';

const loraFont = Lora({ subsets: ['latin'], variable: '--font-lora' });

const PostHogPageView = dynamic(() => import('../src/components/PostHogPageView'), {
  ssr: false,
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${loraFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        <Providers>
          <PostHogPageView />
          {/* <Announcement /> */}
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
