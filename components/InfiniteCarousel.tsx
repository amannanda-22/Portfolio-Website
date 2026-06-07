"use client";

const ROW1 = ["Python","TensorFlow","Scikit-learn","NLP","Generative AI","Prompt Engineering","Power BI","Pandas","NumPy","FastAPI","Flask","Streamlit"];
const ROW2 = ["Qiskit","IBM Quantum","AWS","Azure","MongoDB","MySQL","Git","GitHub","Jupyter","VS Code","Docker","OpenAI API"];

function Badge({ label }: { label: string }) {
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:8,
      padding:"8px 18px", borderRadius:100,
      border:"1px solid var(--bdh)", background:"var(--s1)",
      fontFamily:"var(--fM)", fontSize:12, color:"var(--cy)",
      whiteSpace:"nowrap", margin:"0 6px",
      transition:"all 0.2s",
    }}
    onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="var(--cy-dim)";el.style.boxShadow="0 0 16px rgba(0,220,255,0.2)";}}
    onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="var(--s1)";el.style.boxShadow="none";}}>
      {label}
    </span>
  );
}

export function InfiniteCarousel() {
  const doubled1 = [...ROW1, ...ROW1];
  const doubled2 = [...ROW2, ...ROW2];

  return (
    <div style={{ overflow:"hidden", padding:"0 0 4px" }}>
      {/* Row 1 — scrolls left */}
      <div style={{ display:"flex", marginBottom:10, maskImage:"linear-gradient(to right,transparent,black 10%,black 90%,transparent)", WebkitMaskImage:"linear-gradient(to right,transparent,black 10%,black 90%,transparent)" }}>
        <div className="animate-marqueeL" style={{ display:"flex", alignItems:"center", whiteSpace:"nowrap", willChange:"transform" }}>
          {doubled1.map((l,i)=><Badge key={i} label={l}/>)}
        </div>
      </div>
      {/* Row 2 — scrolls right */}
      <div style={{ display:"flex", maskImage:"linear-gradient(to right,transparent,black 10%,black 90%,transparent)", WebkitMaskImage:"linear-gradient(to right,transparent,black 10%,black 90%,transparent)" }}>
        <div className="animate-marqueeR" style={{ display:"flex", alignItems:"center", whiteSpace:"nowrap", willChange:"transform" }}>
          {doubled2.map((l,i)=><Badge key={i} label={l}/>)}
        </div>
      </div>
    </div>
  );
}
