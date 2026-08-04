import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import styles from "./layout.module.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Janitha Tennakoon | Fullstack Software Engineer / Tech Lead",
  description: "Engineering Lead & Senior Full-Stack Engineer with extensive experience building scalable web applications and guiding technical teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
              <Link href="/" className={styles.logo}>
                <span className="gradient-text">JT</span>
              </Link>
              <nav className={styles.nav}>
                <Link href="#about" className={styles.navLink}>About</Link>
                <Link href="#experience" className={styles.navLink}>Experience</Link>
                <Link href="#projects" className={styles.navLink}>Projects</Link>
                <Link href="#articles" className={styles.navLink}>Articles</Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className={styles.mainContent}>
            {children}
          </main>
          <footer className={styles.footer}>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Janitha Tennakoon. All rights reserved.</p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/janitha000" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/janithatennakoon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.janithatennakoon.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
