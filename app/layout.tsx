import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eman Ali Abbasi — Software Engineer & Full-Stack Developer",
  description:
    "Software Engineer with hands-on experience building production-grade platforms. Specializing in React.js, Next.js, TypeScript, and full-stack MERN development. Currently at SOCByte, Karachi.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MERN Stack",
    "Frontend Developer",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Eman Ali Abbasi" }],
  creator: "Eman Ali Abbasi",
  openGraph: {
    type: "website",
    url: "https://emanaliabbasisoftwareengineer.me",
    title: "Eman Ali Abbasi — Software Engineer & Full-Stack Developer",
    description:
      "Software Engineer specializing in React.js, Next.js, TypeScript, and full-stack development. Building production-grade platforms at SOCByte.",
    siteName: "Eman Ali Abbasi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eman Ali Abbasi — Software Engineer",
    description:
      "Software Engineer specializing in React.js, Next.js, TypeScript, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
