import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Package } from "lucide-react";

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-4xl md:text-5xl font-bold text-primary"
      animate={isInView ? { scale: [1, 1.1, 1] } : { scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 4000, suffix: "+", label: "Deliveries/Month" },
    { value: 400, suffix: "+", label: "Fleet Vehicles" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 99, suffix: "%", label: "On-Time Delivery" },
  ];

  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Floating Boxes Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: false }}
        className="absolute inset-0 pointer-events-none"
      >
        <Box className="absolute top-10 left-10 w-24 h-24 text-primary animate-float" />
        <Package className="absolute top-20 right-20 w-32 h-32 text-primary animate-float" style={{ animationDelay: "1s" }} />
        <Box className="absolute bottom-10 right-40 w-20 h-20 text-primary animate-float" style={{ animationDelay: "2s" }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-sm md:text-base text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;