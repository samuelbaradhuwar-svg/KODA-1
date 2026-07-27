import {
  LayoutTemplate, RefreshCcw, ShoppingCart, CalendarCheck, MapPin,
  TrendingUp, Wrench, Mail, Zap, Smartphone, Search, ShieldCheck,
  MessageCircle, Map as MapIcon, Palette, Clock3, Utensils, Stethoscope,
  Scale, Car, HardHat, Sparkles as SparklesIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Pricing", id: "pricing" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const SERVICES = [
  { icon: LayoutTemplate, title: "Website Design", desc: "Websites built around how your customers actually search, browse and buy, designed to turn visits into enquiries." },
  { icon: RefreshCcw, title: "Website Redesign", desc: "A modern rebuild of your existing site, keeping your business the same while delivering faster load times, sharper design and better results." },
  { icon: ShoppingCart, title: "Ecommerce Stores", desc: "Fully functional online stores with secure checkout, inventory management and shopping flows designed for mobile." },
  { icon: CalendarCheck, title: "Booking Systems", desc: "Let customers book appointments, tables or services online, 24/7, without a single phone call." },
  { icon: MapPin, title: "Google Business Profile", desc: "A fully optimised profile so your business shows up on Google Search and Maps when local customers look for you." },
  { icon: TrendingUp, title: "SEO Optimisation", desc: "Onpage and technical SEO that helps your website rank higher and get found by people ready to buy." },
  { icon: Wrench, title: "Website Maintenance", desc: "Ongoing updates, backups and security monitoring so your site stays fast, safe and always online." },
  { icon: Mail, title: "Business Email Setup", desc: "Professional @yourbusiness email addresses that build instant credibility with every message you send." },
];

export const WHY_US = [
  { icon: Zap, title: "Lightning Fast Websites", desc: "Built for speed, so visitors never bounce before your site even loads." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Every site is designed with mobile in mind first, because most of your customers are on their phones." },
  { icon: Search, title: "SEO Ready", desc: "Structured from day one to be found by Google and the customers searching on it." },
  { icon: ShieldCheck, title: "Secure Hosting", desc: "SSL, backups and monitoring included, so your site stays online and protected." },
  { icon: MessageCircle, title: "WhatsApp Integration", desc: "WhatsApp buttons that turn visitors into conversations with a single tap, instantly." },
  { icon: MapIcon, title: "Google Maps Integration", desc: "Make it effortless for local customers to find your door." },
  { icon: Palette, title: "Professional Design", desc: "A site that looks and feels as credible as the business you've built." },
  { icon: Clock3, title: "Fast Turnaround", desc: "Most projects launch in days, not months, without cutting corners." },
];

export const PORTFOLIO = [
  { name: "Ember & Oak Bistro", type: "Restaurant", icon: Utensils, from: "from-amber-500", to: "to-orange-600", blurb: "Online menu, table bookings and a 3x increase in weekend reservations." },
  { name: "Riverside Medical Practice", type: "Medical Practice", icon: Stethoscope, from: "from-sky-500", to: "to-blue-600", blurb: "Online appointment booking that cut front desk calls by 40%." },
  { name: "Reid & Associates", type: "Law Firm", icon: Scale, from: "from-slate-600", to: "to-slate-900", blurb: "A rebuild focused on credibility that doubled qualified consultation requests." },
  { name: "Torque Auto Care", type: "Mechanic", icon: Car, from: "from-rose-500", to: "to-red-600", blurb: "Service booking and WhatsApp quotes, built for customers on the move." },
  { name: "Site & Steel Builders", type: "Construction", icon: HardHat, from: "from-yellow-500", to: "to-amber-600", blurb: "A project gallery and quote form that now drives most new enquiries." },
  { name: "Lumière Beauty Bar", type: "Beauty Salon", icon: SparklesIcon, from: "from-fuchsia-500", to: "to-pink-600", blurb: "A site built around booking that keeps the calendar full, automatically." },
];

export const PLANS = [
  {
    name: "Starter",
    price: "R2,999",
    note: "once off",
    desc: "A polished single page presence for businesses just getting online.",
    features: ["One page website", "WhatsApp button", "Contact form", "Google Maps integration", "Basic SEO setup"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "R5,999",
    note: "once off",
    desc: "A complete website with several pages, built to win trust and generate leads.",
    features: ["Five page website", "Photo gallery", "Client testimonials", "Onpage SEO", "Google indexing setup", "WhatsApp + Maps integration"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "From R9,999",
    note: "custom quote",
    desc: "For businesses that sell or book online and need a site to match.",
    features: ["Booking system", "Ecommerce store", "Advanced SEO", "Custom integrations", "Priority support"],
    highlighted: false,
  },
];

export const COMPARISON_ROWS = [
  { label: "Pages", starter: "1 page", business: "5 pages", premium: "Unlimited" },
  { label: "WhatsApp integration", starter: true, business: true, premium: true },
  { label: "Google Maps integration", starter: true, business: true, premium: true },
  { label: "SEO setup", starter: "Basic", business: "Onpage SEO", premium: "Advanced" },
  { label: "Photo gallery", starter: false, business: true, premium: true },
  { label: "Client testimonials", starter: false, business: true, premium: true },
  { label: "Online booking system", starter: false, business: false, premium: true },
  { label: "Ecommerce store", starter: false, business: false, premium: true },
  { label: "Custom integrations", starter: false, business: false, premium: true },
];

export const TESTIMONIALS = [
  { name: "Thandiwe Nkosi", role: "Owner, Ember & Oak Bistro", city: "Cape Town", text: "Bookings went up almost immediately. The site loads fast, looks incredible on mobile and customers actually compliment it." },
  { name: "Dr. Kevin Petersen", role: "Riverside Medical Practice", city: "Johannesburg", text: "Our front desk used to be buried in phone calls. Now most patients just book online. KODA nailed the brief." },
  { name: "Marius van der Berg", role: "Site & Steel Builders", city: "Pretoria", text: "Professional from the first call to launch day. The gallery alone has brought us three new contracts this month." },
];

export const FAQS = [
  { q: "How long does a website take?", a: "Most single page sites launch within five to seven working days. Websites with multiple pages, or those with a booking system or ecommerce store, typically take two to four weeks, depending on content and revisions." },
  { q: "Do you provide hosting?", a: "Yes. Every website we build includes secure, managed hosting with SSL, backups and uptime monitoring, so you never have to think about the technical side." },
  { q: "Can I update my website?", a: "Absolutely. We build every site with a simple content editor so you can update text, images and offers yourself, and we're always on hand if you'd rather we do it." },
  { q: "Do you provide support?", a: "Yes. Every plan includes support after launch, and our maintenance service covers ongoing updates, security monitoring and small changes for a flat monthly fee." },
  { q: "Do I need to know anything technical to get started?", a: "No. We handle the strategy, design, build and setup from start to finish. All we need from you is a short call about your business." },
];
