import { useState, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";

interface PageLoaderProps {
  children: ReactNode;
  minLoadingTime?: number; // Minimum time to show loading (in ms)
}

const PageLoader = ({ children, minLoadingTime = 1000 }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loading when route changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [location.pathname, minLoadingTime]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loading" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!isLoading && <div key={location.pathname}>{children}</div>}
      </AnimatePresence>
    </>
  );
};

export default PageLoader;