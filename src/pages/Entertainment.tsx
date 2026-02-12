import { motion } from "framer-motion";
import { Wine, GlassWater, Dice1, Music, Clock, Sparkles } from "lucide-react";
import cocktailsImg from "@/assets/cocktails.jpg";
import casinoImg from "@/assets/casino.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Entertainment = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative py-32 overflow-hidden">
      <img src={casinoImg} alt="Casino nightlife" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Nights at L'oria</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold mb-6">Bar & Entertainment</h1>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            From craft cocktails to casino thrills — the nightlife at L'oria is where Awka comes alive.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Drinks */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">The Bar</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Craft Cocktails & Premium Spirits</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our expert bartenders pour passion into every glass. From classic Nigerian Chapman to international 
              cocktail creations, our bar menu is designed to elevate your evening.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Wine className="w-5 h-5" />, text: "Premium Wines" },
                { icon: <GlassWater className="w-5 h-5" />, text: "Signature Cocktails" },
                { icon: <Clock className="w-5 h-5" />, text: "Happy Hour Deals" },
                { icon: <Sparkles className="w-5 h-5" />, text: "Craft Beers" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="text-primary">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <img src={cocktailsImg} alt="Premium cocktails" className="rounded-xl w-full aspect-square object-cover border border-border" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Casino & Nightlife */}
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp}>
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Casino & Games</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Try Your Luck</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Step into our casino lounge for an exciting night of table games, music, and good vibes. 
            Whether you're a seasoned player or just here for the fun, the excitement never stops.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <Dice1 className="w-10 h-10" />, title: "Table Games", desc: "Classic card and table games all night long" },
            { icon: <Music className="w-10 h-10" />, title: "Live Music", desc: "DJs and live performances every weekend" },
            { icon: <Clock className="w-10 h-10" />, title: "24/7 Open", desc: "The fun never stops — we're always open" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-background rounded-xl p-8 border border-border group hover:border-primary/30 transition-colors"
            >
              <div className="text-primary mb-4 inline-block group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Happy Hour Promo */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div {...fadeUp} className="bg-card rounded-2xl p-10 md:p-16 border border-primary/20 glow-gold">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">🍹 Special Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">Happy Hour</h2>
          <p className="text-foreground/80 text-lg mb-2">Every Day • 5 PM – 8 PM</p>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Buy one get one free on selected cocktails, 50% off craft beers, and complimentary small plates with every drink order.
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Entertainment;
