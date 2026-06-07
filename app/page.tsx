import { Hero }         from "@/sections/Hero";
import { About }        from "@/sections/About";
import { Experience }   from "@/sections/Experience";
import { Projects }     from "@/sections/Projects";
import { Skills }       from "@/sections/Skills";
import { Achievements } from "@/sections/Achievements";
import { CTA }          from "@/sections/CTA";
import { Contact }      from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero/><About/><Experience/><Projects/>
      <Skills/><Achievements/><CTA/><Contact/>
    </>
  );
}
