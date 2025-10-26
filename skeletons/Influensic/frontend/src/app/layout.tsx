import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Provider } from "react-redux";
import { store } from './store/store';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Influensic',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <Script src="lodash.js"></Script>
                <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
