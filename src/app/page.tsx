import { Background } from "@/components/background";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { links, site } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.company },
  address: { "@type": "PostalAddress", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  url: site.url,
  sameAs: [links.linkedin, links.github].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Background />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
