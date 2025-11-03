import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { format } from "date-fns";

export function Contact() {
  const [date, setDate] = useState<Date>();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@arvenstudios.com",
      link: "mailto:hello@arvenstudios.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+25410598625",
      link: "tel:+25410598625",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Eldoret City, Kenya",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Instagram, link: "#", label: "Instagram" },
    { icon: Facebook, link: "#", label: "Facebook" },
    { icon: Twitter, link: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl">Let's Create Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to book a session or have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-12 rounded-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">First Name</label>
                    <Input
                      placeholder=""
                      className="glass-effect border-white/10 bg-white/5 focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Last Name</label>
                    <Input
                      placeholder=""
                      className="glass-effect border-white/10 bg-white/5 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder=""
                    className="glass-effect border-white/10 bg-white/5 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Phone</label>
                  <Input
                    type="tel"
                    placeholder=""
                    className="glass-effect border-white/10 bg-white/5 focus:bg-white/10 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Service Type</label>
                    <Select>
                      <SelectTrigger className="glass-effect border-white/10 bg-white/5">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="glass-effect border-white/10 bg-background/95 backdrop-blur-xl">
                        <SelectItem value="wedding">Wedding Photography</SelectItem>
                        <SelectItem value="event">Event Coverage</SelectItem>
                        <SelectItem value="portrait">Portrait Session</SelectItem>
                        <SelectItem value="commercial">Commercial/Brand</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Preferred Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="w-full glass-effect border-white/10 bg-white/5 px-3 py-2 rounded-lg text-left hover:bg-white/10 transition-all">
                          {date ? format(date, "PPP") : "Pick a date"}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="glass-effect border-white/10 bg-background/95 backdrop-blur-xl w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Message</label>
                  <Textarea
                    placeholder="Tell us about your vision..."
                    rows={6}
                    className="glass-effect border-white/10 bg-white/5 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="p-4 glass-effect rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl mb-6">Studio Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9am - 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>By Appointment </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>10 am - 4pm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
