import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Clock, Shield, TrendingUp, Users, Truck, Box, ChevronLeft, ChevronRight, ArrowsUpFromLine, ShieldCheck } from "lucide-react";
import { Briefcase, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTruck from "@/assets/hero-truck.jpg";
import { useRef, useEffect, useCallback, useState } from "react";
import AnimatedStatCard from "@/components/AnimatedStatCard";
import useEmblaCarousel from "embla-carousel-react";
import arcLogo from "@/assets/arc.png";
import xpoLogo from "@/assets/xpo.png";
import hubLogo from "@/assets/hub.png";
import estesLogo from "@/assets/estes.png";
import jbhuntLogo from "@/assets/jbhunt.png";
import nfiLogo from "@/assets/nfi.png";
import penskeLogo from "@/assets/penske.png";
import primeLogo from "@/assets/prime.png";
import roadrunnerLogo from "@/assets/roadrunner.png";
import ryderLogo from "@/assets/ryder.png";
import schLogo from "@/assets/sch.png";
import tfiLogo from "@/assets/tfi.png";
import wernerLogo from "@/assets/werner.png";
import yrcLogo from "@/assets/yrc.png";
import amazonLogo from "@/assets/amazon.png";
import upsLogo from "@/assets/ups.png";
import fedexLogo from "@/assets/fedex.png";

const partners = [
  { name: "Amazon", description: "Global e-commerce and logistics leader", logo: amazonLogo },
  { name: "ARC", description: "Premium freight and cargo services", logo: arcLogo },
  { name: "FedEx", description: "Worldwide shipping and delivery", logo: fedexLogo },
  { name: "UPS", description: "Package delivery and supply chain", logo: upsLogo },
  { name: "XPO", description: "Global e-commerce and logistics leader", logo: xpoLogo },
  { name: "Hub Group", description: "Premium freight and cargo services", logo: hubLogo },
  { name: "Estes", description: "Worldwide shipping and delivery", logo: estesLogo },
  { name: "JBHunt", description: "Package delivery and supply chain", logo: jbhuntLogo },
  { name: "NFI", description: "Package delivery and supply chain", logo: nfiLogo },
  { name: "Penske", description: "Package delivery and supply chain", logo: penskeLogo },
  { name: "Prime", description: "Package delivery and supply chain", logo: primeLogo },
  { name: "Roadrunner", description: "Package delivery and supply chain", logo: roadrunnerLogo },
  { name: "Ryder", description: "Package delivery and supply chain", logo: ryderLogo },
  { name: "SCH", description: "Package delivery and supply chain", logo: schLogo },
  { name: "TFI", description: "Package delivery and supply chain", logo: tfiLogo },
  { name: "Werner", description: "Package delivery and supply chain", logo: wernerLogo },
  { name: "YRC", description: "Package delivery and supply chain", logo: yrcLogo }
];

const driverFeedback = [
  { name: "Jason Miller", role: "Long-Haul Driver", feedback: "I joined this company a few months ago, and the experience has been great so far. The weekly pay always hits on time, which makes budgeting easy. The fuel card with 100% coverage saves me a ton every week. Support is truly 24/7—I've called at 2 AM before and still got help right away. Their safety team is also one of the best I've seen; they actually train you instead of just giving rules." },
  { name: "Jahongir Mamatov", role: "Regional Driver", feedback: "Bu kompaniyada ishlayotganimga ancha bo'ldi, juda mamnunman. Rejslar vaqtida beriladi, yuklar tartibli, mashinalar esa yaxshi holatda. Eng muhimi – rahbariyat haydovchilarning gapini eshitadi, muammo bo'lsa tezda hal qiladi. O'zimni qadrlangan xodimdek his qilaman." },
  { name: "Сергей Литовченко", role: "Owner Operator", feedback: "Работаю здесь с уверенностью и спокойствием. Зарплата приходит каждую неделю и всегда вовремя — ни разу не подводили. Большой плюс — топливная карта со 100% скидкой, экономия отличная. Поддержка работает круглосуточно, можно позвонить в любое время. Отдельно хочу отметить службу безопасности — ребята профессионалы, всегда помогут и подскажут." },
  { name: "Данияр Өлжанов", role: "Owner Operator", feedback: "Жұмыс көңілден шығады. Апта сайынғы төлем уақытында түседі. Жанармай картасы жолда жақсы көмектеседі. Қолдау тобы жылдам жауап береді. Жалпы, өзімді қауіпсіз әрі сенімді компанияда жұмыс істеп жүргендей сезінемін." },
  { name: "Serkan Aydınoğlu", role: "Owner Operator", feedback: "Şirkette her şey düzenli ilerliyor. Haftalık ödeme tam zamanında yapılıyor. Yakıt kartı büyük kolaylık sağlıyor. Destek ekibi hızlı dönüyor. Kendimi güvenilir bir ortamda çalışıyor gibi hissediyorum." }
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  // Partners Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    const autoplay = setInterval(() => { if (emblaApi) emblaApi.scrollNext(); }, 4000);
    return () => { clearInterval(autoplay); emblaApi.off("select", onSelect); emblaApi.off("reInit", onSelect); };
  }, [emblaApi, onSelect]);

  // Driver Feedback Carousel
  const [feedbackRef, feedbackApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false, dragFree: false });
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const feedbackPrev = useCallback(() => feedbackApi && feedbackApi.scrollPrev(), [feedbackApi]);
  const feedbackNext = useCallback(() => feedbackApi && feedbackApi.scrollNext(), [feedbackApi]);
  const feedbackTo = useCallback((index: number) => feedbackApi && feedbackApi.scrollTo(index), [feedbackApi]);

  const onFeedbackSelect = useCallback(() => {
    if (!feedbackApi) return;
    setFeedbackIndex(feedbackApi.selectedScrollSnap());
  }, [feedbackApi]);

  useEffect(() => {
    if (!feedbackApi) return;
    onFeedbackSelect();
    feedbackApi.on("select", onFeedbackSelect);
    feedbackApi.on("reInit", onFeedbackSelect);
    const autoplay = setInterval(() => { if (feedbackApi) feedbackApi.scrollNext(); }, 5000);
    return () => { clearInterval(autoplay); feedbackApi.off("select", onFeedbackSelect); feedbackApi.off("reInit", onFeedbackSelect); };
  }, [feedbackApi, onFeedbackSelect]);

  const benefits = [
    { icon: Heart, title: "Guaranteed 100% fuel discounts for driver.", description: "Save big on every trip and enjoy the best fuel access nationwide..", features: ["Pilot, Flying J, One9 through Pilot network", "Love's, TA through Fleetsmart", "Permits & documentation"] },
    { icon: TrendingUp, title: "On-Time Payments", description: (<>We pay every <span className="font-bold text-foreground">week</span> by scheduled day and time, <span className="font-bold text-foreground">no delays, no excuses</span>.</>) },
    { icon: Briefcase, title: "Equipment & Maintenance", description: <>Your truck is your business – and we help you keep it running strong. We offer <span className="font-bold text-foreground">24/7 fleet support</span>, our own full-service shop at <span className="font-bold text-foreground">1526 Nicholas Road, Dayton, OH 45417</span>, and the best combination of <span className="font-bold text-foreground">low prices</span>, <span className="font-bold text-foreground">fast work</span>, and <span className="font-bold text-foreground">real quality</span>.</> },
    { icon: Users, title: "Safety & Compliance Support", description: "Driver safety and legal compliance are our top priorities. We assist with:", features: ["Registrations", "Highway & IFTA tax filings", "Permits & documentation"] },
    { icon: ArrowsUpFromLine, title: "Dispatch team", description: <>Top-notch big team with <span className="font-bold text-foreground">100+ employees</span> taking a special care about <span className="font-bold text-foreground">driver gross</span></> },
    { icon: ShieldCheck, title: "ELD Support", description: <>Our team is dedicated to drivers, providing <span className="font-bold text-foreground">24/7 support</span> and using our own <span className="font-bold text-foreground">ELD system</span> to keep operations smooth and help drivers maximize their <span className="font-bold text-foreground">earnings</span> safely and efficiently.</> }
  ];

  const truckX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "100%"]);
  const truckX2 = useTransform(scrollYProgress, [0.5, 1], ["-100%", "100%"]);

  const services = [
    { icon: Package, title: "Dry Van Freight", description: "Consistent, high-quality loads across top U.S. routes." },
    { icon: Clock, title: "Partial Loads", description: "Flexible options designed to maximize your earnings per mile." },
    { icon: Shield, title: "Drop and Hook", description: "Fast, efficient turnarounds to keep your wheels moving and your profits growing." }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroTruck})` }}>
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">Driving America's<br />Logistics Forward</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">Professional trucking and logistics services connecting businesses across the United States</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services"><Button size="lg" className="text-lg px-8 shadow-large">Our Services <ArrowRight className="ml-2" /></Button></Link>
              <Link to="/contact"><Button size="lg" variant="secondary" className="text-lg px-8 shadow-large">Contact Us</Button></Link>
            </div>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }} />
          </div>
        </motion.div>
      </section>

      {/* Animated Truck Divider */}
      <div className="relative h-40 bg-secondary overflow-hidden">
        <motion.div style={{ x: truckX }} className="absolute top-1/3 -translate-y-1"><Truck className="w-24 h-24 text-primary" /></motion.div>
      </div>

      {/* Stats Section */}
      <AnimatedStatCard />

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }} className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path d="M 0,50 Q 25,20 50,50 T 100,50" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }} />
          </svg>
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join a premium fleet built on reliability, respect, and results.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-large transition-smooth group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="bg-accent rounded-lg p-4 w-fit mb-4 group-hover:scale-110 transition-smooth"><Icon className="w-8 h-8 text-accent-foreground" /></div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Truck Divider 2 */}
      <div className="relative h-32 bg-background overflow-hidden">
        <motion.div style={{ x: truckX2 }} className="absolute top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-6"><Truck className="w-24 h-24 text-primary" /><div className="flex gap-3"><Box className="w-12 h-12 text-primary opacity-70" /><Box className="w-12 h-12 text-primary opacity-70" /></div></div>
        </motion.div>
      </div>

      {/* Partners Section with Carousel */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} className="absolute inset-0 pointer-events-none">
          <Package className="absolute top-10 left-10 w-32 h-32 text-primary animate-float" />
          <Box className="absolute bottom-20 right-20 w-40 h-40 text-primary animate-float" style={{ animationDelay: "1s" }} />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Trusted by leading companies in the logistics industry</p>
          </motion.div>
          <div className="relative max-w-6xl mx-auto">
            <Button size="icon" type="button" className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg" onClick={scrollPrev}><ChevronLeft className="w-5 h-5 text-muted-foreground" /></Button>
            <Button size="icon" type="button" className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg" onClick={scrollNext}><ChevronRight className="w-5 h-5 text-muted-foreground" /></Button>
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex items-center">
                {partners.map((partner, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33%]">
                    <div className="h-40 w-full flex items-center justify-center px-8 select-none">
                      <motion.img initial={{ opacity: 1, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.5 }} src={partner.logo} alt={`${partner.name} logo`} className="w-full h-full object-contain filter opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                      <Truck className="w-20 h-20 text-primary/50 hidden mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {partners.map((_, index) => (
                <button key={index} type="button" onClick={() => scrollTo(index)} className={`transition-all duration-300 rounded-full ${selectedIndex === index ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-primary/30 hover:bg-primary/60"}`} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Drivers Feedback Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} className="absolute inset-0 pointer-events-none">
          <Users className="absolute top-10 right-10 w-48 h-48 text-primary animate-float" />
          <Truck className="absolute bottom-10 left-10 w-40 h-40 text-primary animate-float" style={{ animationDelay: "1s" }} />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Driver Feedback</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear what our professional drivers have to say about working with us</p>
          </motion.div>
          <div className="relative max-w-6xl mx-auto">
            <Button size="icon" type="button" className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg" onClick={feedbackPrev}><ChevronLeft className="w-5 h-5 text-muted-foreground" /></Button>
            <Button size="icon" type="button" className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg" onClick={feedbackNext}><ChevronRight className="w-5 h-5 text-muted-foreground" /></Button>
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={feedbackRef}>
              <div className="flex">
                {driverFeedback.map((driver, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                    <Card className="h-full hover:shadow-large transition-smooth">
                      <CardContent className="p-6">
                        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.7 }} className="bg-accent rounded-full p-4 w-fit mb-4">
                          <Users className="w-8 h-8 text-accent-foreground" />
                        </motion.div>
                        <p className="text-muted-foreground mb-4 italic line-clamp-6">"{driver.feedback}"</p>
                        <div className="border-t pt-4">
                          <p className="font-semibold">{driver.name}</p>
                          <p className="text-sm text-muted-foreground">{driver.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {driverFeedback.map((_, index) => (
                <button key={index} type="button" onClick={() => feedbackTo(index)} className={`transition-all duration-300 rounded-full ${feedbackIndex === index ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-primary/30 hover:bg-primary/60"}`} aria-label={`Go to feedback ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join a team that values your contribution and invests in your future</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full hover:shadow-large transition-smooth group cursor-pointer">
                    <CardContent className="p-6">
                      <motion.div className="bg-accent rounded-lg p-4 w-fit mb-4" whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}><Icon className="w-8 h-8 text-accent-foreground" /></motion.div>
                      <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      {benefit.features && benefit.features.length > 0 && (
                        <ul className="space-y-2">
                          {benefit.features.map((feature, i) => (<li key={i} className="flex items-start gap-2 text-sm"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" /><span>{feature}</span></li>))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} className="absolute inset-0 pointer-events-none">
          <Truck className="absolute top-10 left-10 w-48 h-48 text-primary animate-float" />
          <Package className="absolute bottom-10 right-10 w-40 h-40 text-primary animate-float" style={{ animationDelay: "1s" }} />
          <Clock className="absolute top-1/2 left-1/4 w-36 h-36 text-primary animate-float" style={{ animationDelay: "2s" }} />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gradient-hero rounded-2xl p-12 text-center shadow-large">
            <Users className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">Join Our Team</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">We're always looking for professional drivers to join our growing team.</p>
            <Link to="/careers"><Button size="lg" variant="secondary" className="text-lg px-8">View Opportunities <ArrowRight className="ml-2" /></Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;