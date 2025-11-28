'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Wrench, Clock, Shield, Phone, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SERVICES = {
  title: 'Industrial Compressor Services',
  subtitle: 'Comprehensive maintenance and repair solutions for your critical industrial equipment',
  description:
    'Our certified technicians provide expert service for all types of industrial compressors, ensuring maximum uptime and operational efficiency for your facility.',
  ctaText: 'Request Service Quote',
  ctaHref: '/contact',
  emergencyText: '24/7 Emergency Service',
  emergencyPhone: '(555) 123-4567',
  services: [
    {
      id: 'maintenance',
      icon: 'Settings',
      title: 'Preventive Maintenance',
      description:
        'Scheduled maintenance programs to prevent costly breakdowns and extend equipment life',
      features: ['Regular inspections', 'Filter replacements', 'Performance optimization'],
    },
    {
      id: 'repair',
      icon: 'Wrench',
      title: 'Emergency Repairs',
      description: '24/7 emergency repair services to get your operations back online quickly',
      features: ['Rapid response', 'On-site diagnostics', 'Genuine parts'],
    },
    {
      id: 'installation',
      icon: 'Shield',
      title: 'Installation & Commissioning',
      description: 'Professional installation and setup of new compressor systems',
      features: ['System design', 'Professional installation', 'Performance testing'],
    },
  ],
  specialties: ['Rotary Screw Compressors', 'Centrifugal Compressors', 'Reciprocating Compressors'],
} as const;

type ServicesProps = Partial<typeof DEFAULT_SERVICES>;

export default function Services(props: ServicesProps) {
  const config = { ...DEFAULT_SERVICES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Settings: Settings,
      Wrench: Wrench,
      Shield: Shield,
      Clock: Clock,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Settings;
    return <IconComponent className="h-8 w-8" />;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:${config.emergencyPhone}`;
  };

  return (
    <section id="services" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.services.map((service, idx) => (
            <Card
              key={service.id}
              className="bg-card text-card-foreground hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    {getIcon(service.icon)}
                  </div>
                  <CardTitle className="text-xl">
                    <span data-editable={`services[${idx}].title`}>{service.title}</span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  <span data-editable={`services[${idx}].description`}>{service.description}</span>
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span data-editable={`services[${idx}].features[${featureIdx}]`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-muted text-muted-foreground rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Our Specialties
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {config.specialties.map((specialty, idx) => (
              <Badge key={idx} variant="secondary" className="text-base py-2 px-4">
                <span data-editable={`specialties[${idx}]`}>{specialty}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <Clock className="h-6 w-6" />
                <span className="text-lg font-semibold" data-editable="emergencyText">
                  {config.emergencyText}
                </span>
              </div>
              <p className="text-primary-foreground/90">
                Call us anytime for urgent compressor issues
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEmergencyCall}
                variant="secondary"
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span data-editable="emergencyPhone">{config.emergencyPhone}</span>
              </Button>
              <Button
                onClick={handleCTAClick}
                variant="secondary"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
