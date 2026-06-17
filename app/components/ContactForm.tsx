'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

type Status = 'idle' | 'submitting' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mgoqkqrd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-text-dark mb-1">
          Name <span className="text-forest">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-surface-strong bg-white px-4 py-3 text-text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/40 transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-text-dark mb-1">
          Email <span className="text-forest">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-surface-strong bg-white px-4 py-3 text-text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/40 transition"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-text-dark mb-1">
          Message <span className="text-forest">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-surface-strong bg-white px-4 py-3 text-text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/40 transition resize-none"
          placeholder="What would you like to discuss?"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or email me directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex rounded-full bg-forest px-8 py-3 text-white font-semibold hover:bg-forest-dark transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send my message'}
      </button>
    </form>
  );
}
