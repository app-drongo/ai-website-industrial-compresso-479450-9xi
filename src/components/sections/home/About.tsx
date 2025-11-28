'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Wrench } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_ABOUT = {
  title: 'About CompressorPro Solutions',
  subtitle: 'Your Trusted Partner in Industrial Compressor Services',
  description:
    'With over 25 years of experience in the industrial compressor industry, we provide comprehensive maintenance, repair, and installation services to keep your operations running at peak efficiency. Our certified technicians specialize in all major compressor brands and types.',
  ctaText: 'Get Service Quote',
  ctaHref: '/contact',
  imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
  imageAlt: 'Industrial compressor maintenance technician at work',
  stats: [
    { label: 'Years Experience', value: '25+' },
    { label: 'Clients Served', value: '500+' },
    { label: 'Service Calls', value: '10,000+' },
  ],
  features: [
    '24/7 Emergency Service Available',
    'Certified Technicians & Engineers',
    'All Major Brands Supported',
  ],
  certifications: ['ISO 9001 Certified', 'EPA Section 608 Certified', 'OSHA Safety Compliant'],
} as const;

type AboutProps = Partial<typeof DEFAULT_ABOUT>;

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="about" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
              <p className="text-lg leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {config.stats.map((stat, idx) => (
                <Card key={idx} className="bg-card text-card-foreground">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {config.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">
                    <span data-editable={`features[${idx}]`}>{feature}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Certifications & Compliance</h3>
              <div className="flex flex-wrap gap-2">
                {config.certifications.map((cert, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground"
                  >
                    <Award className="h-3 w-3 mr-1" />
                    <span data-editable={`certifications[${idx}]`}>{cert}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleCTAClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Wrench className="h-5 w-5 mr-2" />
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                data-editable-src="imageUrl"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[500px]"
                priority
              />
              {/* Overlay with company highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-card/95 text-card-foreground backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold">Expert Team</div>
                        <div className="text-sm text-muted-foreground">
                          Certified professionals with decades of experience
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
