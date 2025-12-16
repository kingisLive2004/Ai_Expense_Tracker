"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
// ADDED: Import motion from framer-motion
import { motion } from "framer-motion";
import {
  statsData,
  featuresData,
  howItWorksData,
  testimonialsData,
} from "@/data/landing"; // Adjust path as needed

export default function HomePage() {
  // Define a standard animation variant for sections
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 }, // Start invisible and 50px down
    whileInView: { opacity: 1, y: 0 }, // Animate to visible and original position
    viewport: { once: true }, // Only animate once
    transition: { duration: 0.6, ease: "easeInOut" }, // Smooth 0.6s transition
  };

  return (
    // pt-16 ensures content starts below the fixed 4rem (h-16) header
    <main className="bg-background text-foreground bg-grey-200">
      {/* Hero Section - We'll give this a simple fade-in on load */}
      <motion.section
        className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl leading-tight">
          <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Manage your Finances
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            with Intelligent AI
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          A smart expense-tracking platform powered by AI to help you
          <span className="font-medium text-purple-400">
            {" "}
            track, analyze, and optimize{" "}
          </span>
          your finances effortlessly.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/demo">Get Demo</Link>
          </Button>
        </div>
      </motion.section>

      {/* Stats Section */}
      {/* CHANGED: <section> to <motion.section> and added animation props */}
      <motion.section
        className="bg-muted py-16 rounded-lg border"
        {...sectionAnimation} // Spread the animation props
      >
        <div className="container mx-auto grid grid-cols-2 gap-8 text-center md:grid-cols-4 ">
          {statsData.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      {/* CHANGED: <section> to <motion.section> and added animation props */}
      <motion.section
        className="container mx-auto px-4 py-20 md:py-32"
        {...sectionAnimation}
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl 
                 bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500 
                 bg-clip-text text-transparent"
          >
            Everything you need. Nothing you don't.
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-lg 
                text-muted-foreground"
          >
            Our app is packed with
            <span className="font-medium text-purple-400"> AI-powered </span>
            features to help you take control of your finances.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-xl border 
                 bg-gradient-to-br from-background to-purple-950/5 
                 p-6 transition-all duration-300 ease-in-out
                 hover:-translate-y-1 hover:shadow-xl 
                 hover:border-purple-500/30
                 focus-within:-translate-y-1 focus-within:shadow-xl"
            >
              <div className="text-purple-500">{feature.icon}</div>

              <h3
                className="text-xl font-semibold 
                     bg-gradient-to-r from-purple-500 to-pink-500 
                     bg-clip-text text-transparent"
              >
                {feature.title}
              </h3>

              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      {/* CHANGED: <section> to <motion.section> and added animation props */}
      <motion.section className="bg-muted py-20 md:py-32" {...sectionAnimation}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2
              className="text-3xl font-bold tracking-tight md:text-4xl
                   bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500
                   bg-clip-text text-transparent"
            >
              Get started in 3 simple steps
            </h2>
          </div>

          <div className="relative mt-16 grid gap-12 md:grid-cols-3">
            {/* Dashed line connecting steps (visible on desktop) */}
            <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 md:block">
              <svg
                className="w-full"
                height="2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  strokeWidth="2"
                  stroke="url(#stepGradient)"
                  strokeDasharray="8 8"
                />
                <defs>
                  <linearGradient
                    id="stepGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9c5dd6ff" />
                    <stop offset="50%" stopColor="#c59fe9ff" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {howItWorksData.map((step) => (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full
                     bg-gradient-to-br from-purple-600 via-violet-500 to-fuchsia-500
                     text-white shadow-lg ring-4 ring-purple-500/20"
                >
                  {step.icon}
                </div>

                <h3
                  className="mt-6 text-xl font-semibold
                       bg-gradient-to-r from-purple-500 to-pink-500
                       bg-clip-text text-transparent"
                >
                  {step.title}
                </h3>

                <p className="mt-2 text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      {/* CHANGED: <section> to <motion.section> and added animation props */}
      <motion.section
        className="container mx-auto px-4 py-20 md:py-32"
        {...sectionAnimation}
      >
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl
           bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-500
           bg-clip-text text-transparent"
          >
            Trusted by users worldwide
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 ">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-lg border bg-card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg border bg-gradient-to-br from-background via-purple-950/5 to-background text-card-foreground py-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-purple-500/30"
            >
              <blockquote className="text-lg italic text-foreground font-serif">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-6 flex items-center gap-4 ">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
