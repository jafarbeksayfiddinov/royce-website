import { motion } from "framer-motion";
import { CircleUser, Truck, Package, Warehouse, InspectionPanel, MonitorCog } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import samsaraLogo from "@/assets/samara.jpg";
import bestpassLogo from "@/assets/bestpass.png";
import prepassLogo from "@/assets/prepass.png";
import politjLogo from "@/assets/pilotj.png";
import greenlightLogo from "@/assets/greenlight.png";
import lovesLogo from "@/assets/loves.png";


const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Dry Van Freight",
      description: "Consistent, high-quality loads across top U.S. routes.",
      features: ["Point-to-point delivery", "Full truck capacity", "Faster transit times", "Reduced handling"],
    },
    {
      icon: Package,
      title: "Partial Loads",
      description: "Flexible options designed to maximize your earnings per mile.",
      features: ["Shared truck space", "Cost savings", "Flexible scheduling", "Consolidated shipping"],
    },
    {
      icon: Warehouse,
      title: "Drop and Hook",
      description: "Fast, efficient turnarounds to keep your wheels moving and your profits growing.",
      features: ["Climate-controlled storage", "24/7 security", "Inventory tracking", "Pick and pack services"],
    },
  ];

  const equipment = [
    {
      name: "Samsara",
      description: "AI-Powered Dash Cam",
      logo: samsaraLogo
    },
    {
      name: "Bestpass",
      description: "Toll Road Devices",
      logo: bestpassLogo
    },
    {
      name: "PrePass",
      description: "Weight Station Devices",
      logo: prepassLogo
    },
    {
      name: "Pilot Flying J",
      description: "Fuel Discount Accounts",
      logo: politjLogo
    },
    {
      name: "Green Light ELD",
      description: "Electronic Logging Device",
      logo: greenlightLogo
    },
    {
      name: "Love's Travel Stops",
      description: "Fuel & Service Network",
      logo: lovesLogo
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-50 right-40 w-40 h-40 opacity-50"
          >
            <Package className="w-full h-full text-primary" />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 left-40 w-40 h-40 opacity-50"
          >
            <Warehouse className="w-full h-full text-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
                Join a premium fleet built on reliability, respect, and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-large transition-smooth group cursor-pointer">
                    <CardContent className="p-6">
                      <motion.div 
                        className="bg-accent rounded-lg p-4 w-fit mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 relative bg-secondary">
        <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.25 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <InspectionPanel className="absolute top-10 left-10 w-32 h-32 text-primary animate-float " />
                  <MonitorCog className="absolute bottom-0 right-20 w-40 h-40 text-primary animate-float z-0" style={{ animationDelay: "1s" }} />
                </motion.div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Equipment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We equip our fleet with the latest and most reliable equipment to ensure safety, efficiency, and savings for our drivers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 relative lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-large transition-smooth">
                  <CardContent className="p-6 flex flex-col items-center text-center ">
                    <motion.div 
                      className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 shadow-soft"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <img 
                        src={item.logo} 
                        alt={`${item.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-accent rounded-lg"><span class="text-2xl font-bold text-accent-foreground">${item.name.charAt(0)}</span></div>`;
                        }}
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 pointer-events-none"
          >
            <CircleUser className="absolute top-10 right-20 w-48 h-48 text-primary animate-float" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free quote and experience the difference of professional logistics services
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
