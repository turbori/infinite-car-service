import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinite Car Service | Luxury Airport Transfers & Hourly Chauffeur",
  description: "Premier black car service for NYC, Long Island, Westchester, and CT. Reliable airport transfers to JFK, LGA, EWR, and HPN. Book your luxury ride today.",
  keywords: "car service, luxury chauffeur, airport transfers, JFK, LGA, EWR, Westchester, Long Island, corporate travel, hourly service",
  openGraph: {
    type: "website",
    url: "https://www.infinitecarserviceli.com/",
    title: "Infinite Car Service | Luxury Airport Transfers & Hourly Chauffeur",
    description: "Premier black car service for NYC, Long Island, Westchester, and CT. Reliable airport transfers to JFK, LGA, EWR, and HPN.",
    images: [
      {
        url: "https://www.infinitecarserviceli.com/assets/images/hero-chauffeur-escalade.jpg",
        width: 1200,
        height: 630,
        alt: "Infinite Car Service Luxury SUV",
      },
    ],
    siteName: "Infinite Car Service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Car Service | Luxury Airport Transfers & Hourly Chauffeur",
    description: "Premier black car service for NYC, Long Island, Westchester, and CT.",
    images: ["https://www.infinitecarserviceli.com/assets/images/hero-chauffeur-escalade.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PM8WJ6W6');
            `,
          }}
        />
        {/* Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16458132086"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16458132086');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sq97soo10r");
            `,
          }}
        />
        {/* Conversion Tracking Helper */}
        <Script
          id="conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-16458132086/GjzbCImHmbEbEPbU7Kc9',
                    'value': 340.0,
                    'currency': 'USD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PM8WJ6W6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
