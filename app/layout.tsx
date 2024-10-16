import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";


export const metadata: Metadata = {
  title: "Property Pulse | The perfect rental",
  description: "This is a real estate demo application!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
