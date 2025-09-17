import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadComplete, 500); // Small delay for fade out
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        {/* Outer turntable */}
        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 animate-spin-slow relative">
          {/* Inner vinyl record */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-background via-muted to-background border-2 border-primary/50">
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary glow-neon"></div>
            
            {/* Vinyl grooves */}
            <div className="absolute inset-2 rounded-full border border-primary/20"></div>
            <div className="absolute inset-4 rounded-full border border-primary/15"></div>
            <div className="absolute inset-6 rounded-full border border-primary/10"></div>
            <div className="absolute inset-8 rounded-full border border-primary/10"></div>
          </div>
          
          {/* Needle arm */}
          <div className="absolute -top-2 right-8 w-16 h-1 bg-primary/80 rounded-full transform rotate-45 origin-right">
            <div className="absolute -left-1 -top-1 w-3 h-3 bg-primary rounded-full glow-neon"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="font-heading text-2xl font-bold text-neon-strong animate-pulse">
            RUNAWAY TONIGHT
          </h2>
          <p className="text-muted-foreground mt-2 animate-fade-in">
            Loading the experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;