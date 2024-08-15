'use client';

import { ThemeProvider } from 'next-themes';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';
import { useCookieConsent } from '~/utils/cookie';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

function PHProvider({ children }: { children: React.ReactNode }) {
  // We use this here to trigger the side effects of using this hook.
  const [consentState] = useCookieConsent();

  // Handle consent changes
  useEffect(() => {
    if (consentState !== null) {
      const persistence = consentState ? 'localStorage+cookie' : 'memory';
      posthog.set_config({ persistence });
    }
  }, [consentState]);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <PHProvider>
    <ThemeProvider attribute="class" disableTransitionOnChange enableSystem={false}>
      {children}
    </ThemeProvider>
  </PHProvider>
);

export default Providers;
