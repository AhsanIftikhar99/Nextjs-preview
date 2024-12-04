import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const dynamicTitle = "Yoto";
const dynamicDescription = "Start recruiting with one prompt";

export const metadata = {
  title: dynamicTitle,
  description: dynamicDescription,
  openGraph: {
    title: dynamicTitle,
    description: dynamicDescription,
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yoto.ai/",
    images: [
      {
        url: "/previewLinkImage.svg",
        alt: "Yoto",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
