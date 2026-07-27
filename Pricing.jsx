import React from "react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { SERVICES } from "../data/content";

function ServiceCard({ icon: Icon, title, desc, i }) {
  return (
    <Reveal delay={i * 60}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_20px_50px_-20px_rgba(37,99,235,0.35)]">
        <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
        <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          <Icon className="h-5.5 w-5.5" />
        </div>
        <h3 className="font-display text-[17px] font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{desc}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" data-nav-theme="light" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Everything your business needs to succeed online
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-slate-500">
              From your first website to ongoing SEO and support, one studio for every step.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
