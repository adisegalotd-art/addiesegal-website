'use client';

import { useState } from 'react';

interface ExpandableSectionProps {
  title: string;
  content: string;
}

export default function ExpandableSection({ title, content }: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable-section">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="expandable-trigger w-full"
      >
        <span>{title}</span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="expandable-content mt-3">
          {content}
        </div>
      )}
    </div>
  );
}
