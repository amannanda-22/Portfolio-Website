"use client";
import { motion } from "framer-motion";
export function SecTitle({eyebrow,title,sub,center}:{eyebrow?:string;title:string;sub?:string;center?:boolean}) {
  return (
    <div style={{marginBottom:48,textAlign:center?"center":undefined}}>
      {eyebrow&&(
        <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
          style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:12}}>
          <span style={{width:22,height:1.5,background:"linear-gradient(90deg,var(--cy),var(--vi))",display:"block"}}/>
          <span style={{fontFamily:"var(--fM)",fontSize:10,letterSpacing:"0.16em",textTransform:"uppercase",
            background:"linear-gradient(90deg,var(--cy),var(--vi))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2 initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.75,delay:0.08,ease:[0.16,1,0.3,1]}}
        style={{fontFamily:"var(--fT)",fontSize:"clamp(1.9rem,5vw,3.1rem)",color:"var(--tx)"}}>
        {title}
      </motion.h2>
      {sub&&(
        <motion.p initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.16}}
          style={{marginTop:10,fontSize:15,color:"var(--tx2)",maxWidth:580,marginLeft:center?"auto":undefined,marginRight:center?"auto":undefined}}>
          {sub}
        </motion.p>
      )}
    </div>
  );
}
