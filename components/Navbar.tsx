"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SITE } from "@/lib/constants";
import { X, Download } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin:"-40% 0px -40% 0px" }
    );
    NAV.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll when sidebar open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior:"smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ y:-70, opacity:0 }}
        animate={{ y:0,  opacity:1 }}
        transition={{ duration:0.8, delay:2.6, ease:[0.16,1,0.3,1] }}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:200,
          backdropFilter: scrolled ? "blur(22px)" : "none",
          background:     scrolled ? "rgba(3,5,9,0.88)" : "transparent",
          borderBottom:   scrolled ? "1px solid var(--bd)" : "1px solid transparent",
          transition:"all 0.4s ease",
        }}
      >
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px", height:66,
          display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            style={{ display:"flex", alignItems:"center", gap:10, background:"none", border:"none", cursor:"none" }}>
            <motion.div whileHover={{ rotate:360 }} transition={{ duration:0.5 }}
              style={{ width:36, height:36, borderRadius:10,
                background:"linear-gradient(135deg,var(--cy),var(--vi))",
                display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"var(--fT)", fontWeight:800, fontSize:13, color:"var(--bg)" }}>AN</span>
            </motion.div>
            <span className="hidden sm:block"
              style={{ fontFamily:"var(--fT)", fontWeight:700, fontSize:15, color:"var(--tx)" }}>
              Aman Nanda
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex" style={{ alignItems:"center", gap:2, listStyle:"none" }}>
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <button onClick={() => go(href)} style={{
                  padding:"7px 14px", borderRadius:8, fontSize:13, fontWeight:500,
                  fontFamily:"var(--fB)", background:"none", border:"none", cursor:"none",
                  color: active===href ? "var(--cy)" : "var(--tx2)",
                  backgroundColor: active===href ? "var(--cy-dim)" : "transparent",
                  transition:"all 0.2s",
                } as React.CSSProperties}>
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Resume + hamburger */}
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <motion.a href={SITE.resume} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}
              className="hidden md:flex"
              style={{ padding:"7px 18px", borderRadius:10, fontSize:13, fontWeight:600,
                border:"1.5px solid var(--cy)", color:"var(--cy)", fontFamily:"var(--fB)",
                display:"inline-flex", alignItems:"center", gap:7, transition:"background 0.2s" }}
              onMouseEnter={e=>((e.currentTarget as HTMLElement).style.background="var(--cy-dim)")}
              onMouseLeave={e=>((e.currentTarget as HTMLElement).style.background="transparent")}>
              <Download size={13}/> Resume
            </motion.a>

            {/* Hamburger */}
            <button onClick={() => setOpen(true)} style={{
              background:"none", border:"1px solid var(--bd)", borderRadius:9, cursor:"none",
              padding:"8px 10px", display:"flex", flexDirection:"column", gap:5, alignItems:"center" }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display:"block",
                  width: i===1 ? 14 : 20,
                  height:1.5, background:"var(--cy)", borderRadius:1,
                  transition:"width 0.2s",
                }}/>
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen sidebar overlay ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              transition={{ duration:0.3 }}
              onClick={() => setOpen(false)}
              style={{ position:"fixed", inset:0, zIndex:299,
                background:"rgba(3,5,9,0.75)", backdropFilter:"blur(6px)" }}
            />

            {/* Sidebar panel */}
            <motion.div
              initial={{ x:"100%" }} animate={{ x:"0%" }} exit={{ x:"100%" }}
              transition={{ duration:0.45, ease:[0.76,0,0.24,1] }}
              style={{ position:"fixed", top:0, right:0, bottom:0, width:"min(420px,100vw)",
                zIndex:300, background:"var(--s1)",
                borderLeft:"1px solid var(--bd)",
                display:"flex", flexDirection:"column", padding:"32px",
                boxShadow:"-40px 0 80px rgba(0,0,0,0.8)" }}>

              {/* Close btn */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:48 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:32, height:32, borderRadius:8,
                    background:"linear-gradient(135deg,var(--cy),var(--vi))",
                    display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ fontFamily:"var(--fT)", fontWeight:800, fontSize:12, color:"var(--bg)" }}>AN</span>
                  </div>
                  <span style={{ fontFamily:"var(--fT)", fontWeight:700, fontSize:14, color:"var(--tx)" }}>Aman Nanda</span>
                </div>
                <motion.button onClick={() => setOpen(false)}
                  whileHover={{ scale:1.1, rotate:90 }} whileTap={{ scale:0.9 }}
                  style={{ width:36, height:36, borderRadius:9, border:"1px solid var(--bd)",
                    background:"none", cursor:"none", display:"flex", alignItems:"center", justifyContent:"center",
                    color:"var(--tx2)" }}>
                  <X size={16}/>
                </motion.button>
              </div>

              {/* Nav links */}
              <nav style={{ flex:1 }}>
                {NAV.map(({ label, href }, i) => (
                  <motion.div key={href}
                    initial={{ opacity:0, x:32 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ delay:i * 0.06, duration:0.4, ease:[0.16,1,0.3,1] }}>
                    <button onClick={() => go(href)}
                      style={{ display:"flex", alignItems:"center", gap:16, width:"100%",
                        padding:"14px 0", background:"none", border:"none", cursor:"none",
                        borderBottom:"1px solid var(--bd)", textAlign:"left" }}>
                      <span style={{ fontFamily:"var(--fM)", fontSize:11, color:"var(--cy)",
                        width:24, opacity:0.6 }}>0{i+1}</span>
                      <span style={{
                        fontFamily:"var(--fT)", fontSize:28, fontWeight:700,
                        color: active===href ? "var(--cy)" : "var(--tx)",
                        transition:"color 0.2s",
                      }}>{label}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom: resume + status */}
              <motion.div
                initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:0.4, duration:0.4 }}
                style={{ marginTop:32 }}>
                <a href={SITE.resume} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                    padding:"13px", borderRadius:12, marginBottom:16,
                    background:"linear-gradient(135deg,var(--cy),var(--vi))",
                    color:"var(--bg)", fontSize:14, fontWeight:700, fontFamily:"var(--fB)" }}>
                  <Download size={15}/> Download Resume
                </a>
                <div style={{ display:"flex", alignItems:"center", gap:8, justifyContent:"center" }}>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:"var(--gr)",
                    boxShadow:"0 0 8px var(--gr)", display:"inline-block" }}/>
                  <span style={{ fontFamily:"var(--fM)", fontSize:11, color:"var(--tx2)" }}>
                    Open to opportunities
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
