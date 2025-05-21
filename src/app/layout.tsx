import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserInfo } from "@/components/user-info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasra Dashboard",
  description: "A simple dashboard built with Next.js and Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <header className="border-b">
              <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
                <nav className="flex items-center space-x-4 lg:space-x-6">
                  <Link
                    href="/"
                    className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                  >
                    Settings
                  </Link>
                </nav>
                <div className="flex items-center gap-4">
                  <UserInfo />
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-6">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
