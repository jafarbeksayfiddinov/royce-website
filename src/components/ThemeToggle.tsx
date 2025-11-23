import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto theme switching based on time
  useEffect(() => {
    if (!mounted) return;

    const updateThemeByTime = () => {
      // Check if user has manually toggled in the last hour
      const manualOverride = localStorage.getItem("themeManualOverride");
      if (manualOverride) {
        const timestamp = parseInt(manualOverride);
        const oneHourAgo = Date.now() - 3600000;
        
        // If manual override is still valid (less than 1 hour old), skip auto-switching
        if (timestamp > oneHourAgo) {
          return;
        } else {
          // Override expired, remove it
          localStorage.removeItem("themeManualOverride");
        }
      }

      // Auto-switch based on time of day
      const hour = new Date().getHours();
      const shouldBeLightMode = hour >= 6 && hour < 18;
      const newTheme = shouldBeLightMode ? "light" : "dark";
      
      if (theme !== newTheme) {
        setTheme(newTheme);
      }
    };

    // Initial check after mount
    const timeout = setTimeout(updateThemeByTime, 100);

    // Check every minute for theme updates
    const interval = setInterval(updateThemeByTime, 60000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [theme, setTheme, mounted]);

  const handleManualToggle = () => {
    // Toggle theme immediately
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Set manual override timestamp (prevents auto-switch for 1 hour)
    localStorage.setItem("themeManualOverride", Date.now().toString());
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="transition-smooth">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleManualToggle}
      className="transition-smooth hover:scale-110 hover:rotate-12"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}