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
