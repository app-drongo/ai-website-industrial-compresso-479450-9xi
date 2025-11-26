'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_TESTIMONIALS = {
  title: 'Trusted by Industry Leaders',
  subtitle: 'See what our clients say about our industrial compressor services',
  ctaText: 'Get Your Quote',
  ctaHref: '/contact',
  testimonials: [
    {
      id: '1',
      name: 'Michael Rodriguez',
      position: 'Plant Manager',
      company: 'SteelTech Manufacturing',
      content:
        'Their 24/7 emergency service saved our production line. When our main compressor failed during peak season, they had a technician on-site within 2 hours and restored operations by morning.',
      rating: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      imageAlt: 'Michael Rodriguez headshot',
    },
    {
      id: '2',
      name: 'Sarah Chen',
      position: 'Operations Director',
      company: 'Pacific Food Processing',
      content:
        "Outstanding preventive maintenance program. Since partnering with them 3 years ago, we've reduced compressor downtime by 85% and cut energy costs significantly through their optimization services.",
      rating: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      imageAlt: 'Sarah Chen headshot',
    },
    {
      id: '3',
      name: 'David Thompson',
      position: 'Facility Engineer',
      company: 'AutoParts Industries',
      content:
        'Professional, knowledgeable, and reliable. They rebuilt our aging compressor system with modern, energy-efficient units. The ROI was evident within 6 months through reduced operating costs.',
      rating: 5,
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      imageAlt: 'David Thompson headshot',
    },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };
  const navigate = useSmartNavigation();

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.imageAlt}
                      fill
                      className="object-cover"
                      data-editable-src={`testimonials[${idx}].imageUrl`}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].name`}>{testimonial.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].position`}>
                        {testimonial.position}
                      </span>
                      {' at '}
                      <span data-editable={`testimonials[${idx}].company`}>
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleCtaClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
