import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ptSans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tunahan Orhan",
    template: `%s - Tunahan Orhan`
  },
  description: "My personal website",
  icons: {
    icon: "../public/star.svg",
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ptSans.className}`}>
      <body>
        <main className="flex h-full animate-fade-in">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-background ring-1 ring-[#686D76]"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col overflow-y-auto">
            <Navbar />
            <main className="flex-auto">
              <div className="sm:px-8 my-8">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
