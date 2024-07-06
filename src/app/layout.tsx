import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Header } from "@/components/header/Header";
import { Providers } from "./Providers";
import localFont from 'next/font/local'

const sanFrancisco = localFont({
  src: [
    {
      path: '../../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700'
    }
  ],
  variable: '--font-sanFrancisco'
})

export const metadata: Metadata = {
  title: "devtoolbelt",
  description: "all the tools you would ever need",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${sanFrancisco.variable} font-sans`} suppressHydrationWarning>
      <body className={`bg-background h-screen min-h-screen max-h-screen`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
