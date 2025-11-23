import { motion } from "framer-motion";
import { Nfc, ContactRound, Mail, Phone, MapPin, Clock, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 409 710 0000"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@roycelogistics.com", "support@roycelogistics.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["8401 Claude-Thomas Road, Franklin, OH 45005"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 3:00 PM"],
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@roycelogistics",
      url: "https://instagram.com/roycelogistics",
      color: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400",
    },
    {
      icon: Send,
      name: "Telegram",
      handle: "@roycelogistics",
      url: "https://t.me/roycelogistics",
      color: "hover:bg-[#0088cc]",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Royce LLC",
      url: "https://linkedin.com/company/roycelogistics",
      color: "hover:bg-[#0077b5]",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Royce LLC",
      url: "https://youtube.com/@roycelogistics",
      color: "hover:bg-[#ff0000]",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative bg-secondary">
        <div className="container mx-auto px-4">
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
              className="absolute top-10 right-10 w-48 h-48 opacity-50"
            >
              <Nfc className="w-full h-full text-primary" />
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
              <ContactRound className="w-full h-full text-primary" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for quotes, inquiries, or any questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateY: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                >
                  <Card className="h-full hover:shadow-large transition-smooth">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="bg-accent rounded-full p-4 w-fit mx-auto mb-4"
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </motion.div>
                      <h3 className="font-semibold mb-3">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368428698!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ3LjMiTiA3NMKwMDAnMDcuNyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "600px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royce LLC Location"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow us on social media to stay updated with the latest news, updates, and behind-the-scenes content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="block"
                >
                  <Card className={`h-full transition-all duration-300 group cursor-pointer hover:shadow-large ${social.color} hover:text-white`}>
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="bg-accent group-hover:bg-white/20 rounded-full p-4 w-fit mx-auto mb-4 transition-colors duration-300"
                        whileHover={{ 
                          rotate: 360,
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-accent-foreground group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors duration-300">{social.name}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                        {social.handle}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Have questions? Reach out to us directly at{" "}
              <a href="mailto:info@roycelogistics.com" className="text-primary font-semibold hover:underline">
                info@roycelogistics.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;