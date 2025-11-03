import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { VideoShowcase } from "./components/VideoShowcase";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <VideoShowcase />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
