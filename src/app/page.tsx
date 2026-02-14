"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  Star,
  Heart,
  BookOpen,
  Users,
  Music,
  Palette,
  TreePine,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Building2,
  Flower2,
  Sun,
  Cloud,
  Rainbow,
  Laugh,
  HandHeart,
  Blocks,
  Baby,
  PartyPopper, Smile, HomeIcon,
} from "lucide-react";
import { useRef } from "react";

// Decorative floating shapes component
function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 h-16 w-16 rounded-full bg-sunny/40"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 h-12 w-12 rounded-2xl bg-coral/40"
        animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 h-20 w-20 rounded-full bg-sky/30"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 h-14 w-14 rounded-3xl bg-mint/40"
        animate={{ y: [0, 25, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 h-10 w-10 rounded-full bg-lavender/50"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Star decoration component
function StarDecoration({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Star className="h-6 w-6 fill-sunny text-sunny" />
    </motion.div>
  );
}

// Header/Navbar
function Header() {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Profil", href: "#profil" },
    { name: "Guru", href: "#guru" },
    { name: "Prestasi", href: "#prestasi" },
    { name: "Metode Belajar", href: "#metode" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 bg-white/90 shadow-lg shadow-coral/5 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-sunny shadow-lg">
            <Sparkles className="h-7 w-7 text-white" />
            <motion.div
              className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-sky"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <div>
            <h1 className="font-baloo text-2xl font-bold text-warm-brown">
              SPS Padu Ceria
            </h1>
            <p className="text-xs text-muted-foreground">Bermain & Belajar</p>
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="rounded-xl px-4 py-2 font-medium text-warm-brown transition-all hover:bg-sunny/20 hover:text-coral"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#daftar"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="btn-bounce ml-4 rounded-full bg-gradient-to-r from-coral to-peach px-6 py-3 font-bold text-white shadow-lg shadow-coral/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftarkan Anak
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunny/20 md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-warm-brown" />
            <span className="h-0.5 w-4 rounded-full bg-warm-brown" />
            <span className="h-0.5 w-5 rounded-full bg-warm-brown" />
          </div>
        </motion.button>
      </nav>
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream via-sunny-light/30 to-white pt-20"
    >
      <FloatingShapes />

      {/* Decorative clouds */}
      <motion.div
        className="absolute top-32 left-10 text-white opacity-60"
        style={{ y }}
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="h-24 w-24 fill-white" />
      </motion.div>
      <motion.div
        className="absolute top-48 right-20 text-white opacity-50"
        style={{ y }}
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Cloud className="h-32 w-32 fill-white" />
      </motion.div>

      {/* Sun decoration */}
      <motion.div
        className="absolute top-24 right-32 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Sun className="h-20 w-20 text-sunny" />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 max-w-2xl pt-10 text-center lg:pt-0 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-sunny/30 px-4 py-2"
          >
            <PartyPopper className="h-5 w-5 text-coral" />
            <span className="font-medium text-warm-brown">
              Pendaftaran Tahun Ajaran 2026/2027 Dibuka!
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-baloo mb-6 text-5xl leading-tight font-extrabold tracking-tight text-warm-brown md:text-6xl lg:text-7xl"
          >
            Tempat{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Bermain</span>
              <motion.div
                className="absolute -right-8 -top-4"
                animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="h-8 w-8 fill-sunny text-sunny" />
              </motion.div>
            </span>
            <br />& Belajar{" "}
            <span className="relative">
              <span className="text-coral">Ceria</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
              >
                <motion.path
                  d="M0 8 Q 50 0, 100 8 T 200 8"
                  fill="none"
                  stroke="#FFD93D"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Kami menciptakan lingkungan belajar yang menyenangkan, aman, dan penuh
            kasih sayang untuk membantu si kecil tumbuh cerdas, kreatif, dan
            berkarakter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href="#daftar"
              className="btn-bounce group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-coral to-peach px-8 py-4 text-lg font-bold text-white shadow-xl shadow-coral/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-5 w-5" />
              Daftarkan Anak Anda
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#profil"
              className="btn-bounce inline-flex items-center justify-center gap-2 rounded-full border-2 border-sunny bg-white px-8 py-4 text-lg font-bold text-warm-brown shadow-lg hover:bg-sunny/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-5 w-5" />
              Kenali Kami
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { number: "18+", label: "Tahun Pengalaman", icon: Award },
              { number: "500+", label: "Alumni Berprestasi", icon: GraduationCap },
              { number: "10+", label: "Guru Profesional", icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-sunny/30">
                  <stat.icon className="h-6 w-6 text-coral" />
                </div>
                <p className="font-baloo text-2xl font-bold text-warm-brown md:text-3xl">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Illustration Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-12 lg:mt-0"
        >
          {/* Main illustration container */}
          <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
            {/* Background blob */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-light via-sunny-light to-coral-light"
              animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative elements around */}
            <motion.div
              className="absolute -top-4 left-1/4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sunny shadow-lg"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Blocks className="h-8 w-8 text-white" />
            </motion.div>
            <motion.div
              className="absolute top-1/4 -right-4 flex h-14 w-14 items-center justify-center rounded-xl bg-coral shadow-lg"
              animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Palette className="h-7 w-7 text-white" />
            </motion.div>
            <motion.div
              className="absolute bottom-1/4 -left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-mint shadow-lg"
              animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Music className="h-7 w-7 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 right-1/4 flex h-12 w-12 items-center justify-center rounded-full bg-sky shadow-lg"
              animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <BookOpen className="h-6 w-6 text-white" />
            </motion.div>

            {/* Center illustration - stylized children playing */}
            <div className="absolute inset-8 flex items-center justify-center">
              <div className="relative h-full w-full rounded-[3rem] bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
                {/* Playful scene */}
                <div className="flex h-full flex-col items-center justify-center gap-6">
                  {/* Happy faces row */}
                  <div className="flex -space-x-4">
                    {["bg-coral", "bg-sunny", "bg-sky", "bg-mint"].map(
                      (color, i) => (
                        <motion.div
                          key={i}
                          className={`flex h-20 w-20 items-center justify-center rounded-full ${color} border-4 border-white shadow-lg`}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: 1 + i * 0.15,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -10 }}
                        >
                          <Laugh className="h-10 w-10 text-white" />
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="text-center"
                  >
                    <p className="font-baloo text-2xl font-bold text-warm-brown">
                      Teman Baru Menunggu!
                    </p>
                    <p className="text-muted-foreground">Ayo bermain bersama</p>
                  </motion.div>

                  {/* Rainbow decoration */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <Rainbow className="h-16 w-16 text-coral" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

// Profile Section
function ProfileSection() {
  return (
    <section id="profil" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky to-sky-light shadow-lg"
          >
            <Building2 className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Profil <span className="text-sky">Sekolah</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Mengenal lebih dekat tentang SPS Padu Ceria, visi misi, dan komitmen kami
            dalam mendidik generasi masa depan
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image/Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-light via-mint-light to-sunny-light p-8">
              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Flower2 className="h-12 w-12 text-coral/40" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="h-10 w-10 fill-sunny text-sunny" />
              </motion.div>

              {/* School building illustration */}
              <div className="flex h-full items-center justify-center">
                <div className="rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur-sm">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-coral to-sunny">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-baloo text-2xl font-bold text-warm-brown">
                    SPS Padu Ceria
                  </h3>
                  <p className="text-muted-foreground">Sejak 2008</p>
                  <div className="mt-4 flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-sunny text-sunny"
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Terakreditasi B
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint/20">
                  <Smile className="h-6 w-6 text-mint" />
                </div>
                <div>
                  <p className="font-baloo font-bold text-warm-brown">
                    Ayo Gabung Sekarang
                  </p>
                  <p className="text-sm text-muted-foreground">Mari kita bermain sambil belajar</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-baloo mb-4 text-2xl font-bold text-warm-brown">
                Tentang Kami
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                SPS Padu Ceria adalah lembaga pendidikan anak usia dini yang berdiri
                sejak tahun 2008. Kami berkomitmen untuk memberikan pendidikan
                berkualitas dengan pendekatan bermain sambil belajar yang
                menyenangkan. Setiap anak adalah unik, dan kami percaya bahwa
                setiap anak memiliki potensi luar biasa yang perlu dikembangkan.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-coral-light/50 p-6"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-coral/20">
                  <Heart className="h-6 w-6 text-coral" />
                </div>
                <h4 className="font-baloo mb-2 text-lg font-bold text-warm-brown">
                  Visi
                </h4>
                <p className="text-sm text-muted-foreground">
                  Menjadi sekolah PAUD unggulan yang menghasilkan generasi
                  cerdas, kreatif, dan berkarakter mulia.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl bg-sky-light/50 p-6"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/20">
                  <Star className="h-6 w-6 text-sky" />
                </div>
                <h4 className="font-baloo mb-2 text-lg font-bold text-warm-brown">
                  Misi
                </h4>
                <p className="text-sm text-muted-foreground">
                  Menciptakan lingkungan belajar yang menyenangkan, aman, dan
                  mendukung tumbuh kembang anak secara optimal.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Kurikulum Merdeka",
                "Guru Bersertifikat",
                "Fasilitas Lengkap",
                "Lingkungan Aman",
              ].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-full bg-sunny/20 px-4 py-2 text-sm font-medium text-warm-brown"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Principal Section
function PrincipalSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-lavender-light/30 to-white py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-lavender/10" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-sunny/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-coral-light shadow-lg"
          >
            <GraduationCap className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Kepala <span className="text-lavender">Sekolah</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pemimpin yang berdedikasi tinggi dalam memajukan pendidikan anak usia
            dini
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="card-playful overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-lavender/10">
            <div className="grid md:grid-cols-2">
              {/* Image side */}
              <div className="relative bg-gradient-to-br from-lavender-light via-coral-light to-sunny-light p-8">
                <div className="flex h-full items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="relative"
                  >
                    {/* Profile picture placeholder */}
                    <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] bg-white shadow-xl">
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lavender/20 to-coral/20">
                        <div className="text-center">
                          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-coral">
                            <Users className="h-12 w-12 text-white" />
                          {/*  Foto */}
                          </div>
                          <p className="font-baloo text-lg font-bold text-warm-brown">
                            Foto Kepala Sekolah
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-sunny shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="h-6 w-6 fill-white text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-coral shadow-lg"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    >
                      <Heart className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h3 className="font-baloo text-2xl font-bold text-warm-brown md:text-3xl">
                    Ibu Dian Permanasari, S.Pd.
                  </h3>
                  <p className="text-coral">Kepala Sekolah SPS Padu Ceria</p>
                </div>

                <blockquote className="mb-6 border-l-4 border-sunny pl-4 italic text-muted-foreground">
                  &ldquo;Setiap anak adalah bintang yang unik. Tugas kita adalah
                  membantu mereka bersinar dengan caranya masing-masing.&rdquo;
                </blockquote>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Dengan pengalaman lebih dari 18 tahun di bidang pendidikan anak
                  usia dini, Ibu Dian telah mendedikasikan hidupnya untuk
                  menciptakan lingkungan belajar yang hangat dan menyenangkan bagi
                  setiap anak.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-sunny/10 p-3 text-center">
                    <p className="font-baloo text-2xl font-bold text-sunny">18+</p>
                    <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
                  </div>
                  <div className="rounded-xl bg-coral/10 p-3 text-center">
                    <p className="font-baloo text-2xl font-bold text-coral">S1</p>
                    <p className="text-sm text-muted-foreground">Pendidikan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Teachers Section
function TeachersSection() {
  const teachers = [
    {
      name: "Kakak Lala",
      role: "Guru Kelas A",
      specialty: "Seni & Kreativitas",
      color: "peach",
    },
    {
      name: "Ibu Lis",
      role: "Guru Kelas A",
      specialty: "Seni & Kreativitas",
      color: "coral",
    },
    {
      name: "Ibu Lina",
      role: "Guru Kelas B",
      specialty: "Bahasa & Literasi",
      color: "sky",
    },
    {
      name: "Kakak Salsa",
      role: "Guru Kelas C",
      specialty: "Musik & Gerak",
      color: "mint",
    },
    {
      name: "Ibu Putri",
      role: "Guru Pendamping",
      specialty: "Sosial Emosional",
      color: "sunny",
    },
    {
      name: "Pak Budi",
      role: "Guru Olahraga",
      specialty: "Motorik Kasar",
      color: "lavender",
    }
  ];

  const colorClasses: Record<string, { bg: string; light: string; text: string }> = {
    coral: { bg: "bg-coral", light: "bg-coral-light", text: "text-coral" },
    sky: { bg: "bg-sky", light: "bg-sky-light", text: "text-sky" },
    mint: { bg: "bg-mint", light: "bg-mint-light", text: "text-mint" },
    sunny: { bg: "bg-sunny", light: "bg-sunny-light", text: "text-sunny" },
    lavender: { bg: "bg-lavender", light: "bg-lavender-light", text: "text-lavender" },
    peach: { bg: "bg-peach", light: "bg-cream", text: "text-peach" },
  };

  return (
    <section id="guru" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-sky shadow-lg"
          >
            <Users className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Guru <span className="text-mint">Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tim pendidik profesional yang penuh kasih sayang dan berdedikasi
            tinggi dalam membimbing si kecil
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => {
            const colors = colorClasses[teacher.color];
            return (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-playful group"
              >
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                  {/* Photo area */}
                  <div className={`${colors.light} relative h-48 p-6`}>
                    <div className="flex h-full items-center justify-center">
                      <motion.div
                        className={`${colors.bg} flex h-24 w-24 items-center justify-center rounded-full shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <HandHeart className="h-12 w-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Decorative star */}
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className={`h-6 w-6 fill-current ${colors.text}`} />
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-baloo text-xl font-bold text-warm-brown">
                      {teacher.name}
                    </h3>
                    <p className={`${colors.text} font-medium`}>{teacher.role}</p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1">
                      <Sparkles className="h-4 w-4 text-sunny" />
                      <span className="text-sm text-muted-foreground">
                        {teacher.specialty}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            Semua guru kami tersertifikasi dan berpengalaman dalam pendidikan
            anak usia dini
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Sarjana Pendidikan", "Sertifikat PAUD", "Pelatihan Rutin"].map(
              (badge, i) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full bg-mint/10 px-4 py-2 text-sm font-medium text-mint"
                >
                  <Award className="h-4 w-4" />
                  {badge}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Facilities Section
function FacilitiesSection() {
  const facilities = [
    {
      name: "Ruang Kelas Nyaman",
      description: "Ruang kelas ber-AC dengan dekorasi menarik dan furniture ramah anak",
      icon: Building2,
      color: "coral",
    },
    {
      name: "Area Bermain Indoor",
      description: "Playground indoor yang aman dengan berbagai permainan edukatif",
      icon: HomeIcon,
      color: "sunny",
    },
    {
      name: "Mainan Bervariasi",
      description: "Banyak jenis mainan interaktif yang dapat membantu menstimulasi anak",
      icon: Blocks,
      color: "mint",
    },
    {
      name: "Ruang Musik & Seni",
      description: "Ruang khusus untuk kegiatan seni, musik, dan kreativitas anak",
      icon: Music,
      color: "sky",
    },
    {
      name: "Perpustakaan Mini",
      description: "Koleksi buku cerita dan buku bergambar yang lengkap",
      icon: BookOpen,
      color: "lavender",
    },
    {
      name: "Area Makan Bersih",
      description: "Kantin dengan menu sehat dan bergizi untuk si kecil",
      icon: Heart,
      color: "peach",
    },
  ];

  const colorClasses: Record<string, { bg: string; light: string; border: string }> = {
    coral: { bg: "bg-coral", light: "bg-coral-light/50", border: "border-coral/30" },
    sunny: { bg: "bg-sunny", light: "bg-sunny-light/50", border: "border-sunny/30" },
    mint: { bg: "bg-mint", light: "bg-mint-light/50", border: "border-mint/30" },
    sky: { bg: "bg-sky", light: "bg-sky-light/50", border: "border-sky/30" },
    lavender: { bg: "bg-lavender", light: "bg-lavender-light/50", border: "border-lavender/30" },
    peach: { bg: "bg-peach", light: "bg-cream", border: "border-peach/30" },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-light/20 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sunny to-coral shadow-lg"
          >
            <Building2 className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Fasilitas <span className="text-sunny">Lengkap</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Fasilitas modern dan aman yang mendukung proses belajar dan bermain
            anak
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const colors = colorClasses[facility.color];
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-2xl border-2 ${colors.border} ${colors.light} p-6 transition-shadow hover:shadow-xl`}
              >
                <motion.div
                  className={`${colors.bg} mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-lg`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="font-baloo mb-2 text-xl font-bold text-warm-brown">
                  {facility.name}
                </h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Learning Methods Section
function LearningMethodsSection() {
  const methods = [
    {
      title: "Bermain Sambil Belajar",
      description:
        "Anak belajar melalui aktivitas bermain yang menyenangkan dan terstruktur",
      icon: Blocks,
      color: "coral",
    },
    {
      title: "Sentra Pembelajaran",
      description:
        "Pembelajaran berbasis sentra: balok, seni, peran, persiapan, dan bahan alam",
      icon: Sparkles,
      color: "sky",
    },
    {
      title: "Proyek Tematik",
      description:
        "Kegiatan berbasis tema yang mengintegrasikan berbagai aspek perkembangan",
      icon: Palette,
      color: "sunny",
    },
    {
      title: "Eksplorasi Alam",
      description:
        "Belajar langsung dari alam melalui kegiatan berkebun dan outdoor",
      icon: TreePine,
      color: "mint",
    },
  ];

  const colorClasses: Record<string, { gradient: string; text: string }> = {
    coral: { gradient: "from-coral to-peach", text: "text-coral" },
    sky: { gradient: "from-sky to-lavender", text: "text-sky" },
    sunny: { gradient: "from-sunny to-coral", text: "text-sunny" },
    mint: { gradient: "from-mint to-sky", text: "text-mint" },
  };

  return (
    <section id="metode" className="relative overflow-hidden bg-cream py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 dotted-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-sunny shadow-lg"
          >
            <BookOpen className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Metode <span className="text-coral">Pembelajaran</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pendekatan pembelajaran inovatif yang disesuaikan dengan tahap
            perkembangan anak
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {methods.map((method, index) => {
            const colors = colorClasses[method.color];
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-playful"
              >
                <div className="flex gap-6 rounded-2xl bg-white p-6 shadow-lg">
                  <motion.div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-baloo mb-2 text-xl font-bold text-warm-brown">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Curriculum highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-coral via-sunny to-sky p-1">
            <div className="rounded-[1.4rem] bg-white p-8 md:p-12">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-sunny shadow-lg">
                  <GraduationCap className="h-10 w-10 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-baloo mb-2 text-2xl font-bold text-warm-brown">
                    Kurikulum Merdeka Belajar
                  </h3>
                  <p className="text-muted-foreground">
                    Kami menerapkan Kurikulum Merdeka yang berfokus pada
                    pengembangan karakter dan kompetensi anak sesuai profil pelajar
                    Pancasila. Setiap anak didorong untuk menjadi pribadi yang
                    beriman, kreatif, gotong royong, dan berkebinekaan global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Achievements Section
function AchievementsSection() {
  const achievements = [
    {
      title: "Juara 1 Lomba Menari",
      event: "Festival Seni PAUD Tingkat Kota",
      year: "2025",
      icon: Award,
      color: "sunny",
    },
    {
      title: "Juara 2 Lomba Mewarnai",
      event: "Kompetisi Kreativitas Anak",
      year: "2025",
      icon: Palette,
      color: "coral",
    },
    {
      title: "Sekolah PAUD Terbaik",
      event: "Penghargaan Dinas Pendidikan",
      year: "2024",
      icon: Star,
      color: "sky",
    },
    {
      title: "Juara 1 Lomba Bercerita",
      event: "Festival Literasi Anak",
      year: "2024",
      icon: BookOpen,
      color: "mint",
    },
  ];

  const colorClasses: Record<string, { bg: string; light: string }> = {
    sunny: { bg: "bg-sunny", light: "bg-sunny-light" },
    coral: { bg: "bg-coral", light: "bg-coral-light" },
    sky: { bg: "bg-sky", light: "bg-sky-light" },
    mint: { bg: "bg-mint", light: "bg-mint-light" },
  };

  return (
    <section id="prestasi" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sunny to-coral shadow-lg"
          >
            <Award className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Prestasi <span className="text-sunny">Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Berbagai pencapaian membanggakan dari siswa-siswi SPS Padu Ceria
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => {
            const colors = colorClasses[achievement.color];
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: 2 }}
                className="card-playful"
              >
                <div
                  className={`${colors.light} relative overflow-hidden rounded-2xl p-6 text-center`}
                >
                  {/* Trophy decoration */}
                  <motion.div
                    className="absolute -top-2 -right-2 opacity-10"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Award className="h-24 w-24 text-warm-brown" />
                  </motion.div>

                  <motion.div
                    className={`${colors.bg} relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <span className="mb-2 inline-block rounded-full bg-white px-3 py-1 text-sm font-medium text-muted-foreground">
                    {achievement.year}
                  </span>

                  <h3 className="font-baloo mb-1 text-lg font-bold text-warm-brown">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.event}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Activities Section
function ActivitiesSection() {
  const activities = [
    { name: "Hari Kartini", month: "April", icon: Flower2, color: "coral" },
    { name: "Pentas Seni", month: "Juni", icon: Music, color: "sky" },
    { name: "Outing Class", month: "Agustus", icon: TreePine, color: "mint" },
    { name: "Graduation", month: "Juli", icon: GraduationCap, color: "sunny" },
    { name: "Hari Ibu", month: "Desember", icon: Heart, color: "lavender" },
    { name: "Market Day", month: "Oktober", icon: PartyPopper, color: "peach" },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    coral: { bg: "bg-coral", text: "text-coral" },
    sky: { bg: "bg-sky", text: "text-sky" },
    mint: { bg: "bg-mint", text: "text-mint" },
    sunny: { bg: "bg-sunny", text: "text-sunny" },
    lavender: { bg: "bg-lavender", text: "text-lavender" },
    peach: { bg: "bg-peach", text: "text-peach" },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-mint-light/20 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-mint to-sky shadow-lg"
          >
            <Calendar className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl">
            Kegiatan <span className="text-mint">Seru</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Berbagai kegiatan menarik sepanjang tahun yang menambah pengalaman
            belajar anak
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => {
            const colors = colorClasses[activity.color];
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card-playful"
              >
                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg">
                  <motion.div
                    className={`${colors.bg} flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-md`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-baloo text-lg font-bold text-warm-brown">
                      {activity.name}
                    </h3>
                    <p className={`${colors.text} text-sm font-medium`}>
                      {activity.month}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Registration CTA Section
function RegistrationSection() {
  return (
    <section id="daftar" className="relative overflow-hidden bg-cream py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 h-40 w-40 rounded-full bg-coral/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-sunny/30"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-sky/20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-6"
          >
            <div className="relative inline-block">
              <motion.div
                className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-coral to-sunny shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Baby className="h-12 w-12 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="font-baloo mb-4 text-4xl font-bold text-warm-brown md:text-5xl lg:text-6xl">
            Daftarkan <span className="gradient-text">Anak Anda</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Berikan yang terbaik untuk si kecil. Bergabunglah dengan keluarga
            besar SPS Padu Ceria dan saksikan anak Anda tumbuh cerdas dan bahagia!
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-10 max-w-3xl"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, text: "Pendaftaran Mudah", desc: "Proses cepat & simpel" },
                { icon: Heart, text: "Gratis Trial Class", desc: "Coba sebelum daftar" },
                { icon: Award, text: "Diskon Early Bird", desc: "Hemat hingga 20%" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-2xl bg-white p-4 shadow-lg"
                >
                  <item.icon className="mx-auto mb-2 h-8 w-8 text-coral" />
                  <p className="font-baloo font-bold text-warm-brown">{item.text}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="https://wa.me/6281218116188?text=Saya mau daftarkan anak saya ummi. (pesan dikirim dari website)"
              target={"_blank"}
              className="btn-bounce group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral to-peach px-10 py-5 text-xl font-bold text-white shadow-xl shadow-coral/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-6 w-6" />
              Daftar Sekarang
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="https://wa.me/6281218116188?text=Assalaamu'alaikum. Saya mau tanya-tanya ummi terkait SPS Padu Ceria (pesan dikirim dari website)"
              className="btn-bounce inline-flex items-center justify-center gap-2 rounded-full border-2 border-sunny bg-white px-8 py-5 text-lg font-bold text-warm-brown shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              Hubungi Kami
            </motion.a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-coral" />
              +62 812-1811-6188
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-coral" />
              spspaduceria@gmail.com
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-warm-brown text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-coral to-sunny">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-baloo text-2xl font-bold">SPS Padu Ceria</h3>
                <p className="text-sm text-white/70">Bermain & Belajar</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-white/80">
              Lembaga pendidikan anak usia dini yang berkomitmen menciptakan
              generasi cerdas, kreatif, dan berkarakter melalui pembelajaran yang
              menyenangkan.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "youtube"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <Heart className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-baloo mb-4 text-lg font-bold">Menu</h4>
            <ul className="space-y-2">
              {["Home", "Profil", "Guru", "Prestasi", "Metode Belajar", "Daftar"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-baloo mb-4 text-lg font-bold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-coral" />
                <span className="text-white/80">
                  Taman Griya Kencana, Jl. Delima X, Kencana, Tanah Sareal, Kota Bogor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coral" />
                <span className="text-white/80">+62 812-1811-6188</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coral" />
                <span className="text-white/80">spspaduceria@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-coral" />
                <span className="text-white/80">
                  Senin - Jumat: 08.00 - 12.00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">
              © 2026 SPS Padu Ceria. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 fill-coral text-coral" />
              </motion.div>
              <span>untuk anak Indonesia</span>
              <a href={"https://hellogung.growww.site"}>- dibuat oleh hellogung</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProfileSection />
        <PrincipalSection />
        <TeachersSection />
        <FacilitiesSection />
        <LearningMethodsSection />
        <AchievementsSection />
        <ActivitiesSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
