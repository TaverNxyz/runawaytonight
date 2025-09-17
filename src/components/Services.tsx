import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Users, Calendar, Mic, Video, Trophy } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Music,
      title: "Artist Management",
      description: "Full-service artist representation and career development for emerging and established talent.",
      features: ["Career Strategy", "Brand Development", "Media Relations"]
    },
    {
      icon: Calendar,
      title: "Event Booking",
      description: "Premium event coordination for concerts, festivals, corporate events, and private functions.",
      features: ["Venue Sourcing", "Contract Negotiation", "Event Planning"]
    },
    {
      icon: Users,
      title: "Tour Management",
      description: "Comprehensive tour planning and execution from intimate venues to international stages.",
      features: ["Route Planning", "Logistics Coordination", "Crew Management"]
    },
    {
      icon: Mic,
      title: "Live Performance",
      description: "Connecting artists with the perfect stages for their unique sound and style.",
      features: ["Venue Matching", "Sound Requirements", "Performance Optimization"]
    },
    {
      icon: Video,
      title: "Media Production",
      description: "Professional video and audio production services for promotional and artistic content.",
      features: ["Studio Recording", "Video Production", "Content Creation"]
    },
    {
      icon: Trophy,
      title: "Industry Connections",
      description: "Leveraging our network to create opportunities and strategic partnerships.",
      features: ["Label Connections", "Collaboration Opportunities", "Industry Events"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">
            <span className="text-neon">PREMIUM</span> SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive booking and management solutions tailored for today's entertainment industry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect border-neon hover-glow group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl text-primary group-hover:text-neon transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to take your career to the next level?
          </p>
          <div className="inline-block p-6 glass-effect rounded-lg border-neon">
            <p className="font-heading text-2xl text-neon mb-2">Available 24/7</p>
            <p className="text-muted-foreground">Professional booking services when you need them</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;