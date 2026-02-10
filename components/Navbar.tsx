"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import OrbitronText from "@/components/OrbitronText";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { t, lang, toggleLang } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-strong shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-transparent"
      } pt-[env(safe-area-inset-top)]`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/5 border border-neon-cyan/20 sm:h-9 sm:w-9"
          >
            <Cpu className="h-4 w-4 text-neon-cyan" />
          </motion.div>
          <span className="font-orbitron text-sm font-bold tracking-[0.15em] text-white sm:text-base">
            <OrbitronText>MAKINA</OrbitronText><span className="text-neon-cyan"><OrbitronText>FLEO</OrbitronText></span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative px-4 py-2 text-sm transition-colors duration-300">
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-white font-medium" : "text-gray-400 hover:text-white"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Right: Lang Toggle + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium overflow-hidden"
          >
            <span className={`px-3 py-1.5 transition-colors ${lang === "tr" ? "bg-neon-cyan/15 text-neon-cyan" : "text-gray-500 hover:text-white"}`}>
              TR
            </span>
            <span className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-neon-cyan/15 text-neon-cyan" : "text-gray-500 hover:text-white"}`}>
              EN
            </span>
          </button>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="rounded-full bg-neon-cyan/10 border border-neon-cyan/20 px-5 py-2 text-sm font-medium text-neon-cyan transition-all duration-300 hover:bg-neon-cyan/15 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
            >
              {t.nav.cta}
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Lang Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center rounded-lg border border-white/10 bg-white/5 text-[11px] font-medium overflow-hidden"
          >
            <span className={`px-2 py-1.5 transition-colors ${lang === "tr" ? "bg-neon-cyan/15 text-neon-cyan" : "text-gray-500"}`}>
              TR
            </span>
            <span className={`px-2 py-1.5 transition-colors ${lang === "en" ? "bg-neon-cyan/15 text-neon-cyan" : "text-gray-500"}`}>
              EN
            </span>
          </button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-sm transition-colors ${
                      pathname === link.href
                        ? "bg-neon-cyan/10 text-neon-cyan font-medium"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
