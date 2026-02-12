import { motion } from "framer-motion";
import { Users, Beer, Sparkles, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const usps = [
  { icon: <Beer className="w-8 h-8" />, title: "Great Beer & Cocktails", desc: "Expertly crafted drinks from local brews to premium spirits and signature cocktails." },
  { icon: <Sparkles className="w-8 h-8" />, title: "Casual Trendy Atmosphere", desc: "A vibrant space where luxury meets comfort — perfect for any occasion." },
  { icon: <Users className="w-8 h-8" />, title: "Perfect for Groups", desc: "Spacious seating, group-friendly menus, and an atmosphere that brings people together." },
  { icon: <Globe className="w-8 h-8" />, title: "Tourists & Students Welcome", desc: "Whether you're visiting Awka or studying here, L'oria is your home away from home." },
];

const About = () => (
  <div className="pt-20">
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Story</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-8">About L'oria</h1>
          <p className="text-foreground/80 text-lg leading-relaxed">
            L'oria was born from a simple dream — to create a space in Awka where flavour, fun, and culture come alive. 
            From our signature Amala to our electric nightlife scene, every detail is designed to make your experience unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {usps.map((u, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform inline-block">{u.icon}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="mt-20 bg-card rounded-xl p-10 md:p-16 border border-border text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">More Than Just a Restaurant</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're a full lifestyle destination — serving authentic Nigerian cuisine all day, mixing the best cocktails in town, 
            grilling up premium cuts over open flames, and keeping the energy high with our casino and entertainment lounge. 
            At L'oria, every hour is golden hour.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default About;
