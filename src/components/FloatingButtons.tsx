import { Phone } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:08133884379"
      className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg glow-gold hover:scale-110 transition-transform"
      aria-label="Call us"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingButtons;
