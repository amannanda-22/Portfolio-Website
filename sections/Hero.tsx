"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SITE, MARQUEE } from "@/lib/constants";
import { Github, Linkedin, Mail, Download, MapPin, GraduationCap, ArrowDown } from "lucide-react";
import { Btn } from "@/components/Btn";
import { NeuralBg } from "@/components/NeuralBg";

const STATS = [{ v:"3+",l:"Internships" },{ v:"6+",l:"AI Projects" },{ v:"9+",l:"Certifications" },{ v:"8.21",l:"CGPA" }];

const container = { hidden:{}, visible:{ transition:{ staggerChildren:0.12, delayChildren:3.2 } } };
const item      = { hidden:{ opacity:0, y:28 }, visible:{ opacity:1, y:0, transition:{ duration:0.7, ease:[0.16,1,0.3,1] } } };

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX/window.innerWidth - 0.5)*16;
      const y = (e.clientY/window.innerHeight - 0.5)*16;
      bgRef.current.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section id="hero" style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", overflow:"hidden" }}>

      {/* Neural network background (simulated video) */}
      <NeuralBg opacity={0.7}/>

      {/* Gradient orbs */}
      <div ref={bgRef} style={{ position:"absolute",inset:0,pointerEvents:"none",transition:"transform 0.15s ease-out" }}>
        <div style={{ position:"absolute",top:"8%",left:"-8%",width:520,height:520,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,220,255,0.12) 0%,transparent 70%)",filter:"blur(60px)" }}/>
        <div style={{ position:"absolute",bottom:"5%",right:"-5%",width:440,height:440,borderRadius:"50%",background:"radial-gradient(circle,rgba(180,77,255,0.1) 0%,transparent 70%)",filter:"blur(60px)" }}/>
      </div>

      {/* Grid overlay */}
      <div style={{ position:"absolute",inset:0,pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(0,220,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,220,255,0.025) 1px,transparent 1px)",
        backgroundSize:"80px 80px",
        maskImage:"radial-gradient(ellipse 90% 70% at 50% 50%,black,transparent)",
        WebkitMaskImage:"radial-gradient(ellipse 90% 70% at 50% 50%,black,transparent)" }}/>

      {/* Content */}
      <div style={{ flex:1, display:"flex", alignItems:"center", position:"relative", zIndex:2,
        padding:"100px 24px 0", maxWidth:1280, margin:"0 auto", width:"100%", gap:40 }}>

        {/* LEFT */}
        <motion.div style={{ flex:"1 1 520px", minWidth:0 }} variants={container} initial="hidden" animate="visible">
          {/* Status */}
          <motion.div variants={item}
            style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",borderRadius:100,
              border:"1px solid rgba(0,220,255,0.22)",background:"rgba(0,220,255,0.04)",
              fontFamily:"var(--fM)",fontSize:11,color:"var(--tx2)",marginBottom:24 }}>
            <span className="animate-pulseGlow" style={{ width:7,height:7,borderRadius:"50%",background:"var(--gr)",display:"inline-block" }}/>
            Available for internships &amp; opportunities
          </motion.div>

          {/* Name lines */}
          <div style={{ overflow:"hidden",marginBottom:2 }}>
            <motion.h1 initial={{y:"110%"}} animate={{y:"0%"}} transition={{duration:1,delay:3.0,ease:[0.76,0,0.24,1]}}
              style={{ fontFamily:"var(--fT)",fontSize:"clamp(3rem,9vw,7.5rem)",fontWeight:800,lineHeight:0.9,color:"var(--tx)",letterSpacing:-3 }}>
              {SITE.firstName}
            </motion.h1>
          </div>
          <div style={{ overflow:"hidden",marginBottom:22 }}>
            <motion.h1 initial={{y:"110%"}} animate={{y:"0%"}} transition={{duration:1,delay:3.12,ease:[0.76,0,0.24,1]}}
              className="grad-cy-vi"
              style={{ fontFamily:"var(--fT)",fontSize:"clamp(3rem,9vw,7.5rem)",fontWeight:800,lineHeight:0.9,letterSpacing:-3 }}>
              {SITE.lastName}
            </motion.h1>
          </div>

          <motion.div variants={item} style={{ display:"flex",flexWrap:"wrap",gap:7,marginBottom:16 }}>
            {["AI Developer","ML Engineer","Quantum Computing","Data Analytics"].map(t=>(
              <span key={t} style={{ padding:"4px 12px",borderRadius:8,border:"1px solid var(--bd)",
                fontFamily:"var(--fM)",fontSize:10,color:"var(--tx2)",background:"var(--s1)" }}>{t}</span>
            ))}
          </motion.div>

          <motion.p variants={item} style={{ fontSize:15,color:"var(--tx2)",maxWidth:500,marginBottom:28,lineHeight:1.8 }}>
            {SITE.bio}
          </motion.p>

          <motion.div variants={item} style={{ display:"flex",flexWrap:"wrap",alignItems:"center",gap:10,marginBottom:36 }}>
            <Btn href="#projects" variant="primary" size="lg">View Projects →</Btn>
            <Btn href={SITE.resume} target="_blank" variant="outline" size="lg"><Download size={13}/> Resume</Btn>
            <Btn href="#contact" variant="ghost" size="lg">Contact</Btn>
            <div style={{ display:"flex",gap:7 }}>
              {[{Icon:Github,href:SITE.github},{Icon:Linkedin,href:SITE.linkedin},{Icon:Mail,href:`mailto:${SITE.email}`}].map(({Icon,href},i)=>(
                <motion.a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{scale:1.12,y:-2}} whileTap={{scale:0.9}}
                  style={{ width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",
                    borderRadius:10,border:"1px solid var(--bd)",color:"var(--tx2)",transition:"all 0.2s" }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--cy)";el.style.color="var(--cy)";el.style.boxShadow="0 0 14px rgba(0,220,255,0.25)";}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--bd)";el.style.color="var(--tx2)";el.style.boxShadow="none";}}>
                  <Icon size={15}/>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} style={{ display:"flex",flexWrap:"wrap",gap:28 }}>
            {STATS.map(({v,l})=>(
              <div key={l}>
                <div className="grad-cy-vi" style={{ fontFamily:"var(--fT)",fontSize:"clamp(1.7rem,3.5vw,2.5rem)",fontWeight:800,lineHeight:1 }}>{v}</div>
                <div style={{ fontFamily:"var(--fB)",fontSize:11,color:"var(--tx2)",marginTop:3 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — profile card */}
        <motion.div initial={{opacity:0,x:50,scale:0.92}} animate={{opacity:1,x:0,scale:1}}
          transition={{duration:0.9,delay:3.3,ease:[0.16,1,0.3,1]}}
          className="hidden lg:flex"
          style={{ flex:"0 0 370px",flexDirection:"column",gap:10 }}>

          <div style={{ borderRadius:20,border:"1px solid var(--bdh)",overflow:"hidden",boxShadow:"0 0 60px rgba(0,220,255,0.07)" }}>
            {/* Header */}
            <div style={{ padding:"24px",background:"var(--s1)",borderBottom:"1px solid var(--bd)",display:"flex",alignItems:"center",gap:14 }}>
              <div style={{ width:58,height:58,borderRadius:14,
                background:"linear-gradient(135deg,rgba(0,220,255,0.18),rgba(180,77,255,0.12))",
                border:"1px solid var(--bdh)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <span style={{ fontFamily:"var(--fT)",fontWeight:800,fontSize:22,color:"var(--cy)" }}>AN</span>
              </div>
              <div>
                <div style={{ fontFamily:"var(--fT)",fontWeight:700,fontSize:17,color:"var(--tx)" }}>{SITE.name}</div>
                <div style={{ fontFamily:"var(--fM)",fontSize:10,color:"var(--cy)",marginTop:3 }}>{SITE.role}</div>
                <div style={{ display:"flex",alignItems:"center",gap:5,marginTop:5 }}>
                  <span className="animate-pulseGlow" style={{ width:6,height:6,borderRadius:"50%",background:"var(--gr)",display:"inline-block" }}/>
                  <span style={{ fontFamily:"var(--fM)",fontSize:10,color:"var(--tx2)" }}>Open to Work</span>
                </div>
              </div>
            </div>
            {/* Info */}
            <div style={{ padding:"16px 20px",display:"flex",flexDirection:"column",gap:10 }}>
              {[
                { Icon:GraduationCap, v:`B.Sc. AI · CGPA ${SITE.education.cgpa}`, sub:"Aditya Degree College", href:null },
                { Icon:MapPin,        v:SITE.location,                             sub:"India",                href:null },
                { Icon:Mail,          v:SITE.email,                                sub:"Click to email",       href:`mailto:${SITE.email}` },
              ].map(({ Icon, v, sub, href }:any)=>(
                <div key={v} onClick={()=>href&&window.open(href,"_blank")}
                  style={{ display:"flex",alignItems:"center",gap:10,cursor:href?"pointer":"default",
                    padding:"7px 9px",borderRadius:8,transition:"background 0.2s" }}
                  onMouseEnter={e=>{if(href)(e.currentTarget as HTMLElement).style.background="var(--cy-dim)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";}}>
                  <Icon size={13} style={{color:"var(--cy)",flexShrink:0}}/>
                  <div>
                    <div style={{ fontSize:12,color:href?"var(--cy)":"var(--tx)",fontWeight:500 }}>{v}</div>
                    <div style={{ fontSize:10,color:"var(--tx2)",fontFamily:"var(--fM)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini cards */}
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8 }}>
            {[
              { icon:"🏆",label:"Hackathon Winner",sub:"AQV National 2026" },
              { icon:"⚛️",label:"Quantum Dev",sub:"IBM Quantum · Qiskit" },
              { icon:"🤖",label:"9 Certifications",sub:"IBM · Cisco · Deloitte" },
              { icon:"📊",label:"Data Analyst",sub:"Power BI · Pandas" },
            ].map(({icon,label,sub})=>(
              <motion.div key={label} whileHover={{scale:1.03,borderColor:"var(--bdh)"}}
                style={{ padding:"13px",borderRadius:13,border:"1px solid var(--bd)",background:"var(--s1)",transition:"all 0.2s" }}>
                <div style={{ fontSize:18,marginBottom:4 }}>{icon}</div>
                <div style={{ fontSize:11,fontWeight:600,color:"var(--tx)" }}>{label}</div>
                <div style={{ fontSize:10,color:"var(--tx2)",fontFamily:"var(--fM)",marginTop:2 }}>{sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:4.2,duration:0.7}}
        style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"14px 0 10px",position:"relative",zIndex:2 }}>
        <motion.div animate={{y:[0,7,0]}} transition={{duration:1.4,repeat:Infinity}}>
          <ArrowDown size={14} style={{color:"var(--cy)",opacity:0.6}}/>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div style={{ position:"relative",zIndex:2,borderTop:"1px solid var(--bd)",background:"var(--s1)",padding:"9px 0",overflow:"hidden" }}>
        <div style={{ display:"flex" }}>
          <div className="animate-marqueeL" style={{ display:"flex",alignItems:"center",whiteSpace:"nowrap" }}>
            {[...MARQUEE,...MARQUEE].map((t,i)=>(
              <span key={i} style={{ fontFamily:"var(--fM)",fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--tx2)",padding:"0 18px" }}>
                {t}<span style={{ marginLeft:18,color:"var(--cy)",opacity:0.3 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
