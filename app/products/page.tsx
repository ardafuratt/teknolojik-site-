"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Radar, Shield, Wifi, Cpu, SlidersHorizontal } from "lucide-react";
import { products, l, la, type Product, type ProductCategory } from "@/data/products";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
const ease = [0.16, 1, 0.3, 1] as const;

const catIcon: Record<string, React.ReactNode> = {
  UAV: <Radar className="h-4 w-4" />,
  UGV: <Shield className="h-4 w-4" />,
  IOT: <Wifi className="h-4 w-4" />,
};

const catColors: Record<string, string> = {
  UAV: "text-neon-cyan",
  UGV: "text-industrial-orange",
  IOT: "text-neon-cyan",
};

const statusColors: Record<string, { color: string; dot: string; glow: string }> = {
  OPERATIONAL: { color: "text-green-400 border-green-400/20 bg-green-400/5", dot: "bg-green-400", glow: "shadow-[0_0_8px_rgba(34,197,94,0.2)]" },
  PROTOTYPE: { color: "text-industrial-orange border-industrial-orange/20 bg-industrial-orange/5", dot: "bg-industrial-orange", glow: "shadow-[0_0_8px_rgba(255,77,0,0.2)]" },
  DEVELOPMENT: { color: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5", dot: "bg-neon-cyan", glow: "shadow-[0_0_8px_rgba(0,240,255,0.15)]" },
  CONCEPT: { color: "text-gray-400 border-gray-400/20 bg-gray-400/5", dot: "bg-gray-400", glow: "" },
};

function SpecBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/10">
      <span className="text-[9px] uppercase tracking-[0.15em] text-gray-600">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t, lang } = useLanguage();
  const isEven = index % 2 === 0;
  const sc = statusColors[product.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.div whileHover={{ scale: 1.005 }} transition={{ duration: 0.3 }} className="glass glass-hover group overflow-hidden rounded-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:w-[40%]">
            <Image src={product.image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover opacity-75 transition-all duration-500 group-hover:opacity-95 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/70" />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.6, ease }} className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-background/35 backdrop-blur-md ${catColors[product.category]}`}>
                {catIcon[product.category]}
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 lg:hidden" />
            <div className="absolute left-4 top-4">
              <span className="max-w-[46vw] truncate rounded-lg border border-white/8 bg-background/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 backdrop-blur-md sm:max-w-none">{product.id}</span>
            </div>
            <div className="absolute right-4 top-4">
              <span className="rounded-lg border border-white/8 bg-background/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 backdrop-blur-md">{product.version}</span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6 lg:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-wider ${catColors[product.category]}`}>
                  {catIcon[product.category]}
                  {t.categories[product.category]}
                </span>
                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider ${sc.color} ${sc.glow}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${sc.dot} animate-pulse`} />
                  {t.statuses[product.status]}
                </span>
              </div>
              <h2 className="font-orbitron text-lg font-bold uppercase tracking-wider text-white sm:text-xl lg:text-2xl">{product.name}</h2>
              <p className="mt-1 text-sm text-neon-cyan/60">{l(product.tagline, lang)}</p>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">{l(product.description, lang)}</p>

            <div>
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.15em] text-gray-600">{t.productsPage.capabilities}</span>
              <div className="flex flex-wrap gap-1.5">
                {la(product.capabilities, lang).map((cap) => (
                  <span key={cap} className="rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[11px] text-gray-400 transition-colors hover:border-neon-cyan/15 hover:text-white">{cap}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.15em] text-gray-600">{t.productsPage.specs}</span>
              <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
                {Object.entries(product.specs).map(([key, val]) => (
                  <SpecBox key={key} label={key} value={val} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"ALL" | ProductCategory>("ALL");
  const filtered = filter === "ALL" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <section className="relative z-10 pt-24 pb-8 sm:pt-32 md:pt-40 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
            <Link href="/" className="group mb-8 inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-neon-cyan">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t.productsPage.back}
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neon-cyan">
              <Cpu className="h-3.5 w-3.5" />
              {t.productsPage.label}
            </span>
            <h1 className="mt-3 font-orbitron text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.productsPage.heading}{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-cyan/60 bg-clip-text text-transparent">{t.productsPage.headingHighlight}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">{t.productsPage.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease }}
            className="mt-7 flex flex-wrap items-center gap-2 sm:mt-8"
          >
            <SlidersHorizontal className="mr-1 h-4 w-4 text-gray-600" />
            {(["ALL", "UAV", "UGV", "IOT"] as const).map((cat) => {
              const isActive = filter === cat;
              const count = cat === "ALL" ? products.length : products.filter((p) => p.category === cat).length;
              return (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFilter(cat)}
                  className={`relative rounded-xl px-3 py-2 text-[11px] font-medium uppercase tracking-wider transition-all duration-300 sm:px-4 sm:text-xs ${
                    isActive
                      ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                      : "bg-white/[0.03] text-gray-500 border border-white/5 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {t.categories[cat]} ({count})
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Cpu className="h-10 w-10 text-gray-700 mb-4" />
              <p className="text-gray-500">{t.productsPage.noProducts}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
