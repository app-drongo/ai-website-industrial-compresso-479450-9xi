'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Settings, Wrench, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Sara test Compressor Solutionss',
  subtitle: 'Expert Service & Maintenance',
  description:
    'Keeping your industrial operations running smoothly with professional compressor service, maintenance, and repair solutions. Trusted by manufacturers across the region.',
  primaryCtaText: 'Get Service Quote',
  primaryCtaHref: '/quote',
  secondaryCtaText: 'Emergency Services',
  secondaryCtaHref: '/emergency',
  heroImageUrl:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  heroImageAlt: 'Industrial compressor maintenance technician at work',
  trustBadge: '24/7 Emergency Service',
  features: ['Preventive Maintenance', 'Emergency Repairs', 'System Optimization'],
  stats: [
    { label: 'Years Experience', value: '25+' },
    { label: 'Systems Serviced', value: '1000+' },
    { label: 'Response Time', value: '< 2hrs' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Clock className="w-3 h-3 mr-1" />
                <span data-editable="trustBadge">{config.trustBadge}</span>
              </Badge>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium" data-editable={`features[${idx}]`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                <Settings className="w-4 h-4 mr-2" />
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <Shield className="w-4 h-4 mr-2" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-bold text-primary"
                    data-editable={`stats[${idx}].value`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm text-muted-foreground mt-1"
                    data-editable={`stats[${idx}].label`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    data-editable-src="heroImageUrl"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Floating Service Badge */}
                  <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm font-semibold">Professional Service</div>
                        <div className="text-xs text-muted-foreground">Certified Technicians</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
