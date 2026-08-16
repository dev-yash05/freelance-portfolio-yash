import type { Metadata } from "next";
import { Merriweather, Raleway } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorDot from "@/components/CursorDot";
import Script from "next/script";

// Pairing 5: Raleway gives headlines a refined, contemporary voice,
// while Merriweather brings confident editorial readability to the copy.
const displayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const bodyFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Yash — Independent Web Developer",
  description:
    "I design and develop premium, fast, mobile-first websites for businesses, startups and personal brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <Script type="text/javascript" id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "y34a6l5h7h");`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <CursorDot />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
