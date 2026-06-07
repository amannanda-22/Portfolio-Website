"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number; op: number;
  pulse: number; pSpeed: number;
  type: "cy" | "vi";
}

interface Pulse {
  from: number; to: number;
  t: number; speed: number; active: boolean;
}

export function NeuralBg({ opacity = 0.65 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = cv.width  = window.innerWidth;
    let H = cv.height = window.innerHeight;
    let raf: number;

    const N = Math.min(75, Math.floor((W * H) / 14000));
    const DIST = 150;

    const nodes: Node[] = Array.from({ length: N }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      op: Math.random() * 0.45 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      pSpeed: Math.random() * 0.018 + 0.008,
      type: Math.random() > 0.65 ? "vi" : "cy",
    }));

    /* Data pulses travelling along edges */
    const pulses: Pulse[] = Array.from({ length: 8 }, () => ({
      from: Math.floor(Math.random() * N),
      to: Math.floor(Math.random() * N),
      t: Math.random(), speed: Math.random() * 0.008 + 0.004,
      active: Math.random() > 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* Update nodes */
      nodes.forEach(nd => {
        nd.x += nd.vx; nd.y += nd.vy; nd.pulse += nd.pSpeed;
        if (nd.x < 0 || nd.x > W) nd.vx *= -1;
        if (nd.y < 0 || nd.y > H) nd.vy *= -1;
      });

      /* Draw edges */
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < DIST) {
            const a = (1 - d / DIST) * 0.18;
            const colI = nodes[i].type === "cy" ? `0,220,255` : `180,77,255`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${colI},${a})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      /* Draw data pulses */
      pulses.forEach(p => {
        if (!p.active) { if (Math.random() < 0.003) p.active = true; return; }
        p.t += p.speed;
        if (p.t > 1) { p.t = 0; p.from = p.to; p.to = Math.floor(Math.random() * N); }
        const a = nodes[p.from]; const b = nodes[p.to];
        const dx = b.x - a.x; const dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > DIST) { p.active = false; return; }
        const px = a.x + dx * p.t;
        const py = a.y + dy * p.t;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        grad.addColorStop(0, "rgba(0,220,255,0.9)");
        grad.addColorStop(1, "rgba(0,220,255,0)");
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      /* Draw nodes */
      nodes.forEach((nd, i) => {
        const pOp = nd.op * (0.65 + 0.35 * Math.sin(nd.pulse));
        const col = nd.type === "cy" ? "0,220,255" : "180,77,255";

        /* Outer glow for every 4th node */
        if (i % 4 === 0) {
          const g = ctx.createRadialGradient(nd.x, nd.y, 0, nd.x, nd.y, nd.r * 5);
          g.addColorStop(0, `rgba(${col},${pOp * 0.15})`);
          g.addColorStop(1, `rgba(${col},0)`);
          ctx.beginPath();
          ctx.arc(nd.x, nd.y, nd.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = g;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(nd.x, nd.y, nd.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${pOp})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      W = cv.width  = window.innerWidth;
      H = cv.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        opacity, pointerEvents: "none",
      }}
    />
  );
}
