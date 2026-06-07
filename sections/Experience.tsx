"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";
import { Briefcase, Calendar } from "lucide-react";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

export function Experience() {
  const [active, setActive] = useState(0);
  return (
    <section id="experience" style={{ padding:"90px 0" }}>
      <div className={W}>
        <SecTitle eyebrow="Experience" title="Where I've worked" sub="Hands-on internships in AI, data analytics, and software development." />
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {/* Tabs */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {EXPERIENCE.map((e,i)=>(
              <motion.button key={e.id} onClick={()=>setActive(i)}
                whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
                style={{ padding:"10px 18px", borderRadius:10, fontSize:13, fontWeight:600,
                  fontFamily:"var(--fB)", cursor:"none", transition:"all 0.25s",
                  border:`1.5px solid ${active===i?"var(--cy)":"var(--bd)"}`,
                  background: active===i ? "var(--cy-dim)" : "var(--s1)",
                  color: active===i ? "var(--cy)" : "var(--tx2)",
                  boxShadow: active===i ? "0 0 20px rgba(0,220,255,0.15)" : "none" }}>
                {e.company}
                <span style={{ display:"block", fontSize:10, opacity:0.7, fontFamily:"var(--fM)", marginTop:1 }}>{e.period}</span>
              </motion.button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity:0, y:20, scale:0.98 }}
              animate={{ opacity:1, y:0,  scale:1   }}
              exit={{    opacity:0, y:-16, scale:0.98 }}
              transition={{ duration:0.35, ease:[0.16,1,0.3,1] }}
              style={{ padding:"30px 32px", borderRadius:20,
                border:"1px solid var(--bdh)", background:"var(--s1)",
                boxShadow:"0 0 40px rgba(0,220,255,0.04)" }}>

              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:14, marginBottom:18 }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:12,
                    background:"linear-gradient(135deg,var(--cy-dim),var(--vi-dim))",
                    border:"1px solid var(--bdh)",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Briefcase size={18} style={{color:"var(--cy)"}}/>
                  </div>
                  <div>
                    <h3 style={{ fontFamily:"var(--fT)", fontSize:21, color:"var(--tx)", marginBottom:4 }}>
                      {EXPERIENCE[active].role}
                    </h3>
                    <div style={{ fontSize:14, fontWeight:600,
                      background:"linear-gradient(90deg,var(--cy),var(--vi))",
                      WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                      @ {EXPERIENCE[active].company}
                    </div>
                  </div>
                </div>
                <span style={{ display:"flex", alignItems:"center", gap:6,
                  padding:"5px 14px", borderRadius:8, border:"1px solid var(--bd)",
                  fontFamily:"var(--fM)", fontSize:12, color:"var(--tx2)", alignSelf:"flex-start" }}>
                  <Calendar size={11}/> {EXPERIENCE[active].period}
                </span>
              </div>

              <p style={{ color:"var(--tx2)", fontSize:15, lineHeight:1.8, marginBottom:22 }}>
                {EXPERIENCE[active].description}
              </p>

              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {EXPERIENCE[active].tags.map((t,i)=>(
                  <motion.span key={t} initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}}
                    transition={{delay:i*0.05}}
                    style={{ padding:"4px 12px", borderRadius:8, border:"1px solid var(--bd)",
                      fontFamily:"var(--fM)", fontSize:11, color:"var(--tx2)", background:"var(--bg)" }}>
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
