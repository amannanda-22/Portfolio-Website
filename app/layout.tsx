import type { Metadata } from "next";
import "./globals.css";
import { Navbar }       from "@/components/Navbar";
import { Footer }       from "@/components/Footer";
import { Loader }       from "@/components/Loader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorEffect } from "@/components/CursorEffect";

export const metadata: Metadata = {
  title: "Aman Nanda — AI Developer & Quantum Computing",
  description: "AI undergraduate skilled in ML, NLP, Generative AI, Data Analytics, and Quantum Computing. Hackathon winner from Visakhapatnam.",
  authors: [{ name:"Aman Nanda" }],
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Loader/>
        <CursorEffect/>
        <SmoothScroll>
          <Navbar/>
          <main>{children}</main>
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}
