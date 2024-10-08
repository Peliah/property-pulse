import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
