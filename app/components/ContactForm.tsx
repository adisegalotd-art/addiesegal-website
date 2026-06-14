'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

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
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-forest-soft border border-forest/20 rounded-3xl px-8 py-10 text-center">
        <p className="text-2xl font-serif text-forest mb-2">Message sent</p>
        <p className="text-muted">Thanks for reaching out. I will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users, catches bots */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-text-dark mb-1">
            Phone <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-surface-strong bg-white px-4 py-3 text-text-dark placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-forest/40 transition"
            placeholder="(555) 000-0000"
          />
        </div>

        <div>
          <label htmlFor="client_type" className="block text-sm font-semibold text-text-dark mb-1">
            Are you a new or existing client?
          </label>
          <select
            id="client_type"
            name="client_type"
            className="w-full rounded-xl border border-surface-strong bg-white px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-forest/40 transition appearance-none"
          >
            <option value="new">New client</option>
            <option value="existing">Existing client</option>
          </select>
        </div>
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
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
