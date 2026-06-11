import Link from 'next/link';

export const metadata = {
  title: 'What Is RSD? Rejection Sensitive Dysphoria and ADHD Explained',
  description: 'Learn about Rejection Sensitive Dysphoria (RSD) in ADHD: what it is, why it happens, and how occupational therapy can help with emotional regulation.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf8f5] to-white">
      <article className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            What Is RSD? Rejection Sensitive Dysphoria and ADHD Explained
          </h1>
          <p className="text-slate-600">Coming soon</p>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            This article is coming soon. Check back shortly for evidence-based information about rejection sensitive dysphoria, how it relates to ADHD, and what can help.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn About ADHD Therapy
          </Link>
        </div>
      </article>
    </main>
  );
}
