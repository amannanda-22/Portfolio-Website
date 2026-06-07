"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const l = new Lenis({ duration:1.3, smoothWheel:true });
    const raf = (t: number) => { l.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => l.destroy();
  }, []);
  return <>{children}</>;
}
