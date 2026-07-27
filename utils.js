import React from "react";
import { Check } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons";
import { scrollToId } from "../lib/utils";
import { PLANS, COMPARISON_ROWS } from "../data/content";

function PricingCard({ plan, i }) {
  return (
    <Reveal delay={i * 90}>
      <div
        className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
          plan.highlighted
            ? "border-2 border-blue-600 bg-[#111827] text-white shadow-[0_30px_70px_-25px_rgba(37,99,235,0.5)] lg:-translate-y-3"
            : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1.5 hover:shadow-xl"
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-[11px] font-semibold tracking-wide text-white shadow-lg">
            MOST POPULAR
          </span>
        )}

        <h3 className={`font-display text-lg font-semibold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
          {plan.name}
        </h3>
        <p className={`mt-2 text-sm ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-4xl font-semibold">{plan.price}</span>
          <span className={`text-xs ${plan.highlighted ? "text-slate-500" : "text-slate-400"}`}>{plan.note}</span>
        </div>

        <ul className="mt-8 flex-1 space-y-3.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <span
                className={`mt-0.5 grid h-4.5 w-4.5 flex-shrink-0 place-items-center rounded-full ${
                  plan.highlighted ? "bg-blue-500/20 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className={plan.highlighted ? "text-slate-300" : "text-slate-600"}>{f}</span>
            </li>
          ))}
        </ul>

        {plan.highlighted ? (
          <PrimaryButton onClick={() => scrollToId("contact")} className="mt-8 w-full">
            Book a Free Consultation
          </PrimaryButton>
        ) : (
          <SecondaryButton onClick={() => scrollToId("contact")} className="mt-8 w-full">
            Book a Free Consultation
          </SecondaryButton>
        )}
      </div>
    </Reveal>
  );
}

function ComparisonCell({ value }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-blue-600" strokeWidth={3} />;
  if (value === false) return <span className="mx-auto block h-px w-3 bg-slate-300" />;
  return <span className="text-[13px] text-slate-600">{value}</span>;
}

function ComparisonTable() {
  return (
    <Reveal delay={120} className="mt-16 hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#F8FAFC]">
            <th className="px-6 py-4 text-sm font-semibold text-slate-900">Compare plans</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-500">Starter</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Business</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-500">Premium</th>
          </tr>
        </thead>
        <tbody>
          {COMPARISON_ROWS.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"}>
              <td className="px-6 py-3.5 text-[13.5px] text-slate-700">{row.label}</td>
              <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.starter} /></td>
              <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.business} /></td>
              <td className="px-6 py-3.5 text-center"><ComparisonCell value={row.premium} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" data-nav-theme="light" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Simple pricing, built for local businesses
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-slate-500">No hidden fees. No jargon. Just a website that pays for itself.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} i={i} />
          ))}
        </div>

        <ComparisonTable />
      </div>
    </section>
  );
}
