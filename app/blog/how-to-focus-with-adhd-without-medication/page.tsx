import Link from 'next/link';

export const metadata = {
  title: 'How to Focus With ADHD Without Medication: What Actually Works',
  description: 'Discover evidence-based strategies for improving focus and concentration with ADHD without relying solely on medication. Learn what really works.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf8f5] to-white">
      <article className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            How to Focus With ADHD Without Medication: What Actually Works
          </h1>
          <p className="text-slate-600">Coming soon</p>
        </header>

        <div className="prose prose-slate max-w-none text-slate-700">
          <p>
            This article is coming soon. Check back shortly for evidence-based strategies on improving focus and concentration with ADHD.
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
