"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { industries, navItems, services } from "@/lib/site";

type SearchEntry = { label: string; group: string; href: string };

const searchIndex: SearchEntry[] = [
  ...navItems.map((item) => ({ label: item.label, group: "Pages", href: item.href })),
  ...services.map((service) => ({
    label: service.title,
    group: "Services",
    href: `#${service.id}`,
  })),
  ...industries.map((industry) => ({
    label: industry.label,
    group: "Industries",
    href: "#industries",
  })),
  { label: "Why Choose PQB Solutions", group: "Pages", href: "#why-us" },
  { label: "Client Testimonials", group: "Pages", href: "#testimonials" },
  { label: "Request a Free Consultation", group: "Pages", href: "#contact" },
];

const sectionIds = ["home", "about", "services", "industries", "contact"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("home");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const timer = window.setTimeout(() => searchInputRef.current?.focus(), 60);
    return () => window.clearTimeout(timer);
  }, [searchOpen]);

  const setSearch = useCallback((open: boolean) => {
    setSearchOpen(open);
    if (!open) setQuery("");
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return searchIndex
      .filter((entry) => entry.label.toLowerCase().includes(trimmed))
      .slice(0, 6);
  }, [query]);

  const goTo = useCallback((href: string) => {
    setSearch(false);
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  }, [setSearch]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-900/8 bg-white/85 shadow-soft backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-white/60 bg-white/70 backdrop-blur-xl backdrop-saturate-150"
      }`}
    >
      <div className="shell">
        <div
          className={`flex items-center justify-between gap-4 transition-all duration-300 ${
            scrolled ? "h-[72px]" : "h-[80px]"
          }`}
        >
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              goTo("#home");
            }}
            aria-label="PQB Solutions, back to top"
            className="shrink-0"
          >
            <BrandLogo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9 xl:gap-11">
              {navItems.map((item) => {
                const isActive = `#${activeId}` === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        goTo(item.href);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative inline-flex flex-col items-center py-2 text-[0.95rem] font-medium transition-colors ${
                        isActive ? "text-brand-500" : "text-ink-700 hover:text-brand-500"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 h-[2.5px] w-7 rounded-full bg-brand-500"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearch(!searchOpen)}
              aria-expanded={searchOpen}
              aria-controls="site-search-panel"
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="grid size-11 place-items-center rounded-full text-ink-700 transition-colors hover:bg-mint-100 hover:text-brand-500"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            <motion.a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                goTo("#contact");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group hidden items-center gap-2.5 rounded-full bg-linear-to-r from-brand-500 to-brand-700 px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-soft transition-shadow hover:shadow-float sm:inline-flex"
            >
              Get a Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full text-ink-900 transition-colors hover:bg-mint-100 lg:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            id="site-search-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-900/5 bg-white"
          >
            <div className="shell py-5">
              <label htmlFor="site-search" className="sr-only">
                Search PQB Solutions
              </label>
              <div className="flex items-center gap-3 rounded-full border border-ink-900/10 bg-mint-50 px-5 py-3">
                <Search size={17} className="shrink-0 text-ink-500" />
                <input
                  id="site-search"
                  ref={searchInputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search services, industries or pages"
                  className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-300"
                />
              </div>

              {query.trim() ? (
                <ul className="mt-3 space-y-1" aria-label="Search results">
                  {results.length > 0 ? (
                    results.map((entry) => (
                      <li key={`${entry.group}-${entry.label}`}>
                        <button
                          type="button"
                          onClick={() => goTo(entry.href)}
                          className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-left text-sm text-ink-700 transition-colors hover:bg-mint-100 hover:text-brand-700"
                        >
                          <span>{entry.label}</span>
                          <span className="eyebrow text-ink-300">{entry.group}</span>
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2.5 text-sm text-ink-500">
                      No matches for that search.
                    </li>
                  )}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-ink-900/5 bg-white lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      goTo(item.href);
                    }}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      `#${activeId}` === item.href
                        ? "bg-mint-100 text-brand-700"
                        : "text-ink-700 hover:bg-mint-50"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    goTo("#contact");
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white"
                >
                  Get a Free Consultation
                  <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
