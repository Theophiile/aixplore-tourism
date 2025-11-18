export const locales = ['fr', 'en'];
export const defaultLocale = 'fr';

export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/');
  const locale = segments[1];
  return locales.includes(locale) ? locale : defaultLocale;
}

