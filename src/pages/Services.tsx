import { motion } from "framer-motion";
import { TreePine, Truck, Car, ShoppingBag, UtensilsCrossed, ChefHat, CalendarCheck, Accessibility } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: <TreePine className="w-8 h-8" />, title: "Outdoor Seating", desc: "Enjoy your meal in our beautiful open-air terrace." },
  { icon: <Truck className="w-8 h-8" />, title: "Delivery", desc: "Fast delivery with no-contact options available." },
  { icon: <Car className="w-8 h-8" />, title: "Drive-Through", desc: "Quick and convenient drive-through service." },
  { icon: <ShoppingBag className="w-8 h-8" />, title: "Takeaway", desc: "Grab your favourites to go, freshly packed." },
  { icon: <UtensilsCrossed className="w-8 h-8" />, title: "Dine-In", desc: "Premium indoor dining experience." },
  { icon: <ChefHat className="w-8 h-8" />, title: "Catering", desc: "Full catering for events, parties & corporate functions." },
  { icon: <CalendarCheck className="w-8 h-8" />, title: "Reservations", desc: "Book your table in advance for guaranteed seating." },
  { icon: <Accessibility className="w-8 h-8" />, title: "Accessible", desc: "Wheelchair-accessible parking, entrance & seating." },
];

const Services = () => (
  <div className="pt-20">
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">How We Serve You</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold">Our Services</h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors text-center group"
            >
              <div className="text-primary mb-4 inline-block group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
