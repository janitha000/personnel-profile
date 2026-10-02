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
                <span className="gradient-text">&lt;JT /&gt;</span>
              </Link>
              <nav className={styles.nav}>
                <Link href="#about" className={styles.navLink}>About</Link>
                <Link href="#pillars" className={styles.navLink}>Focus</Link>
                <Link href="#experience" className={styles.navLink}>Experience</Link>
                <Link href="#projects" className={styles.navLink}>Projects</Link>
                <Link href="#articles" className={styles.navLink}>Articles</Link>
                <Link href="#contact" className={styles.navLink}>Contact</Link>
                <div className={styles.navActions}>
                  <Link href="#contact" className={`btn btn-primary ${styles.contactBtn}`}>
                    Let's Talk
                  </Link>
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </header>
          <main className={styles.mainContent}>
            {children}
          </main>
          <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
              <div className={styles.footerTop}>
                <div className={styles.footerBrand}>
                  <span className={styles.footerName}>Janitha Tennakoon</span>
                  <span className={styles.footerTagline}>Fullstack Software Engineer & Technical Lead · Sri Lanka</span>
                </div>
                <div className={styles.socialLinks}>
                  <a href="https://github.com/janitha000" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                  <a href="https://www.linkedin.com/in/janithatennakoon/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                  <a href="https://medium.com/@janitha000" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Medium</a>
                </div>
              </div>
              <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Janitha Tennakoon. All rights reserved.</p>
                <p className="mono-tag">Built with Next.js 16, React 19, TypeScript &amp; Framer Motion</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
