import { motion } from "motion/react";
import { Award, Camera, Heart, Users } from "lucide-react";

export function About() {
  const stats = [
    { icon: Camera, value: "500+", label: "Projects Completed" },
    { icon: Heart, value: "10+", label: "Years Experience" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Awards Won" },
  ];

  const testimonials = [
    {
      quote: "Arven Studios captured our wedding day with such artistry and emotion. The photos are absolutely breathtaking.",
      author: "Adelite & Enock",
      role: "Wedding Clients",
    },
    {
      quote: "Professional, creative, and attentive to every detail. Their commercial work elevated our brand campaign.",
      author: "Dr. Samuel Wati",
      role: "CEO - House of Beauty, Africa",
    },
    {
      quote: "The portraits they created are more than photos—they're timeless pieces of art that tell our family's story.",
      author: "Cythia Kagwe",
      role: "Portrait Session",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2">
              <img
                src="https://images.unsplash.com/photo-1745590591981-bb6d5274de9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBhdCUyMHdvcmt8ZW58MXx8fHwxNzYwODkyNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Photographer at work"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl">
              <p className="text-4xl mb-1"></p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 glass-effect rounded-full">
              <span className="text-sm tracking-widest text-primary">ABOUT US</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl">
              Crafting Visual Stories
              <br />
              <span className="text-primary">A Story in Every Frame</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Arven Studios was founded on a simple philosophy: every moment deserves to be captured 
              with intention, artistry, and soul. We believe photography is more than pressing a 
              button—it's about understanding light, emotion, and the unique narrative of each subject.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From intimate weddings to bold commercial campaigns, our approach blends cinematic 
              composition with authentic storytelling. We don't just take photos; we create visual 
              legacies that stand the test of time.
            </p>

            <div className="pt-4">
              <h3 className="text-xl mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                {[
                  "Authentic moments over posed perfection",
                  "Cinematic quality meets emotional depth",
                  "Personalized approach for every client",
                  "Timeless aesthetics that never age",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
        >
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-3xl mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl mb-4">What Clients Say</h2>
            <p className="text-muted-foreground">Trusted by hundreds of satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl space-y-4"
              >
                <div className="text-4xl text-primary opacity-30">"</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="mb-1">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
