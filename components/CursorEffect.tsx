"use client";
import { useEffect, useRef, useState } from "react";

export function CursorEffect() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      dot.style.transform  = `translate(${mx - 5}px, ${my - 5}px)`;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[data-cursor]")) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.relatedTarget as HTMLElement | null;
      if (!t?.closest("a,button,[data-cursor]")) setHovered(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover",  onEnter);
    document.addEventListener("mouseout",   onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onEnter);
      document.removeEventListener("mouseout",   onLeave);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position:"fixed", top:0, left:0, width:10, height:10, borderRadius:"50%",
        background: hovered ? "transparent" : "var(--cy)",
        boxShadow: hovered ? "none" : "0 0 10px var(--cy)",
        pointerEvents:"none", zIndex:99998, transition:"background 0.15s, box-shadow 0.15s",
      }}/>
      {/* Ring */}
      <div ref={ringRef} style={{
        position:"fixed", top:0, left:0, width:40, height:40, borderRadius:"50%",
        border: `1.5px solid ${hovered ? "var(--cy)" : "rgba(0,220,255,0.45)"}`,
        background: hovered ? "rgba(0,220,255,0.08)" : "transparent",
        boxShadow: hovered ? "0 0 20px rgba(0,220,255,0.25)" : "none",
        pointerEvents:"none", zIndex:99997,
        transform: hovered ? "scale(1.4)" : "scale(1)",
        transition:"border 0.2s, background 0.2s, box-shadow 0.2s",
      }}/>
    </>
  );
}
