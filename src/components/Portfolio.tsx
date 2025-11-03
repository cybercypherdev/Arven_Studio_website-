import { motion } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

const portfolioImages = [
  {
    id: 1,
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1719786625035-71f46082e385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYwODkyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Eternal Elegance",
    description: "A timeless celebration",
  },
  {
    id: 2,
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1588849538277-c54a54f9d63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjA4OTI1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sacred Moments",
    description: "Grace and beauty",
  },
  {
    id: 3,
    category: "Events",
    image: "https://images.unsplash.com/photo-1759560270562-468e8ba866e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDg5MjU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Corporate Excellence",
    description: "Professional events captured",
  },
  {
    id: 4,
    category: "Events",
    image: "https://images.unsplash.com/photo-1759496434742-771c92e66103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc2MDg5MjU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Grand Stages",
    description: "Event photography",
  },
  {
    id: 5,
    category: "Portraits",
    image: "https://images.unsplash.com/photo-1669789758542-8b7746dd0612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjA4MDE1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Personal Stories",
    description: "Individual portraits",
  },
  {
    id: 6,
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1701777892936-84cfa8a67cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDg5MjU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Fashion Forward",
    description: "Commercial campaigns",
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const categories = ["All", "Weddings", "Events", "Portraits", "Commercial"];

  const filteredImages = selectedCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of our finest work, showcasing moments that matter
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "glass-effect hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="glass-card p-4 rounded-xl">
                  <h3 className="text-xl mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxIndex !== null} onOpenChange={() => setLightboxIndex(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] bg-background/95 backdrop-blur-xl border-white/10 p-0">
          {lightboxIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-50 p-2 glass-effect rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {lightboxIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 z-50 p-3 glass-effect rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              <div className="w-full h-full flex items-center justify-center p-12">
                <img
                  src={filteredImages[lightboxIndex].image}
                  alt={filteredImages[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {lightboxIndex < filteredImages.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-50 p-3 glass-effect rounded-full hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full">
                <p className="text-sm">
                  {lightboxIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
