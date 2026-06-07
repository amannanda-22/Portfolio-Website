"use client";
import { motion } from "framer-motion";
import { NAV, SITE } from "@/lib/constants";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
export function Footer() {
  const socials=[{icon:Github,href:SITE.github,lbl:"GitHub"},{icon:Linkedin,href:SITE.linkedin,lbl:"LinkedIn"},{icon:Mail,href:`mailto:${SITE.email}`,lbl:"Email"},{icon:Phone,href:`tel:${SITE.phone}`,lbl:"Phone"}];
  return (
    <footer style={{borderTop:"1px solid var(--bd)",padding:"24px",position:"relative",overflow:"hidden"}}>
      <div style={{maxWidth:1280,margin:"0 auto",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:14,position:"relative",zIndex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,borderRadius:8,background:"linear-gradient(135deg,var(--cy),var(--vi))",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontFamily:"var(--fT)",fontWeight:800,fontSize:11,color:"var(--bg)"}}>AN</span>
          </div>
          <span style={{fontFamily:"var(--fM)",fontSize:11,color:"var(--tx2)"}}>© {new Date().getFullYear()} Aman Nanda</span>
        </div>
        <nav style={{display:"flex",gap:16,flexWrap:"wrap"}}>
          {NAV.map(({label,href})=>(
            <a key={href} href={href} style={{fontSize:12,color:"var(--tx2)",fontFamily:"var(--fB)",transition:"color 0.2s"}}
              onMouseEnter={e=>((e.target as HTMLElement).style.color="var(--cy)")}
              onMouseLeave={e=>((e.target as HTMLElement).style.color="var(--tx2)")}>{label}</a>
          ))}
        </nav>
        <div style={{display:"flex",gap:8}}>
          {socials.map(({icon:Icon,href,lbl})=>(
            <motion.a key={lbl} href={href} target="_blank" rel="noopener noreferrer" aria-label={lbl}
              whileHover={{scale:1.12,y:-2}} whileTap={{scale:0.9}}
              style={{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:8,border:"1px solid var(--bd)",color:"var(--tx2)"}}>
              <Icon size={13}/>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
