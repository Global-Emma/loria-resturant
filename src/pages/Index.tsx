import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import dish1 from "@/assets/featured-dish-1.jpg";
import dish2 from "@/assets/featured-dish-2.jpg";
import cocktails from "@/assets/cocktails.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const featuredDishes = [
  { img: dish1, name: "Amala Special", desc: "Signature yam flour with assorted meats", price: "₦3,500" },
  { img: dish2, name: "Suya Platter", desc: "Premium grilled skewers, spiced to perfection", price: "₦2,800" },
  { img: cocktails, name: "Cocktail Hour", desc: "Handcrafted premium cocktails & spirits", price: "₦2,000" },
];

const reviews = [
  { name: "Chioma A.", text: "Best Amala in Awka! The vibes are unmatched. We keep coming back every weekend.", rating: 5 },
  { name: "Emeka O.", text: "Great cocktails and the casino is so much fun. Perfect spot for a night out with friends.", rating: 5 },
  { name: "Blessing U.", text: "The grills here are fire! Literally. Amazing food, amazing atmosphere, amazing service.", rating: 4 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="L'oria restaurant interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-overlay-dark" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Restaurant • Bar • Grills • Casino</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold mb-6 leading-tight">
              L'oria
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Where exquisite Nigerian cuisine meets vibrant nightlife. Fine dining, craft cocktails, premium grills & thrilling casino — all under one roof.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary fill-primary" /> 4.2 (43 reviews)</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>₦2,000 – ₦4,000</span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Open 24 Hours</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity glow-gold">
                View Menu <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-primary/50 text-primary px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors">
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Specialties</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Featured Dishes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
              >
                <div className="overflow-hidden aspect-square">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{dish.name}</h3>
                    <span className="text-primary font-semibold">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Find Us", desc: "16 Club Road, former Abakaliki St, Awka" },
              { icon: <Clock className="w-6 h-6 text-primary" />, title: "Always Open", desc: "24 Hours, 7 Days a Week" },
              { icon: <Star className="w-6 h-6 text-primary fill-primary" />, title: "Top Rated", desc: "4.2 Stars — 43 Reviews" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="flex flex-col items-center gap-3">
                {item.icon}
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">What People Say</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Guest Reviews</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className={`w-4 h-4 ${s < r.rating ? "text-primary fill-primary" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="text-primary font-semibold text-sm">— {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-6">Ready for an Unforgettable Night?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              From sizzling grills to handcrafted cocktails and thrilling casino games — your perfect evening starts at L'oria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity glow-gold">
                Reserve Your Table
              </Link>
              <a href="tel:08133884379" className="inline-flex items-center gap-2 border border-primary/50 text-primary px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-primary/10 transition-colors">
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
