import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">L'oria</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Restaurant + Amala Spot, Bar, Grills & Casino. Where fine dining meets vibrant nightlife in Awka.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/menu", label: "Our Menu" },
              { to: "/services", label: "Services" },
              { to: "/entertainment", label: "Bar & Casino" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:08133884379" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /> 0813 388 4379
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>16 Club Road, former Abakaliki St, Awka</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Open 24 Hours
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} L'oria Restaurant. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
