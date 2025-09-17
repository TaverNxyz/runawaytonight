import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/hero-booking.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in">
            <span className="text-neon-strong animate-neon-flicker">ELITE</span>
            <br />
            <span className="text-foreground">BOOKING</span>
            <br />
            <span className="text-primary">AGENCY</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            Connecting extraordinary talent with unforgettable opportunities. 
            Professional booking services for the next generation of entertainment.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up">
            <div className="glass-effect rounded-lg p-4 border-neon">
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-5 h-5" />
                <span className="font-heading font-bold">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Events Booked</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border-neon">
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5" />
                <span className="font-heading font-bold">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
            <div className="glass-effect rounded-lg p-4 border-neon">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="w-5 h-5" />
                <span className="font-heading font-bold">1000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Artists</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6 glow-neon hover-glow group"
            >
              Book Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary/50 text-primary hover:bg-primary/10 font-heading font-bold text-lg px-8 py-6 glass-effect hover-glow"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;