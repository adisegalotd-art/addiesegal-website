import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '../components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ | CogFun ADHD Occupational Therapy | Addie Segal OTD',
  description: 'Common questions about CogFun, adult ADHD, and occupational therapy with Dr. Addie Segal in New Jersey and New York.',
  keywords: 'CogFun FAQ, ADHD occupational therapy questions, adult ADHD therapy NJ',
  openGraph: {
    title: 'FAQ | CogFun ADHD Occupational Therapy | Addie Segal OTD',
    description: 'Common questions about CogFun, adult ADHD, and occupational therapy with Dr. Addie Segal in New Jersey and New York.',
    url: 'https://addiesegal.com/faq',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is CogFun, and how is it different from regular ADHD therapy?',
    answer:
      'CogFun is a structured, 25-session occupational therapy protocol designed specifically for adults with ADHD. Unlike general talk therapy, CogFun focuses on building practical strategies for daily functioning, things like task initiation, follow-through, and routines, grounded in how the ADHD brain actually works.',
  },
  {
    question: 'Do I need a diagnosis to start CogFun?',
    answer:
      "CogFun is designed for adults with a current ADHD diagnosis from a licensed physician. If you don't yet have a diagnosis, I can help connect you with a physician for an evaluation, and we can begin CogFun once that's in place. Taking medication is not required to start, but having a diagnosis is part of how the protocol is structured.",
  },
  {
    question: "Can occupational therapy help with ADHD if I'm already on medication?",
    answer:
      "Yes. Medication can help manage focus and impulsivity, but it doesn't automatically build the daily habits, routines, and strategies needed to translate intention into action. CogFun works alongside medication to address that functional gap.",
  },
  {
    question: 'Is ADHD therapy effective without medication?',
    answer:
      'Many adults manage ADHD successfully through therapy and skill-building alone, especially when the focus is on practical daily strategies rather than just emotional processing. CogFun is designed to be effective whether or not someone is taking medication.',
  },
  {
    question: 'What does an occupational therapist do for adult ADHD?',
    answer:
      'An occupational therapist trained in CogFun works with you on the day-to-day mechanics of ADHD, time management, task initiation, organization, and follow-through, using structured, evidence-based techniques tailored to your specific routines and challenges.',
  },
  {
    question: 'How long does CogFun therapy take?',
    answer:
      'CogFun is a structured 25-session protocol, typically delivered over a period of months depending on session frequency. Each phase builds on the last, moving from understanding your current strategies to building lasting, independent systems.',
  },
  {
    question: 'Do you offer ADHD therapy via telehealth in NJ and NY?',
    answer:
      'Yes. Telehealth sessions are available for adults with ADHD across New Jersey and New York, allowing you to participate in CogFun therapy from home on a schedule that works for you.',
  },
  {
    question: "What's the difference between ADHD and just being disorganized or lazy?",
    answer:
      'ADHD involves differences in executive functioning, the brain systems responsible for planning, starting tasks, and regulating attention. This is not about effort or character. CogFun addresses these executive functioning challenges directly with practical, structured strategies.',
  },
  {
    question: 'Can adult ADHD be treated without a psychiatrist?',
    answer:
      'While a psychiatrist can diagnose ADHD and manage medication, occupational therapy is a complementary, non-medication-based treatment option that focuses on building functional skills for daily life.',
  },
  {
    question: 'Is CogFun covered by insurance?',
    answer:
      "I'm an out-of-network provider, which means I don't bill insurance directly. Payment is made at the end of each month for sessions conducted, and I provide a detailed superbill that you can submit to your insurance company for potential reimbursement, depending on your out-of-network benefits. I recommend contacting your insurance provider directly to ask whether occupational therapy for ADHD is covered under your out-of-network benefits.",
  },
  {
    question: 'What age group is CogFun designed for?',
    answer:
      'CogFun is specifically designed for adults with ADHD, addressing the daily functioning challenges that show up in work, relationships, and independent living.',
  },
  {
    question: 'How do I get started with CogFun therapy?',
    answer:
      'You can book a free 15-minute consultation to discuss your goals and determine whether CogFun is a good fit for your needs.',
  },
];

export default function FaqPage() {
  return (
    <div className="pt-8">
      <section className="bg-gradient-to-b from-surface to-cream pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-forest mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted max-w-3xl">
            Answers to common questions about CogFun, ADHD, and what to expect from occupational therapy for adult ADHD.
          </p>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl shadow-soft px-6 sm:px-10 py-2">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-8 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-forest mb-4">Want to learn more about CogFun?</h2>
          <Link
            href="/services"
            className="inline-flex rounded-full bg-forest px-8 py-3 text-white font-semibold hover:bg-forest-dark transition-colors"
          >
            Learn about CogFun services
          </Link>
          <p className="text-xs text-muted mt-8 leading-relaxed max-w-2xl mx-auto">
            This post is for informational purposes and is not a substitute for individualized clinical assessment.
          </p>
        </div>
      </section>
    </div>
  );
}
