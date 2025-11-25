import './globals.css';
import { Playfair_Display, Montserrat } from 'next/font/google';
import BrowserExtensionFix from '@/components/BrowserExtensionFix';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Aixplore Tourism - Découvrez les Alpes autrement',
  description: 'Explorez la beauté des Alpes françaises à travers nos visites guidées, retraites bien-être et activités nature en famille.',
  keywords: 'tourisme, alpes, visites guidées, retraites bien-être, nature, famille',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <BrowserExtensionFix />
        {children}
      </body>
    </html>
  );
}
