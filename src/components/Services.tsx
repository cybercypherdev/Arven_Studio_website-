import { motion } from "motion/react";
import { Camera, Video, Image, Sparkles, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Services() {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Full-day coverage with cinematic editing and personalized albums",
      price: "Starting at Ksh. 15,000",
      features: [
        "8-10 hours coverage",
        "Two professional photographers",
        "150 edited high-resolution photos",
        "Online gallery & print rights",
        "Engagement session included",
      ],
    },
    {
      icon: Video,
      title: "Event Coverage",
      description: "Corporate events, galas, and special occasions captured professionally",
      price: "Starting at Ksh. 8,000",
      features: [
        "Half-day or full-day packages",
        "Candid and posed shots",
        "Fast 48-hour turnaround",
        "Social media ready formats",
        "Brand-aligned editing",
      ],
    },
    {
      icon: Image,
      title: "Portrait Sessions",
      description: "Individual, family, and professional headshots",
      price: "Starting at Ksh. 3000",
      features: [
        "1-2 hour session",
        "Multiple outfit changes",
        "30+ edited photos",
        "Studio or outdoor location",
        "Professional retouching",
      ],
    },
    {
      icon: Sparkles,
      title: "Commercial & Brand",
      description: "Product photography and brand campaigns for businesses",
      price: "Custom Pricing",
      features: [
        "Concept development",
        "Professional styling",
        "Unlimited revisions",
        "Commercial usage rights",
        "Multi-platform optimization",
      ],
    },
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 6-12 months in advance for weddings, and 4-8 weeks for other sessions. However, we're happy to accommodate last-minute requests when available.",
    },
    {
      question: "Do you travel for shoots?",
      answer: "Absolutely! We're based locally but love traveling for destination weddings and events. Travel fees apply for locations over 50 miles from our studio.",
    },
    {
      question: "What's your editing style?",
      answer: "Our signature style is cinematic and timeless—rich colors, natural skin tones, and dramatic lighting. We aim for photos that look stunning today and 20 years from now.",
    },
    {
      question: "Can we request specific shots?",
      answer: "Of course! We encourage clients to share inspiration and must-have moments. We'll work together to create a shot list that tells your unique story.",
    },
    {
      question: "How do we receive our photos?",
      answer: "All photos are delivered through a private online gallery where you can view, download, share, and order prints. You receive full resolution files with print rights.",
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored packages designed to capture your most important moments
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:bg-white/10 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-3">{service.description}</p>
                  <p className="text-primary">{service.price}</p>
                </div>
              </div>

              <ul className="space-y-3 border-t border-white/10 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 px-6 py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before booking</p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
