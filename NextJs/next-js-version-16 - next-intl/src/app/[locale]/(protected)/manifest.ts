import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lupy Games',
    short_name: 'Lupy',
    description: 'Play games online',
    start_url: '/',
    scope: '/',
    orientation: 'any',
    display: 'fullscreen',
    theme_color: '#091d6c',
    background_color: '#00030b',
    icons: [
      {
        src: 'images/pwa-icons/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-168x168.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'images/pwa-icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-300x30.png',
        sizes: '300x300',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'images/pwa-icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: 'images/avatars/av1.jpg',
        sizes: '1024x1024',
        type: 'image/jpg',
        form_factor: 'wide',
      },
      {
        src: 'images/avatars/av2.jpg',
        sizes: '1024x1024',
        type: 'image/jpg',
        form_factor: 'wide',
      },
      {
        src: 'images/avatars/av3.jpg',
        sizes: '1024x1024',
        type: 'image/jpg',
        form_factor: 'wide',
      },
      {
        src: 'images/avatars/av4.jpg',
        sizes: '1024x1024',
        type: 'image/jpg',
      },
    ],
  };
}
