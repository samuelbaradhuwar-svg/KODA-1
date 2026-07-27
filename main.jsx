import React from "react";

export function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide ${
        dark ? "border-white/10 bg-white/5 text-blue-300" : "border-blue-100 bg-blue-50 text-blue-700"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      {children}
    </span>
  );
}
