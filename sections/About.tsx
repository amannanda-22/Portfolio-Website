"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";
import { Btn } from "@/components/Btn";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { GraduationCap, MapPin, Mail, Phone, Download } from "lucide-react";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";
const fade = (d=0) => ({ initial:{opacity:0,y:20}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.6,delay:d} });

export function About() {
  const info = [
    { Icon:GraduationCap, label:"Degree", value:`${SITE.education.degree} · CGPA ${SITE.education.cgpa}`, href:null },
    { Icon:MapPin,        label:"Location", value:SITE.location,  href:null },
    { Icon:Mail,          label:"Email",    value:SITE.email,      href:`mailto:${SITE.email}` },
    { Icon:Phone,         label:"Phone / WhatsApp", value:SITE.phone, href:`tel:${SITE.phone}` },
  ];
  return (
    <section id="about" style={{ padding:"90px 0", background:"var(--s1)" }}>
      <div className={W}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:52, alignItems:"center", marginBottom:56 }}>
          <div>
            <SecTitle eyebrow="About Me" title="Building the future with AI & code"/>
            <motion.p {...fade(0.1)} style={{ color:"var(--tx2)",fontSize:15,lineHeight:1.8,marginBottom:14 }}>
              I'm an AI undergraduate at <strong style={{color:"var(--tx)"}}>Aditya Degree College, Visakhapatnam</strong>, building real-world intelligent systems — from voice assistants to quantum dashboards.
            </motion.p>
            <motion.p {...fade(0.18)} style={{ color:"var(--tx2)",fontSize:15,lineHeight:1.8,marginBottom:26 }}>
              Hackathon winner, Deloitte & VaultOfCodes intern, IBM & Cisco certified. I turn complex data and ideas into working AI systems.
            </motion.p>
            <div style={{ display:"flex",flexDirection:"column",gap:9,marginBottom:26 }}>
              {info.map(({ Icon, label, value, href },i) => (
                <motion.div key={label} {...fade(0.1+i*0.06)}
                  onClick={() => href && window.open(href,"_blank")}
                  style={{ display:"flex",alignItems:"center",gap:12,padding:"11px 14px",
                    borderRadius:12,border:"1px solid var(--bd)",background:"var(--bg)",
                    cursor:href?"pointer":"default",transition:"all 0.2s" }}
                  onMouseEnter={e=>{if(href){e.currentTarget.style.borderColor="var(--bdh)";e.currentTarget.style.transform="translateX(4px)";}}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bd)";e.currentTarget.style.transform="none";}}>
                  <div style={{ width:34,height:34,borderRadius:9,background:"var(--cy-dim)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <Icon size={14} style={{color:"var(--cy)"}}/>
                  </div>
                  <div>
                    <div style={{ fontSize:10,color:"var(--tx2)",fontFamily:"var(--fM)",marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:12,color:href?"var(--cy)":"var(--tx)",fontWeight:500 }}>{value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Btn href={SITE.resume} target="_blank" variant="primary"><Download size={13}/> Download Resume</Btn>
          </div>

          {/* Code card */}
          <motion.div initial={{opacity:0,scale:0.93}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.75,ease:[0.16,1,0.3,1]}} style={{position:"relative"}}>
            <div style={{ borderRadius:20,overflow:"hidden",border:"1px solid var(--bdh)",boxShadow:"0 0 60px rgba(0,220,255,0.07)" }}>
              <div style={{ display:"flex",alignItems:"center",gap:8,padding:"10px 16px",background:"var(--s2)",borderBottom:"1px solid var(--bd)" }}>
                {["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:11,height:11,borderRadius:"50%",background:c}}/>)}
                <span style={{marginLeft:8,fontFamily:"var(--fM)",fontSize:11,color:"var(--tx2)"}}>aman_nanda.py</span>
              </div>
              <div style={{ padding:"22px 26px",background:"var(--bg)",fontFamily:"var(--fM)",fontSize:13,lineHeight:1.9 }}>
                <div><span style={{color:"#569cd6"}}>class </span><span style={{color:"var(--cy)"}}>AmanNanda</span><span style={{color:"var(--tx2)"}}>:</span></div>
                <div style={{paddingLeft:20}}>
                  <div style={{color:"var(--tx2)",fontSize:11}}>"""AI Developer · AQV Hackathon Winner"""</div><br/>
                  <div><span style={{color:"#569cd6"}}>def </span><span style={{color:"#4ec9b0"}}>__init__</span><span style={{color:"var(--tx2)"}}>(self):</span></div>
                  <div style={{paddingLeft:20}}>
                    {[{k:"self.role",v:'"AI Developer"'},{k:"self.cgpa",v:'"8.21 / 10"'},{k:"self.location",v:'"Vizag 🇮🇳"'},{k:"self.open",v:'"Yes ✓"'}].map(({k,v})=>(
                      <div key={k}><span style={{color:"var(--tx)"}}>{k}</span><span style={{color:"var(--tx2)"}}> = </span><span style={{color:"var(--cy)"}}>{v}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ padding:"10px 26px 14px",background:"var(--s2)",display:"flex",alignItems:"center",gap:8 }}>
                <span className="animate-pulseGlow" style={{width:7,height:7,borderRadius:"50%",background:"var(--gr)",display:"inline-block"}}/>
                <span style={{fontFamily:"var(--fM)",fontSize:11,color:"var(--tx2)"}}>Open to Work</span>
              </div>
            </div>
            <motion.div animate={{y:[0,-8,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}
              style={{position:"absolute",bottom:-16,left:-16,padding:"9px 14px",borderRadius:12,border:"1px solid var(--bdh)",background:"var(--s2)",fontFamily:"var(--fM)",fontSize:11,color:"var(--tx)"}}>
              🏆 <span style={{color:"var(--cy)"}}>Hackathon</span> Winner
            </motion.div>
            <motion.div animate={{y:[0,-6,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut",delay:1.2}}
              style={{position:"absolute",top:-14,right:-14,padding:"9px 14px",borderRadius:12,border:"1px solid var(--bdh)",background:"var(--s2)",fontFamily:"var(--fM)",fontSize:11,color:"var(--tx)"}}>
              ⚛️ <span style={{color:"var(--vi)"}}>Quantum</span> Dev
            </motion.div>
          </motion.div>
        </div>

        {/* Infinite carousel */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <div style={{fontFamily:"var(--fM)",fontSize:10,color:"var(--tx2)",letterSpacing:"0.14em",textTransform:"uppercase",marginBottom:16,textAlign:"center"}}>Tech Stack</div>
          <InfiniteCarousel/>
        </motion.div>
      </div>
    </section>
  );
}
