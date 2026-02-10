"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Radar,
  Shield,
  Wifi,
  Cpu,
  Zap,
  Globe,
  Eye,
  Newspaper,
  Users,
  Sparkles,
} from "lucide-react";
import { products, news, l } from "@/data/products";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
/* ─── Animation Helpers ───────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

/* ─── Icons ───────────────────────────────────────────────── */
const catIcon: Record<string, React.ReactNode> = {
  UAV: <Radar className="h-4 w-4" />,
  UGV: <Shield className="h-4 w-4" />,
  IOT: <Wifi className="h-4 w-4" />,
};

const cardIcons = [
  <Eye key="eye" className="h-5 w-5" />,
  <Shield key="shield" className="h-5 w-5" />,
  <Globe key="globe" className="h-5 w-5" />,
  <Zap key="zap" className="h-5 w-5" />,
];

/* ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { t, lang } = useLanguage();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const featured = products.slice(0, 6);
  const uavCount = products.filter((p) => p.category === "UAV").length;
  const ugvCount = products.filter((p) => p.category === "UGV").length;
  const iotCount = products.filter((p) => p.category === "IOT").length;

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] sm:min-h-[100dvh] items-center justify-center overflow-hidden px-4 sm:px-6"
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[500px] w-[500px] rounded-full bg-neon-cyan/[0.04] blur-[140px]" />
          </div>
          <div className="absolute right-1/4 bottom-1/4">
            <div className="h-[350px] w-[350px] rounded-full bg-industrial-orange/[0.03] blur-[120px]" />
          </div>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center text-center">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400 sm:px-4 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-7 font-orbitron text-3xl font-black uppercase leading-[1.08] tracking-tight text-white text-balance sm:mt-8 sm:text-4xl md:text-6xl lg:text-7xl">
              <span className="glitch-text" data-text={t.hero.heading1}>{t.hero.heading1}</span>
              <br />
              <span className="bg-gradient-to-r from-neon-cyan via-cyan-300 to-white bg-clip-text text-transparent">
                {t.hero.heading2}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-lg">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-neon-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-16 flex flex-col items-center gap-2 sm:mt-24">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-5 rounded-full border border-white/10 p-1"
              >
                <div className="h-2 w-full rounded-full bg-white/20" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="relative z-10 border-y border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {[
            { value: `${products.length}`, label: t.stats.totalSystems, icon: <Cpu className="h-5 w-5" /> },
            { value: `${uavCount}`, label: t.stats.uavPlatform, icon: <Radar className="h-5 w-5" /> },
            { value: `${ugvCount}`, label: t.stats.ugvPlatform, icon: <Shield className="h-5 w-5" /> },
            { value: `${iotCount}`, label: t.stats.iotDevice, icon: <Wifi className="h-5 w-5" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease }}
              className="flex flex-col items-center gap-2 px-4 py-8 sm:px-6 sm:py-10"
            >
              <div className="text-neon-cyan/50">{stat.icon}</div>
              <span className="font-orbitron text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
                <Sparkles className="h-3.5 w-3.5" />
                {t.mission.label}
              </span>
              <h2 className="mt-4 font-orbitron text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
                {t.mission.heading}{" "}
                <span className="text-neon-cyan">{t.mission.headingHighlight}</span>{" "}
                {t.mission.headingEnd}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
                {t.mission.description}
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm text-neon-cyan transition-opacity hover:opacity-80"
              >
                {t.mission.moreInfo}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.mission.cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                  className="glass glass-hover rounded-2xl p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
                    {cardIcons[i]}
                  </div>
                  <h3 className="font-orbitron text-sm font-bold uppercase tracking-wider text-white">{card.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────── */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
                <Cpu className="h-3.5 w-3.5" />
                {t.featured.label}
              </span>
              <h2 className="mt-3 font-orbitron text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                {t.featured.heading} <span className="text-neon-cyan">{t.featured.headingHighlight}</span>
              </h2>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-neon-cyan">
              {t.featured.viewAll}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
              >
                <Link href="/products" className="block h-full">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={i < 2}
                        className="object-cover opacity-70 transition-all duration-500 group-hover:opacity-95 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-background/40 px-3 py-1 backdrop-blur-md">
                          <span className="text-white/70">{catIcon[product.category]}</span>
                          <span className="text-[10px] uppercase tracking-widest text-gray-300">
                            {t.categories[product.category]}
                          </span>
                        </div>
                      </div>
                      <div className="absolute left-3 top-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gray-400 backdrop-blur-md">
                          {catIcon[product.category]}
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-orbitron text-sm font-bold uppercase tracking-wider text-white">{product.name}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-gray-500 line-clamp-2">
                        {l(product.tagline, lang)}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider ${
                          product.status === "OPERATIONAL" ? "text-green-400" :
                          product.status === "PROTOTYPE" ? "text-industrial-orange" :
                          product.status === "DEVELOPMENT" ? "text-neon-cyan" : "text-gray-500"
                        }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${
                            product.status === "OPERATIONAL" ? "bg-green-400" :
                            product.status === "PROTOTYPE" ? "bg-industrial-orange" :
                            product.status === "DEVELOPMENT" ? "bg-neon-cyan" : "bg-gray-500"
                          }`} />
                          {t.statuses[product.status]}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-600">{product.version}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ──────────────────────────────────────────── */}
      <section className="relative z-10 py-16 sm:py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
              <Newspaper className="h-3.5 w-3.5" />
              {t.news.label}
            </span>
            <h2 className="mt-3 font-orbitron text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              {t.news.heading} <span className="text-neon-cyan">{t.news.headingHighlight}</span>
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <span className="font-orbitron text-[10px] uppercase tracking-wider text-neon-cyan/60">{item.date}</span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-white">{l(item.title, lang)}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{l(item.description, lang)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER CTA ────────────────────────────────────── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-7 text-center sm:p-16"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neon-cyan/[0.03] via-transparent to-industrial-orange/[0.03]" />
            <div className="relative">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] sm:mb-6 sm:h-14 sm:w-14">
                <Users className="h-6 w-6 text-neon-cyan" />
              </div>
              <h2 className="font-orbitron text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                {t.career.heading} <span className="text-neon-cyan">{t.career.headingHighlight}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-400">{t.career.description}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-neon-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t.career.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
