// export const runtime = "edge"; // 'nodejs' (default) | 'edge'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/styles/globals.css";
import RootProvider from "@/shared/components/providers/RootProvider";
import { Toaster } from "@/shared/components/ui/sonner";
import { ViewTransitions } from "next-view-transitions";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignix App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="pt-br"
        suppressHydrationWarning
      >
        <body className={`${inter.className} bg-background`}>
          <Toaster />
          <RootProvider>{children}</RootProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
