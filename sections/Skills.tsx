"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

export function Skills() {
  return (
    <section id="skills" style={{ padding:"90px 0" }}>
      <div className={W}>
        <SecTitle eyebrow="Skills" title="My toolkit" sub="Technologies I use professionally across AI, data, and development." />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(255px,1fr))", gap:14 }}>
          {SKILLS.map((g,gi)=>(
            <motion.div key={g.category}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.55, delay:gi*0.07 }}
              style={{ padding:"24px", borderRadius:18,
                border:"1px solid var(--bd)", background:"var(--s1)",
                transition:"border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--bdh)";e.currentTarget.style.boxShadow="0 0 30px rgba(0,220,255,0.06)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bd)";e.currentTarget.style.boxShadow="none";}}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
                <span style={{ fontSize:18 }}>{g.icon}</span>
                <span style={{ fontFamily:"var(--fM)", fontSize:10, letterSpacing:"0.12em",
                  textTransform:"uppercase", color:"var(--cy)" }}>{g.category}</span>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:13 }}>
                {g.items.map((sk,si)=>(
                  <div key={sk.name}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                      <span style={{ fontSize:13, color:"var(--tx)", fontFamily:"var(--fB)" }}>{sk.name}</span>
                      <span style={{ fontSize:11, color:"var(--tx2)", fontFamily:"var(--fM)" }}>{sk.level}%</span>
                    </div>
                    <div style={{ height:3, borderRadius:2, background:"var(--bg)", overflow:"hidden", position:"relative" }}>
                      <motion.div
                        initial={{ width:0 }}
                        whileInView={{ width:`${sk.level}%` }}
                        viewport={{ once:true }}
                        transition={{ duration:1.3, delay:gi*0.07+si*0.07, ease:[0.16,1,0.3,1] }}
                        className="sbfill"
                        style={{ height:"100%", borderRadius:2, position:"relative",
                          background: gi%2===0
                            ? "linear-gradient(90deg,var(--cy),rgba(0,220,255,0.4))"
                            : "linear-gradient(90deg,var(--vi),rgba(180,77,255,0.4))" }}/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Also knows */}
        <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.55, delay:0.2 }}
          style={{ marginTop:14, padding:"22px", borderRadius:18,
            border:"1px solid var(--bd)", background:"var(--s1)" }}>
          <div style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)",
            letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:14 }}>
            Also familiar with
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
            {["Excel","Google Colab","OpenAI API","Hugging Face","LangChain","Qiskit","IBM Quantum","OpenQASM","Power Query","DAX","EDA","Data Cleaning","VS Code","Linux","Jupyter","NLTK","spaCy"].map(t=>(
              <motion.span key={t} whileHover={{ scale:1.06, borderColor:"var(--bdh)" }}
                style={{ padding:"4px 11px", borderRadius:7, border:"1px solid var(--bd)",
                  fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)",
                  background:"rgba(0,220,255,0.02)", cursor:"default",
                  transition:"all 0.2s" }}>{t}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
