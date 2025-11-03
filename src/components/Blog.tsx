import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Art of Capturing Authentic Wedding Moments",
      excerpt: "Discover our approach to documenting genuine emotion and spontaneous beauty on your special day.",
      image: "https://images.unsplash.com/photo-1719786625035-71f46082e385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYwODkyNTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 15, 2025",
      readTime: "5 min read",
      category: "Wedding Tips",
    },
    {
      id: 2,
      title: "Lighting Techniques for Stunning Portraits",
      excerpt: "Master the fundamentals of natural and studio lighting to elevate your portrait photography.",
      image: "https://images.unsplash.com/photo-1669789758542-8b7746dd0612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjA4MDE1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 10, 2025",
      readTime: "7 min read",
      category: "Photography Tips",
    },
    {
      id: 3,
      title: "Behind the Scenes: Commercial Brand Shoot",
      excerpt: "Take a look at our creative process for a recent luxury fashion campaign.",
      image: "https://images.unsplash.com/photo-1701777892936-84cfa8a67cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDg5MjU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 5, 2025",
      readTime: "4 min read",
      category: "Behind the Scenes",
    },
  ];

  return (
    <section id="blog" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl">Journal & Insights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stories, tips, and inspiration from behind the lens
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
