import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";

// new code 

import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Play } from 'lucide-react'
import Footer from "./footer/page";

const inter = Inter({ subsets: ['latin'] })

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

export const metadata = {
  title: "Narrato - AI-Powered Storytelling",
  description: "Narrato is an AI-powered storytelling app that analyzes user mood and generates personalized video narratives based on their input.",
   keywords: ["AI storytelling", "mental health analysis", "AI-generated videos", "personalized storytelling", "Narrato app","Narrato","Narrato Ehshan"],
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

      {/* new code  */}     

      <body className={`${inter.className} bg-black text-gray-200 min-h-screen flex flex-col`}>
        <header className="bg-[#0F1729] border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Play className="h-6 w-6 text-[#8A89FF]" />
              <span className="text-xl font-bold text-[#8A89FF]">Narrato</span>
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-[#8A89FF] transition-colors">Home</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#8A89FF] transition-colors">Dashboard</Link></li>
              <li><Link href="/features" className="hover:text-[#8A89FF] transition-colors">Features</Link></li>
              <li><Link href="/feedback" className="hover:text-[#8A89FF] transition-colors">Feedback</Link></li>
              <li><Link href="/blog" className="hover:text-[#8A89FF] transition-colors">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        {/* <Footer/> */}
        <footer className="bg-[#0F1729] border-t border-gray-800 text-gray-400 py-4">
          <div className="container mx-auto px-4 text-center">
            © 2025 AI Narrato. All rights reserved.
          </div>
        </footer>
      </body>


      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body> */}
    </html>
    </ClerkProvider>
  );
}
