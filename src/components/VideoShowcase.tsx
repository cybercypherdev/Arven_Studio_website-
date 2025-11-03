import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Sarah & James Wedding Film",
      thumbnail: "https://images.unsplash.com/photo-1588849538277-c54a54f9d63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHdlZGRpbmclMjBjZXJlbW9ueXxlbnwxfHx8fDE3NjA4OTI1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3:45",
      category: "Wedding",
    },
    {
      id: 2,
      title: "Corporate Event Highlight Reel",
      thumbnail: "https://images.unsplash.com/photo-1759496434742-771c92e66103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc2MDg5MjU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "2:30",
      category: "Events",
    },
    {
      id: 3,
      title: "Fashion Campaign BTS",
      thumbnail: "https://images.unsplash.com/photo-1701777892936-84cfa8a67cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDg5MjU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "4:15",
      category: "Commercial",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl">Cinematic Reels</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our storytelling through motion and sound
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-card p-2 group cursor-pointer">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] group-hover:bg-background/20 transition-all duration-500" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">
                      {videos[0].category}
                    </span>
                    <span className="text-sm text-muted-foreground">{videos[0].duration}</span>
                  </div>
                  <h3 className="text-2xl">{videos[0].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden glass-card p-2 group cursor-pointer"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] group-hover:bg-background/20 transition-all duration-500" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">
                        {video.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                    </div>
                    <h3 className="text-lg">{video.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about videos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Click on any video to watch the full reel on our YouTube channel
          </p>
        </motion.div>
      </div>
    </section>
  );
}
