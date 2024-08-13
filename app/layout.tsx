import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-spaceGrotesk",
});
import "./globals.css";
export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevFlow is a platform for developers to share their knowledge and learn from others.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerActionLink: 'primary-gradient hover:text-primary-500'
      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`} >
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
