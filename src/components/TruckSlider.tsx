import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TruckSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trucks = [
    {
      name: "FREIGHTLINER CASCADIA",
      specs: ["INVERTER", "AUTOMATIC", "COMBO SLEEPER"],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=600&fit=crop" // Placeholder - replace with actual truck image
    },
    {
      name: "VOLVO BG",
      specs: ["INVERTER", "AUTOMATIC", "COMBO SLEEPER"],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=600&fit=crop" // Placeholder - replace with actual truck image
    },
    {
      name: "KENWORTH T680",
      specs: ["INVERTER", "AUTOMATIC", "COMBO SLEEPER"],
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&h=600&fit=crop" // Placeholder - replace with actual truck image
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trucks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trucks.length) % trucks.length);
  };

  return (
    <section className="py-20 bg-secondary  relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trucks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer
            </p>
          </motion.div>

          {/* Slider Content */}
          <Card className="relative min-h-[450px] p-10 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Truck Info */}
                
                <div className="space-y-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold mb-4"
                  >
                    {trucks[currentSlide].name}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    {trucks[currentSlide].specs.map((spec, index) => (
                      <p
                        key={index}
                        className="text-base md:text-lg text-slate-600 dark:text-slate-400 uppercase tracking-wide"
                      >
                        {spec}
                      </p>
                    ))}
                  </motion.div>
                </div>

                {/* Truck Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={trucks[currentSlide].image}
                    alt={trucks[currentSlide].name}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute ml-10 mb-5 bottom-8 left-0 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-accent  shadow-lg transition-all hover:scale-110"
              >
                <MoveLeft className="w-20 h-20 text-accent-foreground" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-accent shadow-lg transition-all hover:scale-110"
              >
                <MoveRight className="w-20 h-20 text-accent-foreground" />
              </Button>
            </div>

            {/* Slide Counter */}
            <div className="absolute mr-10 mt-8 top-0 right-0">
              <span className="text-3xl md:text-2xl font-bold text-primary">
                {currentSlide + 1}/{trucks.length}
              </span>
            </div>
          </Card>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {trucks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-accent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckSlider;