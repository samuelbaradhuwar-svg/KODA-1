import React from "react";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ children, onClick, className = "", icon: Icon = ArrowRight }) {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_12px_36px_-6px_rgba(37,99,235,0.75)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${className}`}
    >
      {children}
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}

export function SecondaryButton({ children, onClick, dark = false, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
        dark
          ? "border-white/15 text-white bg-white/[0.03] hover:bg-white/10 backdrop-blur"
          : "border-slate-200 text-slate-900 bg-white hover:bg-[#F8FAFC] hover:border-slate-300"
      } ${className}`}
    >
      {children}
    </button>
  );
}
