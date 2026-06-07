"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

/* ── SVG art per project ── */
function NovaArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      {[18,36,58,80,100,80,58,36,18].map((h,i)=>(
        <rect key={i} x={55+i*26} y={(200-h)/2} width={14} height={h} rx={7}
          fill={`rgba(0,220,255,${0.25+i*0.08})`}/>
      ))}
      <circle cx="170" cy="100" r="34" fill="rgba(0,220,255,0.05)" stroke="rgba(0,220,255,0.25)" strokeWidth="1"/>
      <path d="M163 90 Q163 84 170 84 Q177 84 177 90 L177 100 Q177 106 170 106 Q163 106 163 100 Z" stroke="#00dcff" strokeWidth="1.8" fill="rgba(0,220,255,0.08)"/>
      <path d="M158 100 Q158 112 170 112 Q182 112 182 100" stroke="#00dcff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <line x1="170" y1="112" x2="170" y2="118" stroke="#00dcff" strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx="170" cy="100" rx="56" ry="20" stroke="rgba(0,220,255,0.08)" strokeWidth="1" fill="none"/>
      <ellipse cx="170" cy="100" rx="78" ry="30" stroke="rgba(180,77,255,0.06)" strokeWidth="1" fill="none"/>
      <text x="170" y="168" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">NOVA AI · Voice Assistant · 1st Prize 🏆</text>
    </svg>
  );
}

function CardioArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      {[40,80,120,160].map(y=><line key={y} x1="20" y1={y} x2="320" y2={y} stroke="rgba(0,220,255,0.04)" strokeWidth="1"/>)}
      {[60,120,180,240,300].map(x=><line key={x} x1={x} y1="20" x2={x} y2="175" stroke="rgba(0,220,255,0.04)" strokeWidth="1"/>)}
      <path d="M20,100 L55,100 L65,100 L75,55 L85,145 L95,45 L105,155 L115,100 L155,100 L165,100 L175,55 L185,145 L195,45 L205,155 L215,100 L255,100 L265,100 L275,65 L285,135 L295,85 L320,85"
        stroke="#00dcff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M151 86 Q151 79 158 79 Q162 79 170 85 Q178 79 182 79 Q189 79 189 86 Q189 93 170 105 Q151 93 151 86 Z" fill="rgba(180,77,255,0.15)" stroke="#b44dff" strokeWidth="1.5"/>
      <text x="170" y="168" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">CARDIO PREDICT · Heart Disease ML</text>
    </svg>
  );
}

function QuantumArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      {[55,95,135].map(y=>(
        <line key={y} x1="28" y1={y} x2="312" y2={y} stroke="rgba(0,220,255,0.2)" strokeWidth="1.5"/>
      ))}
      {[[65,55,"H"],[65,95,"X"],[65,135,"H"],[118,55,"S"],[118,95,"CX"],[165,95,"H"],[165,135,"T"],[212,55,"CX"],[212,135,"S"],[260,55,"M"],[260,95,"M"],[260,135,"M"]].map(([x,y,g])=>(
        <g key={`${x}-${y}`}>
          <rect x={Number(x)-12} y={Number(y)-12} width={24} height={24} rx={4}
            fill="rgba(0,220,255,0.08)" stroke="#00dcff" strokeWidth="1.2"/>
          <text x={Number(x)} y={Number(y)+5} textAnchor="middle" fill="#00dcff" fontSize="9" fontFamily="monospace">{String(g)}</text>
        </g>
      ))}
      <line x1="118" y1="55" x2="118" y2="95" stroke="rgba(180,77,255,0.35)" strokeWidth="1" strokeDasharray="3,2"/>
      <circle cx="118" cy="95" r="4" fill="rgba(180,77,255,0.6)"/>
      <line x1="212" y1="55" x2="212" y2="135" stroke="rgba(180,77,255,0.35)" strokeWidth="1" strokeDasharray="3,2"/>
      <circle cx="212" cy="135" r="4" fill="rgba(180,77,255,0.6)"/>
      <text x="170" y="168" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">QUANTUM JOB TRACKER · IBM Qiskit</text>
    </svg>
  );
}

function ChatbotArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      <rect x="40" y="22" width="260" height="144" rx="14" fill="#07101a" stroke="rgba(0,220,255,0.18)" strokeWidth="1"/>
      <rect x="40" y="22" width="260" height="34" rx="14" fill="rgba(0,220,255,0.07)"/>
      <rect x="40" y="43" width="260" height="13" fill="rgba(0,220,255,0.07)"/>
      <circle cx="60" cy="39" r="7" fill="rgba(0,220,255,0.2)"/>
      <circle cx="60" cy="39" r="3" fill="#00dcff"/>
      <text x="74" y="43" fill="rgba(0,220,255,0.8)" fontSize="10" fontFamily="monospace">AI Chatbot</text>
      <rect x="52" y="68" width="130" height="26" rx="10" fill="rgba(0,220,255,0.09)" stroke="rgba(0,220,255,0.2)" strokeWidth="1"/>
      <text x="68" y="85" fill="rgba(0,220,255,0.9)" fontSize="9" fontFamily="monospace">Hello! How can I help?</text>
      <rect x="170" y="103" width="118" height="26" rx="10" fill="rgba(180,77,255,0.09)" stroke="rgba(180,77,255,0.2)" strokeWidth="1"/>
      <text x="180" y="120" fill="rgba(180,77,255,0.9)" fontSize="9" fontFamily="monospace">Explain quantum AI</text>
      <rect x="52" y="136" width="80" height="22" rx="8" fill="rgba(0,220,255,0.06)" stroke="rgba(0,220,255,0.15)" strokeWidth="1"/>
      <circle cx="67"  cy="147" r="3" fill="rgba(0,220,255,0.5)"/>
      <circle cx="78"  cy="147" r="3" fill="rgba(0,220,255,0.8)"/>
      <circle cx="89"  cy="147" r="3" fill="rgba(0,220,255,0.5)"/>
      <text x="170" y="182" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">AI CHATBOT · NLP + Generative AI</text>
    </svg>
  );
}

function TrafficArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      <line x1="170" y1="10" x2="170" y2="175" stroke="rgba(0,220,255,0.14)" strokeWidth="9"/>
      <line x1="10"  y1="90" x2="330"  y2="90"  stroke="rgba(0,220,255,0.14)" strokeWidth="9"/>
      <line x1="85"  y1="10" x2="85"   y2="175" stroke="rgba(0,220,255,0.07)" strokeWidth="4"/>
      <line x1="255" y1="10" x2="255"  y2="175" stroke="rgba(0,220,255,0.07)" strokeWidth="4"/>
      <line x1="10"  y1="42" x2="330"  y2="42"  stroke="rgba(0,220,255,0.07)" strokeWidth="4"/>
      <line x1="10"  y1="142" x2="330" y2="142" stroke="rgba(0,220,255,0.07)" strokeWidth="4"/>
      <rect x="38"  y="84" width="18" height="11" rx="3" fill="#00dcff"/>
      <rect x="112" y="84" width="18" height="11" rx="3" fill="#00dcff"/>
      <rect x="222" y="91" width="18" height="11" rx="3" fill="rgba(0,220,255,0.5)"/>
      <rect x="290" y="91" width="18" height="11" rx="3" fill="rgba(180,77,255,0.6)"/>
      {[[85,42],[170,42],[255,42],[85,90],[170,90],[255,90],[85,142],[170,142],[255,142]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r={4} fill={i%3===0?"var(--cy)":i%3===1?"var(--vi)":"rgba(0,220,255,0.4)"}/>
      ))}
      <text x="170" y="182" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">TRAFFIC PREDICTION · ML Regression</text>
    </svg>
  );
}

