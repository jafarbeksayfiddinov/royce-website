import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Eye, Award, Users, TrendingUp, Package, Shield, Box, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import warehouse from "@/assets/warehouse.jpg";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide reliable, efficient, and professional logistics solutions that power businesses across the United States.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become the leading logistics partner in the United States, known for innovation, reliability, and customer satisfaction.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in service quality, safety, and operational efficiency.",
    },
    {
      icon: Users,
      title: "Team First",
      description: "Our success is built on the dedication and professionalism of our drivers and staff.",
    },
  ];

  return (
    <div className="min-h-screen pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10 w-64 h-64 opacity-50"
          >
            <TrendingUp className="w-full h-full text-primary" />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, 50, 0]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-20 left-10 w-48 h-48 opacity-50"
          >
            <Package className="w-full h-full text-primary" />
          </motion.div>
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "linear-gradient(90deg, hsl(var(--foreground)), hsl(var(--primary)), hsl(var(--foreground)))",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              About Royce LLC
            </motion.h1>
            <p className="text-xl text-muted-foreground">
              Building bridges between businesses through reliable transportation and logistics services since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={warehouse}
                alt="Royce LLC warehouse facility"
                className="rounded-lg shadow-large"
              />
            </div>

            <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
              <Package className="absolute top-10 left-10 w-32 h-32 text-primary animate-float" />

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6"
                whileInView={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3 }}
              >
                Our Story
              </motion.h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2020 in Ohio, our company has grown rapidly thanks to a simple principle: taking care of our drivers and staff. With exceptional people behind every operation, we’ve built strong partnerships with major carriers, delivering reliable, top-notch service.
                </p>
                <p>
                  From the start, we’ve welcomed and respected a diverse group of drivers, creating a culture of trust and professionalism. This approach allowed us to expand our fleet to over 500 trucks and grow our team quickly, without ever losing the personal touch that makes every driver feel valued.
                </p>
                <p>
                  To stay ahead in a competitive industry, we’ve invested in modern technology, advanced tracking systems, and comprehensive training programs, ensuring that every driver has the tools and knowledge to perform at their best.
                </p>
                <p>
                  Our story is simple: care for our people, excellence in our work, and growth built on trust, respect, and innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Animated Shield Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Shield className="w-96 h-96 text-primary" />
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2> 
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="h-full hover:shadow-large transition-smooth">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="bg-accent rounded-full p-4 w-fit mx-auto mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.6 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Royce LLC?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                5+
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-muted-foreground">
                Over a decade of proven expertise in logistics and transportation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                99%
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                Consistently meeting delivery schedules with precision timing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="text-5xl font-bold text-primary mb-2"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                24/7
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Driver Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock support for all your logistics needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
