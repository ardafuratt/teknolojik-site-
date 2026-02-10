"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft, Mail, MapPin, Phone, Send,
  Youtube, Instagram, Github, ExternalLink, CheckCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { icon: <Youtube className="h-5 w-5" />, label: "YouTube", handle: "makinafleo", href: "https://www.youtube.com/channel/UC4JMOTgAy32O7BfJBDLREKQ", color: "hover:text-red-400 hover:border-red-400/20" },
  { icon: <Instagram className="h-5 w-5" />, label: "Instagram", handle: "@makin_afleo", href: "https://instagram.com/makin_afleo", color: "hover:text-pink-400 hover:border-pink-400/20" },
  { icon: <Github className="h-5 w-5" />, label: "GitHub", handle: "makinafleo", href: "https://github.com/makinafleo", color: "hover:text-white hover:border-white/20" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className="relative z-10 pt-24 pb-14 sm:pt-32 md:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
            <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-neon-cyan">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t.contactPage.back}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
              <Mail className="h-3.5 w-3.5" />
              {t.contactPage.label}
            </span>
            <h1 className="mt-3 font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.contactPage.heading} <span className="text-neon-cyan">{t.contactPage.headingHighlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-400">{t.contactPage.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="glass rounded-2xl p-5 sm:p-6">
                <h3 className="font-orbitron text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">{t.contactPage.infoTitle}</h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan"><MapPin className="h-4 w-4" /></div>
                    <div>
                      <span className="text-xs text-gray-500">{t.contactPage.address}</span>
                      <p className="mt-0.5 text-sm text-white">{t.contactPage.addressValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan"><Mail className="h-4 w-4" /></div>
                    <div>
                      <span className="text-xs text-gray-500">{t.contactPage.email}</span>
                      <a href="mailto:makinafleo@gmail.com" className="mt-0.5 block text-sm text-white hover:text-neon-cyan transition-colors">makinafleo@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan"><Phone className="h-4 w-4" /></div>
                    <div>
                      <span className="text-xs text-gray-500">{t.contactPage.phone}</span>
                      <p className="mt-0.5 text-sm text-white">info@makinafleo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-5 sm:p-6">
                <h3 className="font-orbitron text-xs uppercase tracking-[0.15em] text-gray-400 mb-5">{t.contactPage.socialsTitle}</h3>
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }} className={`group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-gray-400 transition-all duration-300 ${s.color}`}>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.03]">{s.icon}</div>
                      <div className="flex-1">
                        <span className="block text-sm font-medium">{s.label}</span>
                        <span className="text-[11px] text-gray-600">{s.handle}</span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="lg:col-span-3"
            >
              <div className="glass rounded-2xl p-5 sm:p-8">
                <h3 className="font-orbitron text-xs uppercase tracking-[0.15em] text-gray-400 mb-6">{t.contactPage.formTitle}</h3>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="h-12 w-12 text-neon-cyan mb-4" />
                    <h4 className="font-orbitron text-lg font-bold text-white">{t.contactPage.successTitle}</h4>
                    <p className="mt-2 text-sm text-gray-400">{t.contactPage.successDesc}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-gray-500">{t.contactPage.fullName}</label>
                        <input type="text" required placeholder={t.contactPage.fullNamePlaceholder} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-neon-cyan/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/10" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs text-gray-500">{t.contactPage.emailLabel}</label>
                        <input type="email" required placeholder={t.contactPage.emailPlaceholder} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-neon-cyan/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/10" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-500">{t.contactPage.subject}</label>
                      <input type="text" required placeholder={t.contactPage.subjectPlaceholder} className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-neon-cyan/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-gray-500">{t.contactPage.message}</label>
                      <textarea required rows={5} placeholder={t.contactPage.messagePlaceholder} className="resize-none rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-neon-cyan/30 focus:bg-white/[0.05] focus:ring-1 focus:ring-neon-cyan/10" />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-neon-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)]">
                      <Send className="h-4 w-4" />
                      {t.contactPage.send}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
