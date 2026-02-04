// @ts-ignore
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar/nav-bar";
import { inter, poppins } from "@/lib/font";
import { metadata } from "@/lib/metadata";
import ScrollToTop from "@/components/scroll-to-top";
import { ViewTransitions } from "next-view-transitions";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.variable} ${poppins.variable} mx-auto max-w-4xl antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* navbar for the site */}
            <NavBar />
            <ScrollToTop />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
