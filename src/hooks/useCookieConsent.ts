import { useLocalStorage } from 'usehooks-ts';

type CookieConsentState = true | false | null;

export function useCookieConsent() {
  return useLocalStorage<CookieConsentState>('cookie_consent', null);
}
