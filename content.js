import React, { useState } from "react";
import { Check, Send, Phone, Mail } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { PrimaryButton } from "./ui/Buttons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" data-nav-theme="dark" className="relative overflow-hidden bg-[#111827] py-24 sm:py-32">
      <div className="nova-grid pointer-events-none absolute inset-0 opacity-[0.25]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow dark>Get in touch</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's build something that grows your business
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-slate-400">
              Tell us a little about your business and we'll be in touch within one working day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-white/[0.08] bg-[#111420] p-6 shadow-2xl shadow-black/40 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <Check className="h-6 w-6" strokeWidth={3} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">Request received</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Thanks {form.name || "there"}, we'll reach out shortly to schedule your free consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Full name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Dlamini"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@business.co.za"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="082 123 4567"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">Business name</label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your business"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-medium text-slate-400">What do you need help with?</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your business and what you're looking for..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <PrimaryButton className="w-full sm:w-auto" icon={Send}>
                      Book a Free Consultation
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <a
                href="tel:+27821234567"
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#111420] p-5 transition-colors hover:border-blue-500/30"
              >
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-blue-500/15 text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Call us</p>
                  <p className="text-sm font-semibold text-white">+27 82 123 4567</p>
                </div>
              </a>

              <a
                href="mailto:hello@koda.co.za"
                className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#111420] p-5 transition-colors hover:border-blue-500/30"
              >
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-blue-500/15 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email us</p>
                  <p className="text-sm font-semibold text-white">hello@koda.co.za</p>
                </div>
              </a>

              <div className="min-h-[180px] flex-1 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="KODA location"
                  src="https://www.google.com/maps?q=Cape+Town,+South+Africa&output=embed"
                  className="h-full min-h-[180px] w-full grayscale invert-[0.92] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
