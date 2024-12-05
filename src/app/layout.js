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
  weight: "100 900"
});


const dynamicTitle = "Yoto";
const dynamicDescription = "Start recruiting with one prompt";

// export const metadata = {
//   title: dynamicTitle,
//   description: dynamicDescription,
//   openGraph: {
//     title: dynamicTitle,
//     description: dynamicDescription,
//     type: "website",
//     locale: "en_US",
//     url: "https://nextjspreview.netlify.app",
//     images: [
//       {
//         url: "https://nextjspreview.netlify.app/previewLinkImage.svg",
//         alt: "Yoto",
//       },
//     ],
//   },
// };

const hostname = "https://nextjspreview.netlify.app";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          <title>Yoto</title>
          <meta property="og:title" content={'Yoto'} />
          <meta name="description" content="Start recruiting with one prompt" />
          <meta property="og:description" content="Start recruiting with one prompt" />
          <meta property="og:image" content={"https://nextjspreview.netlify.app/previewLinkImage.png"} />
          <meta
            property="og:url"
            content={hostname}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content={'Yoto Image'} />
        </head>

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
