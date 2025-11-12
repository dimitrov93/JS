import Header from '@/components/header';
import './globals.css';
import { MetaTags } from './lib/MetaTags';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MetaTags />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
