import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Small Plates", "Drinks", "Vegetarian", "Halal"];

const menuItems = [
  { name: "Amala & Ewedu", cat: "Lunch", price: "₦2,500", desc: "Traditional yam flour with ewedu and assorted meats", label: "All-You-Can-Eat" },
  { name: "Pepper Soup", cat: "Dinner", price: "₦3,000", desc: "Spicy goat meat pepper soup, slow-cooked for hours", label: "Late-Night Food" },
  { name: "Suya Skewers", cat: "Small Plates", price: "₦1,800", desc: "Flame-grilled beef suya with fresh onions & tomatoes", label: "Quick Bites" },
  { name: "Jollof Rice Special", cat: "Lunch", price: "₦3,500", desc: "Smoky party jollof with grilled chicken and plantain", label: null },
  { name: "Catfish Grill", cat: "Dinner", price: "₦4,000", desc: "Whole catfish grilled with special L'oria spice blend", label: null },
  { name: "Akara & Pap", cat: "Breakfast", price: "₦1,500", desc: "Fluffy bean cakes with warm pap, a perfect morning start", label: null },
  { name: "Yam & Eggs", cat: "Breakfast", price: "₦2,000", desc: "Fried yam with scrambled eggs and pepper sauce", label: null },
  { name: "Veggie Stir Fry", cat: "Vegetarian", price: "₦2,200", desc: "Fresh seasonal vegetables wok-fried with aromatic spices", label: null },
  { name: "Plantain Porridge", cat: "Vegetarian", price: "₦2,000", desc: "Unripe plantain cooked in rich palm oil sauce", label: null },
  { name: "Halal Chicken Shawarma", cat: "Halal", price: "₦2,500", desc: "Grilled halal chicken wrapped with fresh veggies & sauce", label: "Quick Bites" },
  { name: "Halal Beef Kebab", cat: "Halal", price: "₦2,800", desc: "Tender halal beef kebab with spiced yoghurt dip", label: null },
  { name: "Chapman", cat: "Drinks", price: "₦1,500", desc: "Nigeria's favourite mixed drink with citrus & grenadine", label: "Happy Hour" },
  { name: "Cocktail of the Day", cat: "Drinks", price: "₦2,500", desc: "Ask your bartender for today's handcrafted special", label: "Happy Hour" },
  { name: "Craft Beer Selection", cat: "Drinks", price: "₦2,000", desc: "Rotating selection of premium local and imported beers", label: null },
  { name: "Fresh Fruit Smoothie", cat: "Drinks", price: "₦1,800", desc: "Blended fresh fruits — mango, pineapple, or mixed berry", label: null },
  { name: "Nkwobi", cat: "Small Plates", price: "₦3,000", desc: "Spicy cow foot in palm oil sauce — a true delicacy", label: null },
  { name: "Asun (Spicy Goat)", cat: "Small Plates", price: "₦3,200", desc: "Diced peppered goat meat, grilled and seasoned", label: "Late-Night Food" },
];

const labelColors: Record<string, string> = {
  "Happy Hour": "bg-primary/20 text-primary",
  "All-You-Can-Eat": "bg-accent/20 text-accent",
  "Late-Night Food": "bg-wine/20 text-wine",
  "Quick Bites": "bg-neon/20 text-neon",
};

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.cat === active);

  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Taste the Best</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold">Our Menu</h1>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Menu grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors flex justify-between items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                    {item.label && (
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${labelColors[item.label] || "bg-secondary text-muted-foreground"}`}>
                        {item.label}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
                <span className="text-primary font-bold text-lg shrink-0">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
