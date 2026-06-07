"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { SecTitle } from "@/components/SecTitle";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check, ExternalLink, AlertCircle } from "lucide-react";

const W = "max-w-7xl mx-auto px-6 md:px-12 lg:px-20";

// ─── Web3Forms: get free key at web3forms.com ───────────────────
// 1. Go to https://web3forms.com/
// 2. Enter: amannanda740@gmail.com
// 3. Copy the key and replace below
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_KEY_HERE";
// ────────────────────────────────────────────────────────────────

export function Contact() {
  const [form, setForm]   = useState({ name:"", email:"", subject:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errMsg, setErrMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading"); setErrMsg("");

    if (WEB3FORMS_KEY === "YOUR_WEB3FORMS_KEY_HERE") {
      // Fallback: open mail app
      await new Promise(r => setTimeout(r, 900));
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(form.subject||"Portfolio Contact")}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setForm({ name:"", email:"", subject:"", message:"" });
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    try {
      const res  = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers:{ "Content-Type":"application/json", Accept:"application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject:    form.subject || "New Portfolio Message",
          from_name:  form.name,
          name:       form.name,
          email:      form.email,
          message:    form.message,
          botcheck:   "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name:"", email:"", subject:"", message:"" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error"); setErrMsg(data.message || "Something went wrong.");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error"); setErrMsg("Network error. Email: " + SITE.email);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contacts = [
    { Icon:Mail,     label:"Email",            value:SITE.email,                  href:`mailto:${SITE.email}` },
    { Icon:Phone,    label:"Phone / WhatsApp",  value:SITE.phone,                  href:`tel:${SITE.phone}` },
    { Icon:MapPin,   label:"Location",          value:SITE.location,               href:null },
    { Icon:Linkedin, label:"LinkedIn",          value:"linkedin.com/in/nanda-aman", href:SITE.linkedin },
    { Icon:Github,   label:"GitHub",            value:"github.com/amannanda22",    href:SITE.github },
  ];

  return (
    <section id="contact" style={{ padding:"90px 0", background:"var(--s1)" }}>
      <div className={W}>
        <SecTitle eyebrow="Contact" title="Let's connect"
          sub="Open to internships, collaborations, and interesting projects. I reply fast." />

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:44 }}>

          {/* Left */}
          <motion.div initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.55 }}>
            <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:22 }}>
              {contacts.map(({ Icon, label, value, href }) => (
                <div key={label}
                  onClick={() => href && window.open(href, "_blank")}
                  style={{ display:"flex", alignItems:"center", gap:13,
                    padding:"11px 14px", borderRadius:13,
                    border:"1px solid var(--bd)", background:"var(--bg)",
                    cursor:href?"pointer":"default", transition:"all 0.2s" }}
                  onMouseEnter={e=>{ if(href){ e.currentTarget.style.borderColor="var(--bdh)"; e.currentTarget.style.transform="translateX(4px)"; }}}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--bd)"; e.currentTarget.style.transform="none"; }}>
                  <div style={{ width:34, height:34, borderRadius:9,
                    background:"var(--cy-dim)", display:"flex",
                    alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={14} style={{color:"var(--cy)"}}/>
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:10, color:"var(--tx2)", fontFamily:"var(--fM)", marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:12, color:href?"var(--cy)":"var(--tx)", fontWeight:500,
                      overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{value}</div>
                  </div>
                  {href && <ExternalLink size={11} style={{color:"var(--tx2)",flexShrink:0}}/>}
                </div>
              ))}
            </div>

            {/* Response card */}
            <div style={{ padding:"16px 18px", borderRadius:14,
              border:"1px solid var(--bdh)", background:"var(--bg)",
              display:"flex", gap:14, alignItems:"center", marginBottom:18 }}>
              <div>
                <div style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:3 }}>Avg Response</div>
                <div className="grad-cy-vi"
                  style={{ fontFamily:"var(--fT)", fontSize:24, fontWeight:800 }}>&lt; 24 hrs</div>
              </div>
              <div style={{ width:1, alignSelf:"stretch", background:"var(--bd)" }}/>
              <div>
                <div style={{ fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:3 }}>Languages</div>
                <div style={{ fontSize:13, color:"var(--tx)" }}>English · Hindi · Telugu</div>
              </div>
            </div>

            {WEB3FORMS_KEY === "YOUR_WEB3FORMS_KEY_HERE" && (
              <div style={{ padding:"12px 14px", borderRadius:11,
                border:"1px solid rgba(251,191,36,0.25)", background:"rgba(251,191,36,0.04)",
                display:"flex", alignItems:"flex-start", gap:9 }}>
                <AlertCircle size={13} style={{color:"#fbbf24",flexShrink:0,marginTop:1}}/>
                <div style={{ fontSize:11, color:"#fbbf24", fontFamily:"var(--fM)", lineHeight:1.65 }}>
                  To get emails directly:<br/>
                  1. Visit web3forms.com<br/>
                  2. Enter amannanda740@gmail.com<br/>
                  3. Paste key in Contact.tsx line 14
                </div>
              </div>
            )}
          </motion.div>

          {/* Right — form */}
          <motion.div initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.55, delay:0.08 }}>
            <form onSubmit={submit}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:11, marginBottom:11 }}>
                <div>
                  <label style={{ display:"block", fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:6 }}>Name *</label>
                  <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" className="inp"/>
                </div>
                <div>
                  <label style={{ display:"block", fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:6 }}>Email *</label>
                  <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@email.com" className="inp"/>
                </div>
              </div>
              <div style={{ marginBottom:11 }}>
                <label style={{ display:"block", fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:6 }}>Subject</label>
                <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} placeholder="Internship / Collaboration / Project" className="inp"/>
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={{ display:"block", fontFamily:"var(--fM)", fontSize:10, color:"var(--tx2)", marginBottom:6 }}>Message *</label>
                <textarea required rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Hi Aman! I'd love to discuss..." className="inp" style={{resize:"vertical"}}/>
              </div>

              {status==="error" && (
                <div style={{ padding:"9px 13px", borderRadius:9, marginBottom:11,
                  background:"rgba(239,68,68,0.07)", border:"1px solid rgba(239,68,68,0.22)",
                  fontSize:11, color:"#f87171", fontFamily:"var(--fM)" }}>{errMsg}</div>
              )}

              <motion.button type="submit" disabled={status==="loading"||status==="success"}
                whileHover={{ scale:status==="idle"?1.02:1 }} whileTap={{ scale:0.97 }}
                style={{ width:"100%", padding:13, borderRadius:12, border:"none",
                  cursor:status!=="idle"?"not-allowed":"none",
                  background: status==="success" ? "var(--gr)" : status==="error" ? "#ef4444"
                    : "linear-gradient(135deg,var(--cy),var(--vi))",
                  color:"var(--bg)", fontSize:14, fontWeight:700, fontFamily:"var(--fB)",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                  opacity:status==="loading"?0.8:1, transition:"all 0.3s",
                  boxShadow: status==="idle" ? "0 0 24px rgba(0,220,255,0.2)" : "none" }}>
                {status==="loading"
                  ? <><span className="animate-spin" style={{width:15,height:15,border:"2px solid var(--bg)",borderTopColor:"transparent",borderRadius:"50%",display:"inline-block"}}/> Sending...</>
                  : status==="success"
                    ? <><Check size={14}/> Message Sent ✓</>
                    : status==="error"
                      ? <><AlertCircle size={14}/> Failed — Try Again</>
                      : <><Send size={13}/> Send Message</>}
              </motion.button>
              <p style={{ marginTop:7, fontSize:10, color:"var(--tx2)", textAlign:"center", fontFamily:"var(--fM)" }}>
                {WEB3FORMS_KEY==="YOUR_WEB3FORMS_KEY_HERE"
                  ? "Opens your email app. Set Web3Forms key for direct delivery."
                  : "Delivered directly to amannanda740@gmail.com"}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
