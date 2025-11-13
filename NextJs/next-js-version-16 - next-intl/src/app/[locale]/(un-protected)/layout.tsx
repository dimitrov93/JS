import { routing } from '@/src/i18n/routing';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

// export default function UnprotectedLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <h1>unprotected layout</h1>
//       {children}
//     </>
//   );
// }

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang={'en'}>
      <head></head>
      <body>
        <h1>unprotected layout</h1>
        {children}
      </body>
    </html>
  );
}
