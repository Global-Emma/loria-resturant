import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Car } from "lucide-react";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm font-medium mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient-gold">Contact & Reservations</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div {...fadeUp} className="space-y-8">
              <div className="bg-card rounded-xl p-8 border border-border space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5" />, title: "Call Us", content: <a href="tel:08133884379" className="hover:text-primary transition-colors">0813 388 4379</a> },
                  { icon: <MapPin className="w-5 h-5" />, title: "Address", content: "16 Club Road, former Abakaliki St, Awka" },
                  { icon: <Clock className="w-5 h-5" />, title: "Hours", content: "Open 24 Hours — Monday to Sunday" },
                  { icon: <Car className="w-5 h-5" />, title: "Parking", content: "Wheelchair-accessible parking lot available" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <iframe
                  title="L'oria Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d7.07!3d6.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzYuMCJOIDfCsDA0JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Reserve a Table</h2>
                <p className="text-muted-foreground text-sm mb-4">Fill in the form below and we'll confirm your booking.</p>

                {[
                  { key: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone *", type: "tel", placeholder: "08X XXXX XXXX" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Guests</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select</option>
                      {[1,2,3,4,5,6,7,8,"9+"].map((n) => <option key={n} value={n}>{n} {Number(n) === 1 ? "guest" : "guests"}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Special Requests</label>
                  <textarea
                    placeholder="Any special requests or dietary requirements..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-full font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity glow-gold">
                  Submit Reservation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
