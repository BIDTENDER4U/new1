import React from 'react';
import { Hero } from './Hero';
import { TestimonialSlider } from './TestimonialSlider';
import { TrustBadges } from './TrustBadges';
import { ClientTestimonialCarousel } from './ClientTestimonialCarousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenInquiryModal: (category?: string, service?: string) => void;
  onOpenChecklistModal: () => void;
  onOpenFreeSummaryModal?: () => void;
  onOpenRadarModal?: (initialQuery?: string) => void;
  onOpenPaymentModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenInquiryModal,
  onOpenChecklistModal,
  onOpenFreeSummaryModal,
}) => {
  return (
    <div className="space-y-0 text-left">
      {/* High-Impact Hero with B4 Branding - Clean Front Presentation */}
      <Hero
        onScrollToForm={() => onOpenInquiryModal()}
        onOpenChecklistModal={onOpenChecklistModal}
        onOpenFreeSummaryModal={onOpenFreeSummaryModal}
      />

      {/* Scrolling Client Success Testimonials with Stars & Company Names */}
      <TestimonialSlider
        onOpenInquiryModal={(category, service) => onOpenInquiryModal(category, service)}
        onOpenChecklistModal={onOpenChecklistModal}
      />

      {/* Statutory Accreditations & Trust Badges Section */}
      <TrustBadges
        onOpenInquiry={(category, service) => onOpenInquiryModal(category, service)}
        onOpenChecklist={onOpenChecklistModal}
      />

      {/* Client Testimonial Carousel with Star Ratings & Company Verification Badges */}
      <ClientTestimonialCarousel
        onOpenInquiryModal={(category, service) => onOpenInquiryModal(category, service)}
        onOpenChecklistModal={onOpenChecklistModal}
      />
    </div>
  );
};

export default HomePage;
