@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

.font-display {
  font-family: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
}
.font-sans {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
}

.nova-grid {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%);
}
.nova-grid-light {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 28px 28px;
}

@keyframes nova-shimmer {
  0%,
  100% {
    opacity: 0.55;
  }
  50% {
    opacity: 1;
  }
}
.nova-shimmer {
  animation: nova-shimmer 2.4s ease-in-out infinite;
}

@keyframes nova-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
.nova-float {
  animation: nova-float 4s ease-in-out infinite;
}
.nova-float-slow {
  animation: nova-float 5.5s ease-in-out infinite;
  animation-delay: 0.5s;
}

@media (prefers-reduced-motion: reduce) {
  .nova-shimmer,
  .nova-float,
  .nova-float-slow {
    animation: none !important;
  }
  * {
    scroll-behavior: auto !important;
  }
}
