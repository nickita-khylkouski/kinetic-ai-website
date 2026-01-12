import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kinetic AI | Autonomous Physical-Layer Defense",
  description: "The world's first autonomous reconnaissance engine. Persistent physical-layer defense for the modern enterprise.",
  keywords: ["cybersecurity", "network security", "autonomous defense", "penetration testing", "hardware security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
