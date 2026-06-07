"use client";
import { motion } from "framer-motion";
import { ACHIEVEMENTS, CERTS, SITE } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";
import { Btn } from "@/components/Btn";
import { CheckCircle, Award, Download } from "lucide-react";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

export function Achievements() {
  return (
    <section id="achievements" style={{ padding:"90px 0", background:"var(--s1)" }}>
      <div className={W}>
        <SecTitle eyebrow="Achievements & Certifications" title="Recognition & credentials"
          sub="Hackathon wins, project prizes, and industry certifications." />

        {/* Achievement cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:14, marginBottom:48 }}>
          {ACHIEVEMENTS.map((a,i)=>(
            <motion.div key={a.id}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.1 }}
              className="ch"
              style={{ padding:"24px", borderRadius:18,
                border:"1px solid var(--bdh)", background:"var(--bg)" }}>
              {/* Top gradient bar */}
              <div style={{ height:2, borderRadius:1, marginBottom:18,
                background: i===0
                  ? "linear-gradient(90deg,var(--cy),var(--vi))"
                  : i===1
                    ? "linear-gradient(90deg,var(--vi),var(--cy))"
                    : "var(--cy)" }}/>
              <div style={{ fontSize:28, marginBottom:12 }}>{a.icon}</div>
              <h3 style={{ fontFamily:"var(--fT)", fontSize:16, color:"var(--tx)",
                marginBottom:5, lineHeight:1.35 }}>{a.title}</h3>
              <div style={{ fontFamily:"var(--fM)", fontSize:10, marginBottom:10,
                background:"linear-gradient(90deg,var(--cy),var(--vi))",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{a.sub}</div>
              <p style={{ fontSize:13, color:"var(--tx2)", lineHeight:1.75 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
          <Award size={16} style={{color:"var(--cy)"}}/>
          <h3 style={{ fontFamily:"var(--fT)", fontSize:20, color:"var(--tx)" }}>Certifications</h3>
          <span style={{ padding:"2px 10px", borderRadius:100, background:"var(--cy-dim)",
            fontFamily:"var(--fM)", fontSize:11, color:"var(--cy)" }}>{CERTS.length}</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(290px,1fr))",
          gap:9, marginBottom:28 }}>
          {CERTS.map((c,i)=>(
            <motion.div key={c.name}
              initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.35, delay:i*0.04 }}
              style={{ display:"flex", alignItems:"center", gap:12,
                padding:"12px 15px", borderRadius:11, border:"1px solid var(--bd)",
                background:"var(--bg)", transition:"border-color 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.borderColor="var(--bdh)"}
              onMouseLeave={e=>e.currentTarget.style.borderColor="var(--bd)"}>
              <CheckCircle size={14} style={{color:"var(--cy)",flexShrink:0}}/>
              <div>
                <div style={{ fontSize:12, color:"var(--tx)", fontFamily:"var(--fB)", fontWeight:500 }}>{c.name}</div>
                <div style={{ fontSize:10, color:"var(--tx2)", marginTop:2, fontFamily:"var(--fM)" }}>{c.issuer} · {c.year}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ padding:"22px", borderRadius:18, border:"1px solid var(--bdh)",
            background:"var(--bg)", marginBottom:28 }}>
          <div style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--cy)",
            marginBottom:14, letterSpacing:"0.12em", textTransform:"uppercase" }}>Education</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(195px,1fr))", gap:12 }}>
            {[
              { d:"B.Sc. Artificial Intelligence", s:"Aditya Degree College, Vizag", y:"2023–2026", g:"CGPA 8.21", hi:true },
              { d:"Senior Secondary (MPC)",        s:"Sri Chaitanya Junior College",  y:"2023",       g:"64%",       hi:false },
              { d:"Secondary Education (SSC)",     s:"Sri Srinivasa High School",     y:"2021",       g:"97.33% 🏅", hi:false },
            ].map(({d,s,y,g,hi})=>(
              <div key={d} style={{ padding:14, borderRadius:12,
                border:`1px solid ${hi?"var(--bdh)":"var(--bd)"}`,
                background:hi?"var(--cy-glow)":"transparent" }}>
                <div style={{ fontSize:12, fontWeight:600, color:"var(--tx)", marginBottom:3 }}>{d}</div>
                <div style={{ fontSize:11, color:"var(--tx2)", marginBottom:6 }}>{s}</div>
                <div style={{ display:"flex", gap:10 }}>
                  <span style={{ fontFamily:"var(--fM)", fontSize:11, color:hi?"var(--cy)":"var(--tx2)" }}>{y}</span>
                  <span style={{ fontFamily:"var(--fM)", fontSize:11, color:"var(--gr)" }}>{g}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{ textAlign:"center" }}>
          <Btn href={SITE.resume} target="_blank" variant="primary" size="lg">
            <Download size={14}/> View Full Resume
          </Btn>
        </div>
      </div>
    </section>
  );
}
