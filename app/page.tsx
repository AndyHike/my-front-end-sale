'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles, Zap, Settings, LayoutTemplate, Edit3, Image as ImageIcon, Palette, Globe } from 'lucide-react';
import { FadeIn } from '@/components/FadeIn';
import { Accordion } from '@/components/Accordion';
import { ImageCarousel } from '@/components/ImageCarousel';
import { translations, localizedImages, Language } from '@/lib/i18n';

export default function LandingPage() {
  const [lang, setLang] = useState<Language>('cs');
  const t = translations[lang];
  const imgs = localizedImages[lang];

  // Placeholder URL for the iframe demo. Replace with your actual demo URL.
  const demoIframeUrl = "https://beauty.devicehelp.cz/preview";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 font-sans selection:bg-stone-200">
      {/* 1. Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-xl tracking-tight">SalonWeb</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <Link href="#jak-to-funguje" className="hover:text-stone-900 transition-colors">{t.nav.howItWorks}</Link>
            <Link href="#co-lze-upravit" className="hover:text-stone-900 transition-colors">{t.nav.whatToEdit}</Link>
            <Link href="#demo" className="hover:text-stone-900 transition-colors">{t.nav.demo}</Link>
            <Link href="#cena" className="hover:text-stone-900 transition-colors">{t.nav.pricing}</Link>
            <Link href="#faq" className="hover:text-stone-900 transition-colors">{t.nav.faq}</Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group flex items-center gap-1 text-sm font-medium text-stone-600 cursor-pointer">
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang}</span>
              <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-stone-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {(['cs', 'uk', 'en'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${lang === l ? 'font-bold text-stone-900' : 'text-stone-600'}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Link href="#vyzkouset" className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
              {t.nav.login}
            </Link>
            <Link href="#vyzkouset" className="bg-stone-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
              {t.nav.tryFree}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* 2. Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-transparent to-transparent opacity-50" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {t.hero.badge}
                </div>
                <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                  {t.hero.title1} <br className="hidden lg:block" />
                  <span className="text-stone-400">{t.hero.title2}</span>
                </h1>
                <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#vyzkouset" className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    {t.hero.btnFree}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="#demo" className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-50 transition-colors flex items-center justify-center">
                    {t.hero.btnDemo}
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-stone-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    {t.hero.check1}
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    {t.hero.check2}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/50 bg-white">
                  <Image
                    src={imgs.heroMockup}
                    alt="SalonWeb Interface Preview"
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                    priority
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Admin Panel Mockup - Natural Sizing */}

                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. Benefits */}
        <section className="py-24 bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn delay={0.1}>
                <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.benefits.b1Title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t.benefits.b1Desc}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.benefits.b2Title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t.benefits.b2Desc}
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-stone-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.benefits.b3Title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t.benefits.b3Desc}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. What you can edit */}
        <section id="co-lze-upravit" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.features.title}</h2>
              <p className="text-xl text-stone-600">
                {t.features.subtitle}
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
                  <div className="space-y-6">
                    {[
                      { icon: ImageIcon, title: t.features.f1Title, desc: t.features.f1Desc },
                      { icon: Edit3, title: t.features.f2Title, desc: t.features.f2Desc },
                      { icon: LayoutTemplate, title: t.features.f3Title, desc: t.features.f3Desc },
                      { icon: Palette, title: t.features.f4Title, desc: t.features.f4Desc },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-stone-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-stone-900">{item.title}</h4>
                          <p className="text-sm text-stone-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="order-1 lg:order-2">
                <ImageCarousel images={imgs.editorMockups} />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 5. How it works */}
        <section id="jak-to-funguje" className="py-32 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.howItWorks.title}</h2>
              <p className="text-xl text-stone-400">
                {t.howItWorks.subtitle}
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-stone-800" />

              {[
                { step: '01', title: t.howItWorks.s1Title, desc: t.howItWorks.s1Desc },
                { step: '02', title: t.howItWorks.s2Title, desc: t.howItWorks.s2Desc },
                { step: '03', title: t.howItWorks.s3Title, desc: t.howItWorks.s3Desc },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative z-10">
                  <div className="bg-stone-800 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-light mb-8 mx-auto border-8 border-stone-900">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-center">{item.title}</h3>
                  <p className="text-stone-400 text-center leading-relaxed">
                    {item.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Demo */}
        <section id="demo" className="py-32 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.demo.title}</h2>
              <p className="text-xl text-stone-600">
                {t.demo.subtitle}
              </p>
            </FadeIn>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-w-6xl mx-auto">
              {/* Desktop Mockup */}
              <FadeIn className="w-full lg:w-2/3">
                <div className="rounded-t-xl bg-stone-200 border-x border-t border-stone-300 p-3 flex items-center gap-3">
                  <div className="flex gap-1.5 px-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white rounded-md text-xs text-stone-500 px-3 py-1.5 flex-1 text-center font-mono truncate">
                    {demoIframeUrl}
                  </div>
                </div>
                <div className="rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-stone-300 bg-white aspect-[16/10] relative w-full">
                  <iframe
                    src={demoIframeUrl}
                    className="w-full h-full border-0"
                    title="Live Demo Desktop"
                    allowFullScreen
                  />
                </div>
              </FadeIn>

              {/* Mobile Mockup */}
              <FadeIn delay={0.2} className="w-full max-w-[300px] hidden md:block">
                <div className="relative mx-auto border-stone-900 bg-stone-900 border-[12px] rounded-[2.5rem] aspect-[9/19] shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-stone-900 rounded-b-xl w-1/2 mx-auto z-20"></div>
                  <iframe
                    src={demoIframeUrl}
                    className="w-full h-full border-0 bg-white relative z-10"
                    title="Live Demo Mobile"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} className="mt-16 text-center">
              <Link href="#vyzkouset" className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-colors">
                {t.demo.btnLive}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* 7. Audience */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.audience.title}</h2>
                <p className="text-xl text-stone-600 mb-10">
                  {t.audience.subtitle}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.audience.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100">
                      <Check className="w-5 h-5 text-stone-900" />
                      <span className="font-medium text-stone-800">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-3xl overflow-hidden relative">
                  <Image
                    src={imgs.audience}
                    alt="Beauty Salon"
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 8. Comparison */}
        <section className="py-32 bg-stone-50 border-y border-stone-100">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.comparison.title}</h2>
              <p className="text-xl text-stone-600">
                {t.comparison.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm opacity-75">
                  <h3 className="text-xl font-semibold mb-6 text-stone-500">{t.comparison.tradTitle}</h3>
                  <ul className="space-y-4">
                    {t.comparison.tradItems.map((item, i) => (
                      <li key={i} className="flex gap-3 text-stone-500">
                        <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-0.5 bg-stone-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SalonWeb */}
                <div className="bg-stone-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <Sparkles className="w-6 h-6 text-yellow-400 opacity-50" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6">{t.comparison.salonTitle}</h3>
                  <ul className="space-y-4">
                    {t.comparison.salonItems.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 9. Pricing */}
        <section id="cena" className="py-32">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.pricing.title}</h2>
              <p className="text-xl text-stone-600">
                {t.pricing.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-stone-200 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-stone-900" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-medium text-sm mb-8">
                  <Sparkles className="w-4 h-4" />
                  {t.pricing.badge}
                </div>

                <div className="flex justify-center items-baseline gap-2 mb-8">
                  <span className="text-6xl font-bold tracking-tight text-stone-900">{t.pricing.price}</span>
                  <span className="text-2xl text-stone-500 font-medium">{t.pricing.period}</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
                  {t.pricing.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-stone-900 flex-shrink-0" />
                      <span className="text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="#vyzkouset" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-800 transition-colors w-full sm:w-auto">
                  {t.pricing.btn}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-stone-500 mt-6">{t.pricing.disclaimer}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 10. VIP / Custom (Optional) */}
        <section className="py-16 bg-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 rounded-3xl border border-stone-200">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.vip.title}</h3>
                  <p className="text-stone-600">{t.vip.subtitle}</p>
                </div>
                <Link href="#kontakt" className="whitespace-nowrap px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-50 transition-colors">
                  {t.vip.btn}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-32">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-4xl font-semibold tracking-tight mb-6">{t.faq.title}</h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Accordion items={[
                { question: t.faq.q1, answer: t.faq.a1 },
                { question: t.faq.q2, answer: t.faq.a2 },
                { question: t.faq.q3, answer: t.faq.a3 },
                { question: t.faq.q4, answer: t.faq.a4 },
                { question: t.faq.q5, answer: t.faq.a5 },
                { question: t.faq.q6, answer: t.faq.a6 }
              ]} />
            </FadeIn>
          </div>
        </section>

        {/* 12. Final CTA */}
        <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-stone-800 via-transparent to-transparent opacity-50" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <FadeIn>
              <h2 className="text-5xl font-semibold tracking-tight mb-8 leading-tight">
                {t.finalCta.title}
              </h2>
              <p className="text-2xl text-stone-400 mb-12 max-w-2xl mx-auto">
                {t.finalCta.subtitle}
              </p>
              <Link href="#vyzkouset" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-100 transition-colors">
                {t.finalCta.btn}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* 13. Footer */}
      <footer className="bg-white border-t border-stone-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-xl tracking-tight">SalonWeb</span>
              </div>
              <p className="text-stone-500 max-w-sm">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 mb-6">{t.footer.product}</h4>
              <ul className="space-y-4 text-stone-500">
                <li><Link href="#jak-to-funguje" className="hover:text-stone-900 transition-colors">{t.nav.howItWorks}</Link></li>
                <li><Link href="#co-lze-upravit" className="hover:text-stone-900 transition-colors">{t.nav.whatToEdit}</Link></li>
                <li><Link href="#demo" className="hover:text-stone-900 transition-colors">{t.nav.demo}</Link></li>
                <li><Link href="#cena" className="hover:text-stone-900 transition-colors">{t.nav.pricing}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 mb-6">{t.footer.support}</h4>
              <ul className="space-y-4 text-stone-500">
                <li><Link href="#faq" className="hover:text-stone-900 transition-colors">{t.nav.faq}</Link></li>
                <li><Link href="#kontakt" className="hover:text-stone-900 transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="#podminky" className="hover:text-stone-900 transition-colors">{t.footer.terms}</Link></li>
                <li><Link href="#soukromi" className="hover:text-stone-900 transition-colors">{t.footer.privacy}</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 text-center md:text-left text-stone-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} SalonWeb. {t.footer.rights}</p>
            <p>{t.footer.madeFor}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

