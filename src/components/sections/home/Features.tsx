'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Wrench, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Comprehensive Compressor Services',
  subtitle: 'Expert solutions for all your industrial compressor needs',
  description:
    'From routine maintenance to emergency repairs, our certified technicians ensure your compressors operate at peak efficiency.',
  ctaText: 'Get Service Quote',
  ctaHref: '/quote',
  features: [
    {
      icon: 'Settings',
      title: 'Preventive Maintenance',
      description:
        'Scheduled maintenance programs to prevent costly breakdowns and extend equipment life.',
      benefits: ['Reduced downtime', 'Lower operating costs', 'Extended equipment life'],
    },
    {
      icon: 'Wrench',
      title: 'Emergency Repairs',
      description: '24/7 emergency repair services to get your operations back online quickly.',
      benefits: ['24/7 availability', 'Rapid response time', 'Expert diagnostics'],
    },
    {
      icon: 'Clock',
      title: 'Performance Optimization',
      description:
        'System analysis and tuning to maximize efficiency and reduce energy consumption.',
      benefits: ['Energy savings', 'Improved performance', 'Cost reduction'],
    },
  ],
  certifications: ['ISO 9001 Certified', 'Factory Authorized', 'Licensed Technicians'],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Settings: Settings,
      Wrench: Wrench,
      Clock: Clock,
      Shield: Shield,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Settings;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {getIcon(feature.icon)}
                </div>
                <CardTitle className="text-xl mb-2">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIdx) => (
                    <div
                      key={benefitIdx}
                      className="flex items-center justify-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-muted text-muted-foreground rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Certified & Trusted</h3>
            <p className="text-muted-foreground">
              Our expertise is backed by industry certifications and years of experience
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {config.certifications.map((cert, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-background text-foreground px-4 py-2"
              >
                <span data-editable={`certifications[${idx}]`}>{cert}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
