import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emanaliabbasi.vercel.app"),
  title: "Eman Ali Abbasi — Software Engineer & Full-Stack Developer",
  description:
    "Software Engineer in Karachi building AI-powered SaaS and full-stack web apps with React, Next.js, TypeScript and Node.js. Explore my projects and CV.",
  alternates: {
    canonical: "/",
  },
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
    url: "/",
    title: "Eman Ali Abbasi — Software Engineer & Full-Stack Developer",
    description:
      "Full-stack engineer building AI-powered SaaS and web apps people enjoy using. React, Next.js, TypeScript and Node.js. Currently at SOCByte, Karachi.",
    siteName: "Eman Ali Abbasi Portfolio",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Eman Ali Abbasi — Full-stack engineer building products people enjoy using, shown beside Career Pipeline, DiaCare and OFFRAIL project screenshots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eman Ali Abbasi — Software Engineer",
    description:
      "Software Engineer building AI-powered SaaS and full-stack web apps with React, Next.js, TypeScript and Node.js. See my projects, experience and CV.",
    images: ["/og-image.png?v=2"],
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
        className={`${syne.variable} ${dmSans.variable} antialiased`}
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
