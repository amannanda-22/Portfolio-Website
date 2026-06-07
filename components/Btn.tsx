"use client";
import { motion } from "framer-motion";

interface P { variant?:"primary"|"outline"|"ghost"; size?:"sm"|"md"|"lg"; href?:string; target?:string; onClick?:()=>void; type?:"button"|"submit"|"reset"; disabled?:boolean; children:React.ReactNode; className?:string; }
const sz:Record<string,string> = { sm:"9px 16px", md:"11px 22px", lg:"13px 30px" };
const fs:Record<string,number> = { sm:12, md:13, lg:14 };

export function Btn({ variant="primary",size="md",href,target,onClick,type="button",disabled,children,className }:P) {
  const base:React.CSSProperties = { display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8, padding:sz[size],fontSize:fs[size],fontWeight:600,fontFamily:"var(--fB)", borderRadius:12,cursor:"none",border:"none",transition:"all 0.2s",whiteSpace:"nowrap",userSelect:"none",opacity:disabled?0.6:1 };
  const vs:Record<string,React.CSSProperties> = {
    primary:{ background:"linear-gradient(135deg,var(--cy),var(--vi))",color:"var(--bg)",boxShadow:"0 0 20px rgba(0,220,255,0.2)" },
    outline:{ background:"transparent",color:"var(--cy)",border:"1.5px solid var(--cy)" },
    ghost:  { background:"transparent",color:"var(--tx2)",border:"1px solid var(--bd)" },
  };
  const s = { ...base,...vs[variant] };
  if (href) return (
    <motion.a href={href} target={target} rel={target==="_blank"?"noopener noreferrer":undefined} className={className} style={s} whileHover={{scale:1.04}} whileTap={{scale:0.96}}>{children}</motion.a>
  );
  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} className={className} style={s} whileHover={{scale:disabled?1:1.04}} whileTap={{scale:disabled?1:0.96}}>{children}</motion.button>
  );
}
