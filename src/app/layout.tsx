import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, SideBar } from "../components";
import { StreamVideoProvider } from "../providers/StreamClientProvider";
import { Toaster } from "../components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video call",
  description: "Connecting people together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout:{
            logoImageUrl: "/images/logo.svg"
          }
        }}
      >
        <body className={`${inter.className} relative`}>
          <StreamVideoProvider>
          <main className="relative">
            <NavBar />
            <div className="flex">
              <SideBar />
              <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 bg-slate-200">
                <div className="w-full">
                  {children}
                </div>
              </section>
            </div>
          </main>

          <Toaster />
          </StreamVideoProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
