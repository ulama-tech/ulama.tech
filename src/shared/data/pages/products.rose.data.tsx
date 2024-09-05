import {
  AccessibilityIcon,
  BathIcon,
  ChevronsRightIcon,
  FlowerIcon,
  GlassWaterIcon,
  ParkingCircleIcon,
  TriangleRight,
} from 'lucide-react';

import {
  Stairs,
  Toilet,
  Urinal,
  Mirror,
  ClimbStairsUser,
  BalanceBeam,
} from '@vectopus/atlas-icons-react'

import {
  CallToActionProps,
  FeaturesProps,
  ContentProps,
  FAQsProps,
  HeroProps,
  PricingProps,
  TestimonialsProps,
} from '~/shared/types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';

const BUY_NOW_URL = 'https://buy.stripe.com/7sI7vu4kn5VzbCw7ss';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: (
    <div className="flex items-center justify-center gap-2">
      Introducing Rose <FlowerIcon className="h-10 w-10" />
    </div>
  ),
  subtitle: 'A Revit family by any other name.',
  callToAction: {
    text: 'Buy Now',
    href: BUY_NOW_URL,
  },
};

// Content data on Services page *******************
export const contentRoseOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'Missing or inconsistent classification data? With Rose, updating your Revit model is a snap. Rose uses a multimodal AI model to evaluate your Revit families and family instances, updating them with a new normalized name parameter.  With consistently named elements, unlock:',
  items: [
    {
      title: 'Accurate and easy quantity and material takeoff',
    },
    {
      title: 'Improved schedules and reporting',
    },
    {
      title: 'Easily accessible BIM data content, organized by normalized name',
    },
    {
      title: 'Model visualizations with element classification filters',
    },
  ],
  media: (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        src="https://www.tella.tv/video/cm0pps4ow000303jl7tu52paz/embed?b=0&title=0&a=0&loop=0&t=0&muted=0&wt=0"
        allowFullScreen
        allowTransparency
      >
        <a href="https://www.tella.tv/video/cm0pps4ow000303jl7tu52paz/view">
          Watch Ulama Rose demo
        </a>
      </iframe>
    </div>
  ),
  isReversed: true,
  isAfterContent: false,
};

export const featuresRoseOne: FeaturesProps = {
  header: {
    title: 'Supported Family Types',
    subtitle:
      "Additional families are coming soon. Email us at hello@ulama.tech with the families you'd like to see next!",
  },
  columns: 3,
  items: [
    { title: 'Parking stalls', icon: ParkingCircleIcon },
    { title: 'Ramps', icon: TriangleRight },
    { title: 'Stairs', icon: Stairs },
    { title: 'Stair handrails', icon: ClimbStairsUser },
    { title: 'Drinking fountains', icon: GlassWaterIcon },
    { title: 'Toilets', icon: Toilet },
    { title: 'Urinals', icon: Urinal },
    { title: 'Mirrors', icon: Mirror },
    { title: 'Bathroom grab bars', icon: BalanceBeam },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

export const pricingHome: PricingProps = {
  id: 'pricing-on-rose',
  hasBackground: true,
  header: {
    title: 'One simple price for early adopters'
  },
  prices: [
    {
      title: 'standard',
      price: 5,
      period: 'per month',
      // items: [
      //   {
      //     description: 'Proin vel laoreet',
      //   },
      //   {
      //     description: 'Ut efficitur egestas',
      //   },
      //   {
      //     description: 'Pellentesque ut nibh',
      //   },
      //   {
      //     description: 'Donec fringilla sem',
      //   },
      // ],
      callToAction: {
        text: 'Free 15-day trial',
        href: BUY_NOW_URL,
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
  ],
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
  },
  columns: 1,
  items: [
    {
      title: 'How does Rose work?',
      description: `Rose uses a multimodal AI model that looks at each Revit family and family instance, updating each with a standardized name in a custom parameter. Unlike other approaches, Rose uses computer vision to understand elements just like you would.`,
      icon: ChevronsRightIcon,
    },
    {
      title: 'How do you use my data?',
      description: `Only the minimum required Revit model data is used to generate normalized names. We do not store any of your data at any point or transmit your Revit models. The limited project data we do evaluate with AI is not used for any training purposes.`,
      icon: ChevronsRightIcon,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  callToAction: {
    text: 'Drop us a line!',
    href: 'mailto:hello@ulama.tech',
  },
};
