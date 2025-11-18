import Sidebar from '@/components/Sidebar';
import { locales } from '@/lib/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  return (
    <div className="flex min-h-screen">
      <Sidebar locale={locale} />
      <main className="flex-1 lg:ml-64 w-full">
        {children}
      </main>
    </div>
  );
}

