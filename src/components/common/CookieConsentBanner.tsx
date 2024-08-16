'use client';
import { useCookieConsent } from '~/hooks/useCookieConsent';

export default function CookieConsentBanner() {
  const [consentState, setConsentState] = useCookieConsent();

  return (
    <>
      {consentState === null && (
        <div className="flex p-2 gap-1 items-center bg-orange-200 justify-between">
          <p>
            We use tracking cookies to understand how you use our website and help us improve it. Please accept cookies
            to help us out!
          </p>
          <div className="flex gap-1">
            <button className="btn btn-primary p-1" type="button" onClick={() => setConsentState(true)}>
              Accept cookies
            </button>
            <button type="button" className="btn btn-secondary p-1" onClick={() => setConsentState(false)}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
