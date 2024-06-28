import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans= Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display:"swap",
  variable:"--font-kumbha-sans",
});



export const metadata = {
  title: "Devops",
  description: "Find your dream developer job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body classname={`${kumbhSans.variable}`}>{children}</body>
    </html>
  );
}
