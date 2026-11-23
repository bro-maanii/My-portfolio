import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import PointerSpotlight from "@/components/pointer-spotlight";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
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
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <PointerSpotlight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
