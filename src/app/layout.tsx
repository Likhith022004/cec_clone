import type { Metadata } from "next";
import { Alfa_Slab_One, Inter, Roboto, Work_Sans } from "next/font/google";
import { Web3FormsContact } from "@/components/Web3FormsContact";
import { VoiceflowChat } from "@/components/VoiceflowChat";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  display: "swap",
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us | City Engineering College",
  description:
    "Welcome To City Engineering College, Bengaluru City Engineering College (CEC), established under Jayanagar Education Society by Dr K.R Paramahamsa, Chairman in the year 2001.",
  icons: {
    icon: "/sites/city-engineering-college/cropped-favi-eng-20-32x32.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${workSans.variable} ${alfaSlabOne.variable} ${roboto.variable} h-full antialiased`
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Web3FormsContact />
        <VoiceflowChat />
      </body>
    </html>
  );
}
