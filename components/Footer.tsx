"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Github,
  Instagram,
  Youtube,
  ArrowUpRight,
  Mail,
  FileText,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import OrbitronText from "@/components/OrbitronText";
type FooterLink = {
  label: string;
  href: string;
  newTab?: boolean;
};

const socials = [
  { icon: <Youtube className="h-4 w-4" />, href: "https://www.youtube.com/channel/UC4JMOTgAy32O7BfJBDLREKQ", label: "YouTube" },
  { icon: <Instagram className="h-4 w-4" />, href: "https://instagram.com/makin_afleo", label: "Instagram" },
  { icon: <Github className="h-4 w-4" />, href: "https://github.com/makinafleo", label: "GitHub" },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks: Record<string, FooterLink[]> = {
    [t.footer.productsTitle]: [
      { label: t.footer.allProducts, href: "/products" },
      { label: t.footer.uavSystems, href: "/products?cat=UAV" },
      { label: t.footer.ugvSystems, href: "/products?cat=UGV" },
      { label: t.footer.iotSolutions, href: "/products?cat=IOT" },
    ],
    [t.footer.companyTitle]: [
      { label: t.footer.aboutUs, href: "/about" },
      { label: t.footer.governancePdf, href: "/docs/kurumsal-yonetisim", newTab: true },
      { label: t.footer.careers, href: "/contact" },
      { label: t.footer.contactUs, href: "/contact" },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/5 border border-neon-cyan/20">
                <Cpu className="h-4 w-4 text-neon-cyan" />
              </div>
              <span className="font-orbitron text-base font-bold tracking-[0.15em] text-white">
                <OrbitronText>MAKINA</OrbitronText><span className="text-neon-cyan"><OrbitronText>FLEO</OrbitronText></span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-gray-500 transition-colors hover:border-neon-cyan/20 hover:text-neon-cyan sm:h-9 sm:w-9"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {(Object.entries(footerLinks) as [string, FooterLink[]][]).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-orbitron text-xs uppercase tracking-[0.2em] text-gray-400"><OrbitronText>{title}</OrbitronText></h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.newTab ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-white"
                      >
                        <span className="inline-flex items-center gap-2">
                          <FileText className="h-3.5 w-3.5 text-gray-600 group-hover:text-neon-cyan transition-colors" />
                          {link.label}
                        </span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <Link href={link.href} className="group flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-white">
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MakinaFleo. {t.footer.copyright}
          </p>
          <a href="mailto:makinafleo@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-neon-cyan">
            <Mail className="h-3 w-3" />
            makinafleo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
