import { motion } from "framer-motion";
import { PersonStanding, SearchCheck, Users, Briefcase, Heart, TrendingUp, Upload, File as FileIcon, X, ArrowsUpFromLine, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef, DragEvent } from "react";

// ⚠️ IMPORTANT: Replace these with your actual values
const TELEGRAM_BOT_TOKEN = "8246219771:AAEk1fMq1tuA5S9ESVaYZBxpELh4nRc5Uz4";
const TELEGRAM_CHAT_ID = "1511502627";

const Careers = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Guaranteed 100% fuel discounts for driver.",
      description: "Save big on every trip and enjoy the best fuel access nationwide..",
      features: ["Pilot, Flying J, One9 through Pilot network", "Love's, TA through Fleetsmart", "Permits & documentation"],
    },
    {
      icon: TrendingUp,
      title: "On-Time Payments",
      description: (
        <>
          We pay every <span className="font-bold text-foreground">week</span> by scheduled day and time, <span className="font-bold text-foreground">no delays, no excuses</span>.
        </>
      ),
    },
    {
      icon: Briefcase,
      title: "Equipment & Maintenance",
      description: <>Your truck is your business — and we help you keep it running strong. We offer <span className="font-bold text-foreground">24/7 fleet support</span>, our own full-service shop at <span className="font-bold text-foreground">1526 Nicholas Road, Dayton, OH 45417</span>, and the best combination of <span className="font-bold text-foreground">low prices</span>, <span className="font-bold text-foreground">fast work</span>, and <span className="font-bold text-foreground">real quality</span>.</>
    },
    {
      icon: Users,
      title: "Safety & Compliance Support",
      description: "Driver safety and legal compliance are our top priorities. We assist with:",
      features: ["Registrations", "Highway & IFTA tax filings", "Permits & documentation"],
    },
    {
      icon: ArrowsUpFromLine,
      title: "Dispatch team",
      description: <>Top-notch big team with <span className="font-bold text-foreground">100+ employees</span> taking a special care about <span className="font-bold text-foreground">driver gross</span></>
    },
    {
      icon: ShieldCheck,
      title: "ELD Support",
      description: <>Our team is dedicated to drivers, providing <span className="font-bold text-foreground">24/7 support</span> and using our own <span className="font-bold text-foreground">ELD system</span> to keep operations smooth and help drivers maximize their <span className="font-bold text-foreground">earnings</span> safely and efficiently.</>
    }
  ];

  const positions = [
    "Truck Driver - Long Distance",
    "Truck Driver - Local",
    "Warehouse Supervisor",
    "Logistics Coordinator",
    "Fleet Manager",
    "Operations Manager",
    "Customer Service Representative",
    "Other",
  ];

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  const processFile = (file: File | undefined) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast({
        variant: "destructive",
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
      });
      return;
    }

    setFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    processFile(e.target.files?.[0]);
  };

  const handleFileAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    processFile(e.dataTransfer.files?.[0]);
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sendToTelegram = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Prepare message text
      const message = `
🆕 *New Job Application*

👤 *Name:* ${formData.get('name')}
📧 *Email:* ${formData.get('email')}
📱 *Phone:* ${formData.get('phone')}
💼 *Position:* ${formData.get('position')}
📅 *Experience:* ${formData.get('experience') || 'Not specified'}

📝 *Message:*
${formData.get('message') || 'No additional information provided'}
      `.trim();

      // Send text message
      const textResponse = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!textResponse.ok) {
        throw new Error("Failed to send message to Telegram");
      }

      // Send file if attached
      if (file) {
        const fileFormData = new FormData();
        fileFormData.append("chat_id", TELEGRAM_CHAT_ID);
        fileFormData.append("document", file);
        fileFormData.append("caption", `Resume/CV from ${formData.get('name')}`);

        const fileResponse = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
          {
            method: "POST",
            body: fileFormData,
          }
        );

        if (!fileResponse.ok) {
          throw new Error("Failed to send file to Telegram");
        }
      }

      toast({
        title: "Application Submitted!",
        description: "We've received your application and will get back to you soon.",
      });

      // Reset form
      form.reset();
      setFile(null);
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <SearchCheck className="w-full h-full text-primary" />
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
              <PersonStanding className="w-full h-full text-primary" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              At Royce LLC, we treat our drivers like partners — because you are the heart of everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team that values your contribution and invests in your future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                      <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <ul className="space-y-2">
                        {benefit.features && benefit.features.length > 0 && (
                        <ul className="space-y-2">
                          {benefit.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 2 business days
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-8">
                <form onSubmit={sendToTelegram} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (XXX) XXX-XXXX"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position *</Label>
                      <select
                        id="position"
                        name="position"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select position</option>
                        {positions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about yourself, your qualifications, and why you'd like to join our team..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Resume/CV</Label>
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer"
                      onClick={handleFileAreaClick}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      {file ? (
                        <div className="flex flex-col items-center gap-2">
                          <FileIcon className="w-8 h-8 text-primary" />
                          <p className="text-sm font-medium">{file.name}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-destructive hover:text-destructive"
                            onClick={handleRemoveFile}
                          >
                            <X className="w-3 h-3 mr-1" />
                            Remove file
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-1">
                            <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (max 5MB)</p>
                        </div>
                      )}

                      <input
                        type="file"
                        name="attachment"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What We Look For Section */}
      {/* What We Look For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">What We Look For</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <Card className="hover:shadow-large transition-smooth">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">For Drivers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Valid commercial driver's license (CDL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Professional attitude and reliability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Experience with long-distance hauling (preferred)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
