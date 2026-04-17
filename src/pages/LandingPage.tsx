import { CTA } from "./sections/CTA";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Why } from "./sections/Why";

export default function LandingPage () {
  return (
    <div className='bg-[#050B0B] min-h-screen font-sans'>
      <Hero />
      <Features />
      <Stats />
      <Why />
      <CTA />
      <Footer />
    </div>
  )
}
