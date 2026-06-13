'use client';

import { useState, useRef } from 'react';

type FaqItem = { question: string; answer: string };

function FaqEntry({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-surface-strong last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left font-semibold text-text-dark hover:text-forest transition-colors gap-4"
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? (bodyRef.current?.scrollHeight ?? 600) + 'px' : '0px',
          transition: 'max-height 0.3s ease-in-out',
          overflow: 'hidden',
        }}
      >
        <div ref={bodyRef} className="pb-5 text-muted leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y-0">
      {items.map((item, i) => (
        <FaqEntry key={i} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
