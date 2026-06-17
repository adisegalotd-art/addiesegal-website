import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Addie Segal OTD | CogFun ADHD Occupational Therapy',
  description: 'Book a free 15-minute intro call with Dr. Addie Segal, or send a message to ask about CogFun occupational therapy for adult ADHD.',
  keywords: 'contact Addie Segal, ADHD occupational therapy NJ, book CogFun consultation',
  alternates: {
    canonical: 'https://addiesegal.com/contact',
  },
  openGraph: {
    title: 'Book a Free Consultation | Addie Segal OTD | CogFun ADHD Occupational Therapy',
    description: 'Book a free 15-minute intro call with Dr. Addie Segal, or send a message to ask about CogFun occupational therapy for adult ADHD.',
    url: 'https://addiesegal.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Book a Free Consultation | Addie Segal OTD | CogFun ADHD Occupational Therapy',
    description: 'Book a free 15-minute intro call with Dr. Addie Segal, or send a message to ask about CogFun occupational therapy for adult ADHD.',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">Book a Free 15-Minute Call</h1>
          <p className="text-lg text-muted max-w-2xl">
            Ready to get started? Book a free 15-minute intro call directly, or send a message and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl shadow-soft p-6 sm:p-10">
            <Link
              href="https://calendar.app.google/HzfuieaR3hG5nWSX8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-forest text-white rounded-full font-semibold hover:bg-forest-dark transition-colors text-lg"
            >
              Book a Time That Works for You
            </Link>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 border-t border-surface-strong" />
              <span className="text-sm text-muted font-medium">Or send a message below</span>
              <div className="flex-1 border-t border-surface-strong" />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
