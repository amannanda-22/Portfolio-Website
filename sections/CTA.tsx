"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Btn } from "@/components/Btn";
import { NeuralBg } from "@/components/NeuralBg";
import { Mail, Download } from "lucide-react";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

export function CTA() {
  return (
    <section style={{ padding:"90px 0" }}>
      <div className={W}>
        <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.75 }}
          style={{ position:"relative", textAlign:"center", padding:"72px 32px",
            borderRadius:26, border:"1px solid var(--bdh)", overflow:"hidden" }}>

          {/* Neural BG inside CTA */}
          <NeuralBg opacity={0.35}/>

          {/* Glow */}
          <div style={{ position:"absolute", top:"50%", left:"50%",
            transform:"translate(-50%,-50%)", width:480, height:300,
            borderRadius:"50%", background:"radial-gradient(circle,rgba(0,220,255,0.07) 0%,transparent 70%)",
            filter:"blur(40px)", pointerEvents:"none" }}/>

          <div style={{ position:"relative", zIndex:1 }}>
            <motion.div initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }} transition={{ duration:0.45 }}
              style={{ display:"inline-flex", alignItems:"center", gap:8,
                padding:"6px 14px", borderRadius:100,
                border:"1px solid rgba(0,232,122,0.3)", background:"rgba(0,232,122,0.05)",
                fontFamily:"var(--fM)", fontSize:11, color:"var(--gr)", marginBottom:22 }}>
              <span className="animate-pulseGlow"
                style={{ width:6, height:6, borderRadius:"50%",
                  background:"var(--gr)", display:"inline-block" }}/>
              Open to Opportunities
            </motion.div>

            <h2 style={{ fontFamily:"var(--fT)",
              fontSize:"clamp(2rem,5vw,3.1rem)", color:"var(--tx)", marginBottom:14 }}>
              Got a project or{" "}
              <span className="grad-cy-vi">opportunity?</span>
            </h2>
            <p style={{ color:"var(--tx2)", fontSize:15, maxWidth:490,
              margin:"0 auto 32px", lineHeight:1.75 }}>
              Looking for internships, collaborations, and AI projects.
              Let's build something great together.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center" }}>
              <Btn href="#contact"       variant="primary" size="lg"><Mail size={14}/> Get In Touch</Btn>
              <Btn href={SITE.resume}  target="_blank" variant="outline" size="lg"><Download size={14}/> Resume</Btn>
              <Btn href={SITE.linkedin} target="_blank" variant="ghost"   size="lg">LinkedIn ↗</Btn>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
