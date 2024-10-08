import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon, ChevronDownIcon, MailIcon, RssIcon } from 'lucide-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Announcing Rose, the easiest way to standardize names in your Revit models. »',
    href: '/products/rose',
    targetBlank: false,
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: ChevronDownIcon,
    //   links: [
    //     {
    //       label: 'Services',
    //       href: '/services',
    //     },
    //     {
    //       label: 'Pricing',
    //       href: '/pricing',
    //     },
    //     {
    //       label: 'About us',
    //       href: '/about',
    //     },
    //     {
    //       label: 'Contact us',
    //       href: '/contact',
    //     },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //   ],
    // },
    {
      label: 'Products',
      icon: ChevronDownIcon,
      links: [{ label: 'Rose', href: '/products/rose' }],
    },
    {
      label: 'Blog',
      href: 'https://blog.ulama.tech/',
    },
    // {
    //   label: 'Contact',
    //   href: '/contact',
    // },
  ],
  actions: [
    {
      text: 'Join the waitlist',
      href: 'https://blog.ulama.tech/forms/c1440e5e-9f8a-435f-88d9-fce0d098cf6d',
      icon: MailIcon,
      targetBlank: false,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: TwitterIcon, href: '#' },
    { label: 'Instagram', icon: InstagramIcon, href: '#' },
    { label: 'Facebook', icon: FacebookIcon, href: '#' },
    { label: 'RSS', icon: RssIcon, href: '#' },
    { label: 'Github', icon: GithubIcon, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms of Service',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['370 Jay St, 7th Fl', 'Brooklyn, NY 11201'],
    },
    {
      title: 'Phone',
      texts: ['+1 (646) 933-8961'],
    },
    {
      title: 'Email',
      texts: ['hello@ulama.tech'],
    },
  ],
  socials: [
    // { label: 'Twitter', icon: TwitterIcon, href: '#' },
    // { label: 'Instagram', icon: InstagramIcon, href: '#' },
    // { label: 'Facebook', icon: FacebookIcon, href: '#' },
    // { label: 'RSS', icon: RssIcon, href: '#' },
    // { label: 'Github', icon: GithubIcon, href: 'https://github.com/ulama-tech' },
  ],
};
