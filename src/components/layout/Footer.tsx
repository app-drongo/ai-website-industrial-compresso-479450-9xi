'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'Industrial Compressor Solutions',
  tagline: 'Keeping Your Industrial Operations Running with Expert Compressor Solutions',
  description:
    'Professional compressor maintenance, repair, and optimization services for industrial facilities across the region.',

  // Contact Information
  phone: '+1 (555) 123-4567',
  email: 'service@compressorsolutions.com',
  address: '1234 Industrial Blvd, Manufacturing District, TX 75001',

  // Services
  services: [
    { name: 'Preventive Maintenance', href: '/services/maintenance' },
    { name: 'Emergency Repairs', href: '/services/repairs' },
    { name: 'System Diagnostics', href: '/services/diagnostics' },
  ],

  // Company Links
  companyLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],

  // Legal Links
  legalLinks: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],

  // Certifications
  certifications: ['ISO 9001 Certified', 'Licensed & Insured'],

  // Social Media
  socialLinks: [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],

  // CTA
  ctaText: 'Get Emergency Service',
  ctaHref: '/emergency',

  copyrightText: '© 2024 Industrial Compressor Solutions. All rights reserved.',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      default:
        return <Facebook className="h-5 w-5" />;
    }
  };

  return (
    <section id="footer" className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span data-editable="companyName">{config.companyName}</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span data-editable="phone">{config.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span data-editable="email">{config.email}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span data-editable="address">{config.address}</span>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-6">
              <Button
                onClick={() => handleNavigation(config.ctaHref)}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Our Services</h4>
            <ul className="space-y-2">
              {config.services.map((service, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(service.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    data-editable-href={`services[${idx}].href`}
                    data-href={service.href}
                  >
                    <span data-editable={`services[${idx}].name`}>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm text-foreground">Certifications</h5>
              <ul className="space-y-1">
                {config.certifications.map((cert, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground">
                    <span data-editable={`certifications[${idx}]`}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 mb-6">
              {config.companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    data-editable-href={`companyLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`companyLinks[${idx}].name`}>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              {config.legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
                    data-editable-href={`legalLinks[${idx}].href`}
                    data-href={link.href}
                  >
                    <span data-editable={`legalLinks[${idx}].name`}>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyrightText">{config.copyrightText}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(social.href)}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.name}
              >
                {getSocialIcon(social.icon)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
