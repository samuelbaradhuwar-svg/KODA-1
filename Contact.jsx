import React from "react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { WHY_US } from "../data/content";

export default function WhyChooseUs() {
  return (
    <section id="about" data-nav-theme="dark" className="relative overflow-hidden bg-[#111827] py-24 sm:py-32">
      <div className="nova-grid pointer-events-none absolute inset-0 opacity-[0.25]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow dark>Why local businesses choose us</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A website that works as hard as you do
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-white/[0.08] bg-[#111420] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(37,99,235,0.35)]">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-[15.5px] font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
