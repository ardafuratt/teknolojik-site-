"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, FileText, Lightbulb, Target,
  ShieldCheck, Leaf, Handshake, Rocket, Users, Award, Cpu,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
const ease = [0.16, 1, 0.3, 1] as const;

const valueIcons = [
  <Lightbulb key="lb" className="h-5 w-5" />,
  <Award key="aw" className="h-5 w-5" />,
  <Leaf key="le" className="h-5 w-5" />,
  <Handshake key="hs" className="h-5 w-5" />,
];

const whyUsIcons = [
  <Rocket key="ro" className="h-5 w-5" />,
  <Target key="ta" className="h-5 w-5" />,
  <Users key="us" className="h-5 w-5" />,
  <ShieldCheck key="sc" className="h-5 w-5" />,
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative z-10 pt-24 pb-14 sm:pt-32 md:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
            <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-neon-cyan">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t.aboutPage.back}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
              <Cpu className="h-3.5 w-3.5" />
              {t.aboutPage.label}
            </span>
            <h1 className="mt-3 font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.aboutPage.heading}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="glass rounded-3xl p-6 sm:p-12 lg:p-16"
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-orbitron text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                  {t.aboutPage.whoWeAre} <span className="text-neon-cyan">{t.aboutPage.whoWeAreHighlight}</span>
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-400">{t.aboutPage.whoWeAreP1}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{t.aboutPage.whoWeAreP2}</p>
              </div>
              <div>
                <h2 className="font-orbitron text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                  {t.aboutPage.missionVision} <span className="text-neon-cyan">{t.aboutPage.missionVisionHighlight}</span>
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-gray-400">{t.aboutPage.missionP1}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{t.aboutPage.missionP2}</p>
              </div>
            </div>

            {/* Governance PDF */}
            <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-orbitron text-sm font-bold uppercase tracking-wider text-white">{t.aboutPage.governance}</h3>
                    <p className="mt-1 text-sm text-gray-500">{t.aboutPage.governanceDesc}</p>
                  </div>
                </div>
                <a
                  href="/docs/kurumsal-yonetisim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 sm:w-auto"
                >
                  {t.aboutPage.openPdf}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t.aboutPage.valuesLabel}
            </span>
            <h2 className="mt-3 font-orbitron text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              {t.aboutPage.valuesHeading} <span className="text-neon-cyan">{t.aboutPage.valuesHighlight}</span>
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.aboutPage.values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5, ease }} className="glass glass-hover rounded-2xl p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">{valueIcons[i]}</div>
                <h3 className="font-orbitron text-sm font-bold uppercase tracking-wider text-white">{v.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 pb-24 sm:pb-32 border-t border-white/5 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-center">
            <h2 className="font-orbitron text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              {t.aboutPage.whyUsHeading} <span className="text-neon-cyan">{t.aboutPage.whyUsHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">{t.aboutPage.whyUsDesc}</p>
          </motion.div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.aboutPage.whyUs.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5, ease }} className="glass glass-hover rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-cyan/10 text-neon-cyan">{whyUsIcons[i]}</div>
                <h3 className="font-orbitron text-sm font-bold uppercase tracking-wider text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5, ease }} className="mt-12 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-neon-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:scale-[1.02] active:scale-[0.98]">
              {t.aboutPage.joinUs}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
