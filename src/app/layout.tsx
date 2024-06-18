import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
            {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
