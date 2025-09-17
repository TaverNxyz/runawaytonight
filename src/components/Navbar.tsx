import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-border/20 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-heading text-2xl font-black">
            <span className="text-neon">RAT</span>
            <span className="text-primary ml-1">AGENCY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-neon"
            >
              <Mail className="mr-2 w-4 h-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary hover:bg-primary/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-effect border-b border-border/20 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  size="sm"
                  onClick={() => {
                    window.location.href = "mailto:bookings@eliteagency.com";
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium glow-neon justify-start"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Email Us
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.location.href = "tel:+15551234BOOK";
                    setIsMobileMenuOpen(false);
                  }}
                  className="border-primary/50 text-primary hover:bg-primary/10 glass-effect justify-start"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;