import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Addie Segal OTD | CogFun ADHD Occupational Therapy',
  description: 'Get in touch with Dr. Addie Segal to ask about CogFun occupational therapy for adult ADHD or to book a free 15-minute consultation.',
  keywords: 'contact Addie Segal, ADHD occupational therapy NJ, book CogFun consultation',
  openGraph: {
    title: 'Contact | Addie Segal OTD | CogFun ADHD Occupational Therapy',
    description: 'Get in touch with Dr. Addie Segal to ask about CogFun occupational therapy for adult ADHD or to book a free 15-minute consultation.',
    url: 'https://addiesegal.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">Contact</h1>
          <p className="text-lg text-muted max-w-2xl">
            Have a question about CogFun or want to get started? Send a message below and I will get back to you.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl shadow-soft p-6 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
