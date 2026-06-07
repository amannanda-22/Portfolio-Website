"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [v, setV] = useState(true);
  const [n, setN] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const id = setInterval(() => {
      setN(p => {
        const next = Math.min(p + Math.floor(Math.random() * 9) + 3, 100);
        if (next >= 100) { clearInterval(id); setTimeout(()=>{ setV(false); document.body.style.overflow=""; },500); }
        return next;
      });
    }, 40);
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence>
      {v && (
        <motion.div exit={{ clipPath:"inset(100% 0 0 0)", transition:{ duration:0.9, ease:[0.76,0,0.24,1] } }}
          style={{ position:"fixed",inset:0,background:"var(--bg)",zIndex:10000,
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
            clipPath:"inset(0% 0 0 0)" }}>
          <motion.div initial={{opacity:0,scale:0.7}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}
            style={{ marginBottom:32, position:"relative" }}>
            <div style={{ width:60,height:60,borderRadius:16,
              background:"linear-gradient(135deg,var(--cy),var(--vi))",
              display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow:"0 0 40px rgba(0,220,255,0.4)" }}>
              <span style={{ fontFamily:"var(--fT)",fontWeight:800,fontSize:20,color:"var(--bg)" }}>AN</span>
            </div>
            <motion.div animate={{ rotate:360 }} transition={{ duration:2, repeat:Infinity, ease:"linear" }}
              style={{ position:"absolute",inset:-8,borderRadius:"50%",
                border:"1.5px solid transparent",
                borderTopColor:"var(--cy)", borderRightColor:"var(--vi)" }}/>
          </motion.div>
          <div style={{ fontFamily:"var(--fT)",fontSize:72,fontWeight:800,lineHeight:1,
            background:"linear-gradient(135deg,var(--cy),var(--vi))",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",
            marginBottom:24 }}>
            {String(n).padStart(3,"0")}
          </div>
          <div style={{ width:160,height:2,background:"var(--s2)",borderRadius:1,overflow:"hidden" }}>
            <motion.div style={{ height:"100%",borderRadius:1,
              background:"linear-gradient(90deg,var(--cy),var(--vi))" }}
              initial={{ width:"0%" }} animate={{ width:`${n}%` }}/>
          </div>
          <p style={{ marginTop:16,fontFamily:"var(--fM)",fontSize:10,color:"var(--tx2)",
            letterSpacing:"0.2em",textTransform:"uppercase" }}>
            Aman Nanda · AI Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
