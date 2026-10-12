"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sun,
  ShieldCheck,
  Smartphone,
  SlidersHorizontal,
  Lightbulb,
  Blinds,
  Volume2,
  Thermometer,
  Lock,
  Camera,
  Bell,
  Activity,
  Zap,
  Award,
  Headphones,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
  Menu,
} from "lucide-react";

export default function ZenithLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Villa",
    query: "",
  });

  // Interactive states for Control Section Hotspots
  const [activeControlTag, setActiveControlTag] = useState<number | null>(1);

  // Interactive states for Security Section Hotspots
  const [activeSecurityTag, setActiveSecurityTag] = useState<number | null>(2);

  // Active Hero Orbital Feature
  const [activeHeroFeature, setActiveHeroFeature] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDemoModalOpen(false);
      setFormData({ name: "", email: "", phone: "", projectType: "Villa", query: "" });
    }, 2800);
  };

  const heroFeatures = [
    {
      id: 1,
      title: "Comfort",
      icon: Sun,
      position: "top-[-18px] left-[-30px] sm:top-[-10px] sm:left-[-40px]",
      tag: "Circadian Lighting & Climate",
      description: "Tailors your indoor atmosphere naturally to match the daylight cycle.",
    },
    {
      id: 2,
      title: "Security",
      icon: ShieldCheck,
      position: "bottom-[-20px] left-[70px] sm:bottom-[-25px] sm:left-[100px]",
      tag: "Encrypted 24/7 Protection",
      description: "Smart boundary sensing and biometric door access without false alarms.",
    },
    {
      id: 3,
      title: "Convenience",
      icon: Smartphone,
      position: "bottom-[-20px] right-[60px] sm:bottom-[-25px] sm:right-[90px]",
      tag: "Unified Mobile & Voice",
      description: "Whole-home master scenes like 'Good Night' and 'Entertain' in one touch.",
    },
    {
      id: 4,
      title: "Smart Control",
      icon: SlidersHorizontal,
      position: "top-[-18px] right-[-30px] sm:top-[-10px] sm:right-[-45px]",
      tag: "Glass Touch Panels",
      description: "Minimalist wall panels with gold bezels and local-first reliability.",
    },
  ];

  const controlHotspots = [
    {
      id: 1,
      title: "Climate Control",
      icon: Thermometer,
      coords: "top-[26%] left-[6%] sm:top-[28%] sm:left-[12%]",
      badge: "Wall Touch Panel",
      features: [
        { label: "Precision Multi-Zone Climate", sub: "Individual room temperature regulation" },
        { label: "Air Quality & Humidity", sub: "Automated air purification sensing" },
        { label: "Smart Pre-Cooling", sub: "Learns schedules to optimize comfort" },
      ],
    },
    {
      id: 2,
      title: "Lighting Control",
      icon: Lightbulb,
      coords: "top-[16%] left-[60%] sm:top-[18%] sm:left-[66%]",
      badge: "Pendant & Cove LEDs",
      features: [
        { label: "Flicker-Free Smooth Dimming", sub: "0.1% micro-step illumination tuning" },
        { label: "Circadian Warmth Adaptation", sub: "Warm amber evening, crisp daylight" },
        { label: "One-Touch Ambient Presets", sub: "Pre-set Dinner, Reading & Cinema moods" },
      ],
    },
    {
      id: 3,
      title: "Curtain Control",
      icon: Blinds,
      coords: "top-[18%] right-[4%] sm:top-[22%] sm:right-[15%]",
      badge: "Motorized Drapery",
      features: [
        { label: "Whisper-Quiet Motorized Drapery", sub: "Smooth automated glide mechanism" },
        { label: "Automated Sunrise/Sunset Sync", sub: "Opens with dawn, secures at dusk" },
        { label: "Solar Heat Optimization", sub: "Automated shading during peak heat" },
      ],
    },
    {
      id: 4,
      title: "Audio & Video",
      icon: Volume2,
      coords: "bottom-[16%] left-[45%] sm:bottom-[18%] sm:left-[52%]",
      badge: "Smart Hub & OLED",
      features: [
        { label: "Synchronized Whole-Home Audio", sub: "Lossless acoustic streaming across zones" },
        { label: "Cinema Scene Integration", sub: "Dim lights, lower shades, power display" },
        { label: "Voice & Streaming Control", sub: "Compatible with Apple Home, Alexa & Siri" },
      ],
    },
  ];

  const securityHotspots = [
    {
      id: 1,
      title: "Biometric Smart Lock",
      icon: Lock,
      coords: "top-[44%] left-[6%] sm:top-[42%] sm:left-[9%]",
      desc: "Sub-second 3D fingerprint scanner, encrypted touchscreen keypad, and auto-deadbolt latching upon door closure.",
      meta: "Status: Locked & Encrypted",
    },
    {
      id: 2,
      title: "2K Live Camera Surveillance",
      icon: Camera,
      coords: "top-[7%] left-[36%] sm:top-[6%] sm:left-[39%]",
      desc: "Discreet ceiling dome camera with enhanced color night vision, AI boundary detection, and two-way crystal intercom.",
      meta: "Resolution: 2K HDR • Local Storage",
    },
    {
      id: 3,
      title: "Intelligent Motion Sensing",
      icon: Activity,
      coords: "top-[48%] left-[24%] sm:top-[44%] sm:left-[27%]",
      desc: "Multi-vector radar sensors that differentiate family members and pets from unauthorized perimeter intrusions.",
      meta: "Balcony & Perimeter Guard Active",
    },
    {
      id: 4,
      title: "Instant Mobile Security Dashboard",
      icon: Bell,
      coords: "top-[38%] left-[58%] sm:top-[36%] sm:left-[56%]",
      desc: "Direct push notifications with live video snapshot, one-tap emergency lockdown, and instant deterrence lighting triggers.",
      meta: "Alert: Front Entry Secured",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c9a84c] selection:text-black">
      {/* ───────────────────────────────────────────────────────────
          1. NAVIGATION HEADER
      ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-32 sm:w-36">
              <Image
                src="/assets/ZENITH-LOGO.png"
                alt="Zenith"
                fill
                className="object-contain filter brightness-0 invert"
                priority
              />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-light tracking-[0.25em] text-[#c9a84c] uppercase pl-2 border-l border-white/20">
              Lumiwaves
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-neutral-300">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#why-zenith" className="hover:text-white transition-colors">
              Why Zenith
            </a>
            <a href="#control" className="hover:text-white transition-colors">
              Home Control
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              Security
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1">
                <span>Solutions</span>
                <span className="text-[10px] text-neutral-500 group-hover:text-white">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 py-2 bg-[#121212] border border-white/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <a
                  href="#hero"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Residential Automation
                </a>
                <a
                  href="#control"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Architectural Lighting
                </a>
                <a
                  href="#security"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Integrated Security
                </a>
              </div>
            </div>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="relative z-10">Book A Demo</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-sm font-light">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Home
            </a>
            <a
              href="#why-zenith"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Why Zenith
            </a>
            <a
              href="#control"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Home Control
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Security
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setDemoModalOpen(true);
              }}
              className="w-full mt-2 py-3 rounded-full bg-white text-black text-center text-xs font-medium uppercase tracking-wider"
            >
              Book A Demo
            </button>
          </div>
        )}
      </header>

      {/* ───────────────────────────────────────────────────────────
          2. HERO SECTION (Item 1)
      ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-lifestyle.jpg"
            alt="Zenith Luxury Smart Living"
            fill
            priority
            className="object-cover object-center brightness-85"
          />
          {/* Subtle gradient overlays so typography stays high-contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent sm:via-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span className="text-[11px] font-medium tracking-[0.2em] text-[#c9a84c] uppercase">
                  Residential Automation Ecosystem
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12]">
                Intelligent Living, <br />
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#c9a84c]">
                  Simplified.
                </span>
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Transform your home into a smarter, safer, and effortlessly luxurious sanctuary with
                Zenith&apos;s bespoke residential automation solutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 cursor-pointer"
                >
                  Book A Demo
                </button>
                <a
                  href="#why-zenith"
                  className="px-7 py-3.5 rounded-full border border-white/40 text-white font-light text-sm tracking-wide backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
                >
                  Explore Smart Living
                </a>
              </div>

              {/* Quick Assurance Badges */}
              <div className="pt-6 flex flex-wrap gap-6 text-xs text-neutral-400 font-light border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                  <span>Local-First Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                  <span>10-Year Hardware Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c9a84c]" />
                  <span>Architectural Black Glass</span>
                </div>
              </div>
            </div>

            {/* Right Orbital Diagram (Exact structure inspired from reference) */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                {/* Orbital Connecting Circles & Waves */}
                <div className="absolute inset-0 rounded-full border border-white/15 scale-90 animate-breathe pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-dashed border-[#c9a84c]/25 pointer-events-none" />
                <div className="absolute inset-16 rounded-full border border-white/10 pointer-events-none" />

                {/* Central Focus Pulse Marker */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-panel flex flex-col items-center justify-center p-3 text-center border border-[#c9a84c]/40 shadow-[0_0_40px_rgba(201,168,76,0.25)]">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c] mb-1.5 animate-ping opacity-75" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                    Zenith Core
                  </span>
                  <span className="text-[11px] text-neutral-300 font-light leading-tight">
                    Unified Sync
                  </span>
                </div>

                {/* 4 Orbital Feature Nodes */}
                {heroFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  const isActive = activeHeroFeature === idx;
                  return (
                    <div
                      key={feat.id}
                      className={`absolute ${feat.position} z-20 flex flex-col items-center cursor-pointer group`}
                      onClick={() => setActiveHeroFeature(idx)}
                    >
                      {/* Node Circle */}
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                          isActive
                            ? "bg-[#c9a84c] text-black scale-110 shadow-[0_0_30px_rgba(201,168,76,0.6)]"
                            : "glass-pill text-white hover:bg-white hover:text-black hover:scale-105"
                        }`}
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
                      </div>

                      {/* Node Label */}
                      <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-md">
                        {feat.title}
                      </span>

                      {/* Tooltip detail on hover or active */}
                      <div
                        className={`absolute top-full mt-2 w-48 p-2.5 rounded-lg bg-black/90 border border-white/15 text-left text-[11px] text-neutral-300 shadow-2xl pointer-events-none transition-all duration-300 ${
                          isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                        }`}
                      >
                        <p className="text-white font-medium text-xs text-[#c9a84c]">{feat.tag}</p>
                        <p className="mt-0.5 leading-snug">{feat.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. BLACK BACKGROUND SECTION: WHY ZENITH HOME AUTOMATION? (Item 2)
      ─────────────────────────────────────────────────────────── */}
      <section id="why-zenith" className="relative bg-black py-28 border-t border-neutral-900 overflow-hidden">
        {/* Ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a84c]">
              The Art of Living Intelligently
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Why Choose Zenith Home Automation?
            </h2>
            <p className="text-neutral-400 text-base font-light leading-relaxed">
              Experience the perfect harmony of luxury architecture, invisible technology, and
              effortless daily convenience tailored to how you live.
            </p>
          </div>

          {/* 4 Cards Grid with Circular Rings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Comfort */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/80">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                <Sun className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Atmosphere & Comfort</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Seamless automatic control of circadian lighting, multi-zone temperature, and tailored
                room ambiance.
              </p>
            </div>

            {/* Card 2: Security */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/80">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                <ShieldCheck className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Proactive Security</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Intelligent perimeter sensing, biometric door access, and real-time alerts without
                disruptive false alarms.
              </p>
            </div>

            {/* Card 3: Convenience */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/80">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                <SlidersHorizontal className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Effortless Convenience</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                One intuitive app, architectural touch panels, and natural voice commands that work as
                one unified system.
              </p>
            </div>

            {/* Card 4: Energy Efficiency */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/80">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_25px_rgba(201,168,76,0.3)]">
                <Zap className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Intelligent Efficiency</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Smart daylight harvesting and automated HVAC scheduling to minimize power waste without
                compromising luxury.
              </p>
            </div>
          </div>

          {/* Zenith Hardware Assurance Bar */}
          <div className="mt-20 border border-white/10 rounded-2xl p-6 sm:p-8 bg-neutral-950/60 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Award className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">10-Year Warranty</h4>
                  <p className="text-xs text-neutral-400">Engineered to outlast standard home electronics</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Activity className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Local-First Architecture</h4>
                  <p className="text-xs text-neutral-400">Continues operating smoothly if internet drops</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Sparkles className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Tactile Black Glass</h4>
                  <p className="text-xs text-neutral-400">Ultra-thin bezels with brushed gold chamfers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Headphones className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Dedicated Specialist</h4>
                  <p className="text-xs text-neutral-400">Direct engineering contact, not an automated queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SECTION 3: CONTROL YOUR ENTIRE HOME — EFFORTLESSLY (Item 3.i)
      ─────────────────────────────────────────────────────────── */}
      <section id="control" className="relative min-h-[850px] lg:min-h-[920px] flex items-center justify-center overflow-hidden border-t border-neutral-900">
        {/* Upgraded Background Image Showcase */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/control-home.jpg"
            alt="Zenith Luxury Living Room Control Experience"
            fill
            className="object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
        </div>

        {/* Header Overlay */}
        <div className="absolute top-10 sm:top-14 left-0 w-full z-20 text-center px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight drop-shadow-lg">
            Control Your Entire Home — Effortlessly
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light tracking-wide mt-2 drop-shadow-md">
            Every Aspect of Your Living Space at Your Fingertips
          </p>
        </div>

        {/* Interactive Hotspots Layer */}
        <div className="relative z-20 w-full max-w-[1540px] h-[750px] lg:h-[820px] mx-auto px-6">
          {controlHotspots.map((spot) => {
            const Icon = spot.icon;
            const isExpanded = activeControlTag === spot.id;

            return (
              <div
                key={spot.id}
                className={`absolute ${spot.coords} transition-all duration-300 z-30`}
              >
                {/* Hotspot Pin / Trigger */}
                <div
                  onClick={() => setActiveControlTag(isExpanded ? null : spot.id)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Glowing Wi-Fi / Radio Icon */}
                  <div className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.7)] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-black" />
                  </div>

                  {/* Hotspot Header Tag */}
                  <div className="mt-2 px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-[11px] uppercase tracking-wider shadow-xl flex items-center gap-1.5 hover:bg-[#c9a84c] transition-colors">
                    <span>{spot.title}</span>
                    <span className="text-[10px] text-neutral-500 font-bold">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>
                </div>

                {/* Expanded Detail Card (Click or active state) */}
                {isExpanded && (
                  <div className="mt-3 w-72 sm:w-80 rounded-2xl bg-white text-black p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-neutral-200 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#c9a84c]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider text-black">
                          {spot.title}
                        </h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                        {spot.badge}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-3">
                      {spot.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-left">
                          <CheckCircle2 className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-neutral-900 leading-tight">
                              {feat.label}
                            </p>
                            <p className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                              {feat.sub}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SECTION 4: SMART SECURITY AND COMFORT (Item 3.ii)
      ─────────────────────────────────────────────────────────── */}
      <section id="security" className="relative min-h-[850px] lg:min-h-[920px] flex items-center justify-center overflow-hidden border-t border-neutral-900">
        {/* Upgraded Background Image Showcase */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/security-smart.jpg"
            alt="Zenith Smart Home Security and Comfort"
            fill
            className="object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/70" />
        </div>

        {/* Section Title Banner */}
        <div className="absolute top-10 sm:top-14 left-0 w-full z-20 text-center px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight drop-shadow-lg">
            Smart Security and Comfort, In Your Control
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-light tracking-wide mt-2 drop-shadow-md">
            Uncompromising Real-Time Protection That Adapts Quietly to Your Lifestyle
          </p>
        </div>

        {/* Radar Hotspot Markers Layer */}
        <div className="relative z-20 w-full max-w-[1540px] h-[750px] lg:h-[820px] mx-auto px-6">
          {securityHotspots.map((spot) => {
            const Icon = spot.icon;
            const isExpanded = activeSecurityTag === spot.id;

            return (
              <div
                key={spot.id}
                className={`absolute ${spot.coords} transition-all duration-300 z-30`}
              >
                {/* Radar Ripple Marker */}
                <div
                  onClick={() => setActiveSecurityTag(isExpanded ? null : spot.id)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Blinking Pulse Ring */}
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-white opacity-40 animate-ripple pointer-events-none" />
                    <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_#ffffff] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Marker Tag */}
                  <div className="mt-3 px-3.5 py-1 rounded-sm border border-white/60 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium uppercase tracking-wider shadow-xl group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-colors">
                    {spot.title}
                  </div>
                </div>

                {/* Expanded Card on Click */}
                {isExpanded && (
                  <div className="mt-3 w-72 sm:w-80 rounded-2xl glass-panel text-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-[#c9a84c]" />
                        <h4 className="text-xs font-semibold text-white tracking-wide">
                          {spot.title}
                        </h4>
                      </div>
                      <span className="text-[10px] text-[#c9a84c] font-mono">24/7 ACTIVE</span>
                    </div>

                    <p className="mt-2.5 text-xs text-neutral-300 font-light leading-relaxed">
                      {spot.desc}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>{spot.meta}</span>
                      <span className="text-[#c9a84c] font-medium flex items-center gap-1">
                        Verified <CheckCircle2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. CLOSING CTA BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black text-center border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Begin Your Journey</p>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Designed for Modern Architectural Living
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Experience a home that adapts quietly to your lifestyle — from relaxing evenings to secure
            nights and effortless energy efficiency.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_10px_35px_rgba(201,168,76,0.4)] hover:-translate-y-1 cursor-pointer"
            >
              Upgrade to a Smarter Home Today
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. FOOTER
      ─────────────────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs font-light">
        <div className="max-w-[1540px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="relative h-8 w-28">
                <Image
                  src="/assets/ZENITH-LOGO.png"
                  alt="Zenith"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
                Zenith is a premium smart automation ecosystem by Lumiwaves, bringing architectural
                elegance, comfort, and dependable control into every modern home.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-white transition-colors">Residential Automation</a></li>
                <li><a href="#why-zenith" className="hover:text-white transition-colors">Why Choose Zenith</a></li>
                <li><a href="#control" className="hover:text-white transition-colors">Whole Home Control</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Smart Security</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Contact & Support</h5>
              <ul className="space-y-2">
                <li><span>Pondicherry 605001, India</span></li>
                <li><span>White Town, ECR Road</span></li>
                <li><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
                <li><a href="mailto:hello@lumiwaves.in" className="hover:text-white">hello@lumiwaves.in</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Experience Center</h5>
              <p className="text-neutral-400 leading-relaxed">
                Schedule a private walk-through in our experience center to witness tactile switch panels,
                circadian lighting, and unified security live.
              </p>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-2 inline-flex items-center gap-2 text-[#c9a84c] hover:underline cursor-pointer"
              >
                Schedule Private Consultation <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>© 2026 Zenith by Lumiwaves. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400">Terms of Service</a>
              <a href="#" className="hover:text-neutral-400">Warranty Registration</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ───────────────────────────────────────────────────────────
          8. BOOK A DEMO MODAL
      ─────────────────────────────────────────────────────────── */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#121212] border border-white/15 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] text-[#c9a84c] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-white">Consultation Request Received</h3>
                <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                  A Zenith automation engineer will connect with you within 24 hours to schedule your
                  private consultation.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-1 mb-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
                    Zenith Consultation
                  </p>
                  <h3 className="text-2xl font-light text-white">Book A Private Demo</h3>
                  <p className="text-xs text-neutral-400">
                    Experience our smart automation ecosystem tailored to your architectural plans.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="Villa">Luxury Villa</option>
                      <option value="Apartment">Modern Apartment / Penthouse</option>
                      <option value="Commercial">Commercial / Hospitality</option>
                      <option value="Architect">Architect / Interior Designer Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Requirements / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your space (rooms, construction stage, preferred systems)..."
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] cursor-pointer"
                    >
                      Confirm Booking Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
