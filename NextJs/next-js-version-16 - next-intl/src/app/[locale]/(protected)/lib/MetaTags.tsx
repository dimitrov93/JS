import React from "react";

export const MetaTags = () => {
  const splashScreens = [
    {
      href: "images/splash/launch-640x1136.png",
      media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-750x1294.png",
      media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-1242x2148.png",
      media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-1125x2436.png",
      media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-1536x2048.png",
      media: "(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-1668x2224.png",
      media: "(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
    },
    {
      href: "images/splash/launch-2048x2732.png",
      media: "(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)",
    },
  ];

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#091d6c" />


      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Lupy games" />


      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

      {splashScreens.map((screen, index) => (
        <link
          key={index}
          rel="apple-touch-startup-image"
          href={screen.href}
          media={screen.media}
        />
      ))}
    </>
  );
};
