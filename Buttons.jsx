import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Logo } from "./ui/Logo";
import { scrollToId } from "../lib/utils";
import { NAV_LINKS, SERVICES } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              We design and build modern websites that help local businesses get found, get trusted and get more customers.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-blue-500/40 hover:text-blue-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Navigate</p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToId(l.id)} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Services</p>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title} className="text-sm text-slate-400">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Legal</p>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 transition-colors hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} KODA. All rights reserved.</p>
          <p className="text-xs text-slate-600">Designed &amp; built with care in South Africa.</p>
        </div>
      </div>
    </footer>
  );
}