function HealthArt() {
  return (
    <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <rect width="340" height="200" fill="#030509"/>
      <rect x="22" y="18" width="296" height="152" rx="12" fill="#07101a" stroke="rgba(0,220,255,0.14)" strokeWidth="1"/>
      {[{x:38,h:75},{x:78,h:50},{x:118,h:92},{x:158,h:60},{x:198,h:108},{x:238,h:70}].map(({x,h},i)=>(
        <g key={i}>
          <rect x={x} y={148-h} width={22} height={h} rx={4}
            fill={i%2===0?"rgba(0,220,255,0.15)":"rgba(180,77,255,0.12)"}
            stroke={i%2===0?"rgba(0,220,255,0.35)":"rgba(180,77,255,0.3)"} strokeWidth="1"/>
        </g>
      ))}
      <polyline points="49,73 89,98 129,56 169,88 209,40 249,75"
        stroke="#00dcff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {[{cx:49,cy:73},{cx:89,cy:98},{cx:129,cy:56},{cx:169,cy:88},{cx:209,cy:40},{cx:249,cy:75}].map(({cx,cy},i)=>(
        <circle key={i} cx={cx} cy={cy} r={3} fill={i%2===0?"#00dcff":"#b44dff"}/>
      ))}
      <rect x="268" y="26" width="42" height="28" rx={5} fill="rgba(0,220,255,0.08)" stroke="rgba(0,220,255,0.2)" strokeWidth="1"/>
      <text x="289" y="37" textAnchor="middle" fill="#00dcff" fontSize="8" fontFamily="monospace" fontWeight="bold">98.2%</text>
      <text x="289" y="48" textAnchor="middle" fill="rgba(0,220,255,0.45)" fontSize="7" fontFamily="monospace">Accuracy</text>
      <text x="170" y="182" textAnchor="middle" fill="rgba(0,220,255,0.4)" fontSize="10" fontFamily="monospace">HEALTHCARE ANALYTICS · Power BI</text>
    </svg>
  );
}

const ART: Record<number,React.ReactNode> = {
  1:<NovaArt/>, 2:<CardioArt/>, 3:<QuantumArt/>,
  4:<ChatbotArt/>, 5:<TrafficArt/>, 6:<HealthArt/>,
};

const featured = PROJECTS.filter(p=>p.featured);
const others   = PROJECTS.filter(p=>!p.featured);

export function Projects() {
  return (
    <section id="projects" style={{ padding:"90px 0", background:"var(--s1)" }}>
      <div className={W}>
        <SecTitle eyebrow="Projects" title="Things I've built" sub="AI, ML, and data projects built with real-world impact." />

        {/* Featured */}
        <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:44 }}>
          {featured.map((p,i)=>(
            <motion.div key={p.id}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.09 }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
                borderRadius:20, overflow:"hidden", border:"1px solid var(--bd)",
                transition:"border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--bdh)";e.currentTarget.style.boxShadow="0 0 40px rgba(0,220,255,0.06)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bd)";e.currentTarget.style.boxShadow="none";}}>

              {/* Art */}
              <div style={{ background:"var(--bg)", minHeight:195,
                display:"flex", alignItems:"stretch", order:i%2===1?2:0 }}>
                {ART[p.id]}
              </div>

              {/* Content */}
              <div style={{ padding:"26px 30px", background:"var(--bg)",
                display:"flex", flexDirection:"column", justifyContent:"center",
                order:i%2===1?1:2 }}>
                <div style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--cy)", marginBottom:7 }}>
                  Featured · {p.year}
                </div>
                <h3 style={{ fontFamily:"var(--fT)", fontSize:"clamp(1.25rem,2.5vw,1.65rem)",
                  color:"var(--tx)", marginBottom:10 }}>{p.title}</h3>
                <p style={{ color:"var(--tx2)", fontSize:14, lineHeight:1.75, marginBottom:16 }}>
                  {p.description}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                  {p.tags.map(t=>(
                    <span key={t} style={{ padding:"3px 9px", borderRadius:6,
                      background:"var(--s1)", fontFamily:"var(--fM)",
                      fontSize:10, color:"var(--tx2)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:18 }}>
          <div style={{ height:1, flex:1, background:"var(--bd)" }}/>
          <span style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)" }}>More Projects</span>
          <div style={{ height:1, flex:1, background:"var(--bd)" }}/>
        </div>

        {/* Others */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:12 }}>
          {others.map((p,i)=>(
            <motion.div key={p.id}
              initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.45, delay:i*0.07 }}
              className="ch"
              style={{ borderRadius:16, border:"1px solid var(--bd)",
                background:"var(--bg)", overflow:"hidden" }}>
              <div style={{ height:115, overflow:"hidden", borderBottom:"1px solid var(--bd)" }}>
                {ART[p.id]}
              </div>
              <div style={{ padding:"14px 16px" }}>
                <h3 style={{ fontFamily:"var(--fT)", fontSize:15, color:"var(--tx)", marginBottom:7 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize:12, color:"var(--tx2)", lineHeight:1.65, marginBottom:10 }}>
                  {p.description}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                  {p.tags.slice(0,3).map(t=>(
                    <span key={t} style={{ fontSize:10, color:"var(--tx2)", fontFamily:"var(--fM)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
