import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Truck } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="bg-primary rounded-lg p-2"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Truck className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div>
                <h3 className="font-bold text-lg">Royce LLC</h3>
                <p className="text-xs text-muted-foreground">Driving Forward</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading logistics and trucking company in the United States, delivering excellence nationwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Join Our Team
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Dry Van Freight
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Partial Loads
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Drop and Hook
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Services */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <motion.li whileHover={{ x: 5, color: "hsl(var(--primary))" }} transition={{ duration: 0.2 }}>
                Cargo Transportation
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "hsl(var(--primary))" }} transition={{ duration: 0.2 }}>
                Warehousing
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "hsl(var(--primary))" }} transition={{ duration: 0.2 }}>
                Fleet Management
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "hsl(var(--primary))" }} transition={{ duration: 0.2 }}>
                Express Delivery
              </motion.li>
            </ul>
          </motion.div> */}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start gap-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>+1 409 710 0000</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>info@roycelogistics.com</span>
              </motion.li>
              <motion.li 
                className="flex items-start gap-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>8401 Claude-Thomas Road, Franklin, OH 45005</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Royce LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
