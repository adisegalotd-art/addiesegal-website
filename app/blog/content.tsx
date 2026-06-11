import type { ReactNode } from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  excerpt: string;
  heroQuery: string;
  heroAlt: string;
  content: ReactNode[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-cogfun-adhd-therapy',
    title: 'What Is CogFun? The Only Evidence-Based OT Protocol for Adult ADHD',
    description: 'Learn what CogFun is and why occupational therapy is the right evidence-based approach for adult ADHD.',
    keywords: 'occupational therapy adhd, adhd therapy, ADHD OT, CogFun therapy',
    excerpt: 'CogFun is a 25-session occupational therapy protocol for adult ADHD that focuses on how ADHD actually works in daily life.',
    heroQuery: 'CogFun occupational therapy adult ADHD',
    heroAlt: 'Adult ADHD therapy session with a calm professional',
    content: [
      <p key="intro">
        If you have ADHD, you already know what the problem feels like: you know what needs to be done, but starting it is a different story. That is exactly where CogFun shows up.
      </p>,
      <p key="intro2">
        This isn’t a productivity hack or a motivational pep talk. CogFun is a research-backed occupational therapy protocol designed specifically for adults with ADHD. It’s practical, patient, and honest about the fact that this isn’t a magic cure.
      </p>,
      <h2 key="origin" className="text-2xl font-semibold text-forest mt-10 mb-4">Where CogFun Comes From</h2>,
      <p key="origin-para">
        CogFun was developed by Adina Maeir at Hebrew University, and it showed up in peer-reviewed research because it was built around real-world function. In other words, it’s not theory dressed up as therapy—it’s grounded in studies with adults who actually use it.
      </p>,
      <p key="origin-para2">
        The work is published in the American Journal of Occupational Therapy, and that matters because it proves CogFun is more than good intentions.
      </p>,
      <h2 key="different" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Is Different</h2>,
      <p key="different-para">
        Most ADHD programs stop at one of two places: medication or talk therapy. CogFun sits in between, where the real daily frustration happens. It asks, “What does your day actually look like?” and then helps you make it work.
      </p>,
      <p key="different-para2">
        It’s the difference between understanding your ADHD and learning the exact practical moves that help you get through the day with less guilt and less chaos.
      </p>,
      <h2 key="units" className="text-2xl font-semibold text-forest mt-10 mb-4">The Four Units of CogFun</h2>,
      <div key="units-list" className="space-y-4">
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Shared learning</h3>
          <p>We build a true picture of how ADHD shows up in your life, without blame. This is the phase where the story shifts from “I should just try harder” to “I can do better with the right support.”</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Strategy acquisition</h3>
          <p>We look at what you already do, keep what works, and discard what doesn’t. It’s not about inventing a new you—it’s about making your brain’s existing strategies more reliable.</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">General strategy development</h3>
          <p>We turn helpful habits into something you can use in many situations. The goal is not perfection; it’s something that fits your life and your energy.</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Integration and self-management</h3>
          <p>This is where the work becomes yours. We build a plan that can keep going after the sessions end, because real change has to last beyond the appointment.</p>
        </div>
      </div>,
      <h2 key="research" className="text-2xl font-semibold text-forest mt-10 mb-4">The Evidence</h2>,
      <p key="research-para">
        The research isn’t flashy, and that’s okay. The important part is that CogFun has been studied and shown to help adults with ADHD in real life. That means you’re not experimenting on yourself—you’re using a model with evidence behind it.
      </p>,
      <p key="research-para2">
        And yes, it has limits. It doesn’t erase ADHD or act like a quick fix. It gives you tools for the part of ADHD that medication and coaching often miss.
      </p>,
      <h2 key="cta" className="text-2xl font-semibold text-forest mt-10 mb-4">Is CogFun Right for You?</h2>,
      <p key="cta-para">
        If you’ve been told to try harder, or if you’ve already done the meds/therapy/coach loop and are still struggling with the real day-to-day, CogFun may be exactly what you need. It’s designed for adults who want practical change—not just understanding.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to take a different approach?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to see how CogFun can support your ADHD and everyday functioning.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'why-you-are-not-lazy-task-initiation-adhd',
    title: "Why You're Not Lazy: Understanding Task Initiation and ADHD",
    description: 'Learn why task initiation feels impossible with ADHD and how practical strategies can help.',
    keywords: 'is procrastination a sign of adhd, how to focus with adhd, executive functioning coaches near me',
    excerpt: 'Task initiation isn’t laziness. For people with ADHD, it’s a real brain challenge that needs real strategies.',
    heroQuery: 'ADHD task initiation challenges adult',
    heroAlt: 'Person hesitating before starting a task at a desk',
    content: [
      <p key="intro">
        If getting started feels harder than finishing, you are not lazy. You are experiencing something real and surprisingly common in ADHD: task initiation difficulty.
      </p>,
      <p key="intro2">
        It can feel like the brain is asking for a larger reward than the task offers. That is not moral failure. It is a neurological wiring issue, and it is fixable in practical ways.
      </p>,
      <h2 key="neuroscience" className="text-2xl font-semibold text-forest mt-10 mb-4">What Happens in the Brain</h2>,
      <p key="neuro-para">
        ADHD changes how your brain evaluates effort and reward. Tasks that are boring, uncertain, or slow to pay off may not trigger the same launch system that gets other people moving. That’s why it feels like pushing through concrete.
      </p>,
      <p key="neuro-para2">
        The result is not laziness. It’s a brain that needs different signals to start a task—more structure, more meaningful cues, and better alignment with your own priorities.
      </p>,
      <h2 key="willpower" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Willpower Alone Isn’t Enough</h2>,
      <p key="willpower-para">
        Willpower is a tiny battery. If ADHD is draining that battery before you even begin, telling yourself to “try harder” is like asking a phone to run all day on 5% charge.
      </p>,
      <p key="willpower-para2">
        This is where strategy matters more than shame. The goal is not to feel guilty about delay; it is to build a practical setup that makes starting easier.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun doesn’t just tell you to “plan better.” It helps you understand the actual situations where you freeze, the strategies you already reach for, and how to create a start routine that works for your brain.
      </p>,
      <p key="cogfun-para2">
        It’s not magic. It’s a structured, evidence-based approach that builds on your real life, not on generic productivity advice.
      </p>,
      <h2 key="realistic" className="text-2xl font-semibold text-forest mt-10 mb-4">The Honest Truth</h2>,
      <p key="realistic-para">
        This isn’t a cure. There will still be days when you struggle to begin. But with the right support, those days become less frequent and less punishing.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to stop blaming yourself?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore practical, ADHD-friendly strategies for starting the things that matter.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-specialist-near-me-what-to-look-for',
    title: 'Searching for an ADHD Specialist Near You? Here’s What to Actually Look For',
    description: 'Learn how to choose the right ADHD specialist and why occupational therapy with CogFun is a strong option.',
    keywords: 'adhd specialist near me, therapist for adhd, therapists specializing in adhd, adhd therapist aid',
    excerpt: 'Finding the right ADHD specialist is about more than distance—it’s about experience, approach, and understanding adult ADHD.',
    heroQuery: 'ADHD specialist near me therapy',
    heroAlt: 'Professional consulting with an adult client in a calm office',
    content: [
      <p key="intro">
        Searching for “ADHD specialist near me” can feel like shopping in a foreign language. There are psychiatrists, psychologists, therapists, coaches, and occupational therapists—and they are not all the same.
      </p>,
      <p key="intro2">
        The best fit is the one who understands what your life feels like now, not the one with the most letters after their name.
      </p>,
      <h2 key="provider-types" className="text-2xl font-semibold text-forest mt-10 mb-4">Who Does What</h2>,
      <p key="provider-types-para">
        A psychiatrist can diagnose ADHD and prescribe medication. A psychologist can help with mood, anxiety, and thought patterns. A coach helps you stay motivated and accountable. An occupational therapist helps you function better in your actual life.
      </p>,
      <h2 key="specialty" className="text-2xl font-semibold text-forest mt-10 mb-4">What Actually Matters</h2>,
      <p key="specialty-para">
        The most important question is not whether someone is “licensed.” It’s whether they are experienced with adult ADHD, whether they understand the daily practical challenges, and whether they can help you move from awareness to action.
      </p>,
      <p key="specialty-para2">
        If you have adult ADHD, the right specialist should understand that your struggle is not personality or laziness. It is a pattern of executive function differences that shows up in very specific ways.
      </p>,
      <h2 key="cogfun-ot" className="text-2xl font-semibold text-forest mt-10 mb-4">Why CogFun-Trained OT Is Unique</h2>,
      <p key="cogfun-ot-para">
        A CogFun-trained occupational therapist is looking at your routines, your environment, and your work demands. They are not only asking “what are you feeling?” but also “what are you actually doing?”
      </p>,
      <p key="cogfun-ot-para2">
        That means the support is grounded in your life, not on general ADHD advice pulled from a podcast.
      </p>,
      <h2 key="practical" className="text-2xl font-semibold text-forest mt-10 mb-4">Practical Signals to Look For</h2>,
      <p key="practical-para">
        Look for someone who:
      </p>,
      <ul key="practical-list" className="list-disc list-inside space-y-3 ml-4">
        <li>Talks about executive function and real-life tasks, not just symptoms</li>
        <li>Uses evidence-based methods rather than broad motivational language</li>
        <li>Understands that ADHD in adults often looks different than it does in kids</li>
        <li>Offers a collaborative process, not one-size-fits-all worksheets</li>
      </ul>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Trying to find the right specialist?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to see whether CogFun occupational therapy is the right fit for your ADHD journey.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-telehealth-therapy-nj-ny',
    title: 'ADHD Telehealth Therapy: What It Is and Why It Works for Adults',
    description: 'Explore why telehealth is a strong, convenient option for adult ADHD therapy in New Jersey and New York.',
    keywords: 'adhd telehealth, adhd treatment online, telehealth adhd therapy NJ, adhd therapist NJ',
    excerpt: 'Telehealth makes ADHD therapy more accessible for adults, especially when life is already crowded and unpredictable.',
    heroQuery: 'telehealth ADHD therapy adult',
    heroAlt: 'Remote ADHD therapy session on a laptop screen',
    content: [
      <p key="intro">
        If your to-do list feels full, the last thing you want is another appointment that requires travel, parking, and the stress of leaving the house. That’s why ADHD telehealth therapy can be a real relief.
      </p>,
      <p key="intro2">
        For adults with ADHD, telehealth often means one fewer barrier, one less reason to delay, and one more way to keep therapy consistent.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Telehealth Works</h2>,
      <p key="why-para">
        Telehealth removes the commute, the waiting room, and the need to manage an unfamiliar environment. It lets you meet from your own space, where your routines and struggles actually happen.
      </p>,
      <p key="why-para2">
        That makes the work more practical. When we’re looking at how your ADHD shows up in your life, real life is the best place to start.
      </p>,
      <h2 key="benefits" className="text-2xl font-semibold text-forest mt-10 mb-4">Good News for NJ and NY Residents</h2>,
      <p key="benefits-para">
        If you live in New Jersey or New York, telehealth offers a flexible way to get support from a licensed provider without leaving home. That is especially helpful if your schedule is tight, your energy is limited, or your ADHD makes transitions harder.
      </p>,
      <h2 key="expect" className="text-2xl font-semibold text-forest mt-10 mb-4">What to Expect in a Telehealth CogFun Session</h2>,
      <p key="expect-para">
        The sessions are collaborative and practical. We’ll talk about your real tasks, your environment, and the small changes that can make a big difference. You don’t need special software—just a stable video call and your actual life.
      </p>,
      <p key="expect-para2">
        It’s not therapy from a distance; it’s functional coaching and occupational therapy that meets you where you are.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">This Isn’t a Magic Cure</h2>,
      <p key="honest-para">
        If you’re hoping for quick fixes, telehealth won’t change that. But if you want a sustainable way to manage ADHD in adult life, it can make the process easier, more consistent, and more realistic.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Curious about telehealth ADHD therapy?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to see if telehealth CogFun is the right fit for you in NJ or NY.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'does-adhd-get-worse-with-age',
    title: 'Does ADHD Get Worse With Age? What Adults Need to Know',
    description: 'Understand how ADHD changes over time and why symptoms often feel harder in adulthood.',
    keywords: 'does adhd get worse with age, can adhd get worse with age, untreated adhd in female adults, adhd symptoms in adult men',
    excerpt: 'ADHD doesn’t necessarily get worse, but adult life often makes it harder to manage—and that is where support helps.',
    heroQuery: 'adult ADHD over time',
    heroAlt: 'A thoughtful adult looking out a window with a notebook',
    content: [
      <p key="intro">
        The short answer is: ADHD itself doesn’t suddenly get worse with age, but adult life often makes it feel that way.
      </p>,
      <p key="intro2">
        More responsibilities, less external structure, and the expectation that you should have it all together can make ADHD symptoms harder to manage. That does not mean your brain is failing—it means your environment has changed.
      </p>,
      <h2 key="adult-life" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Feels Worse</h2>,
      <p key="adult-life-para">
        In childhood, school gives structure. In adulthood, you may be juggling work, relationships, bills, and self-care. That demands more planning, more transitions, and more sustained focus.
      </p>,
      <p key="adult-life-para2">
        For many people with ADHD, those demands reveal the gaps that were always there. It’s not a new problem; it’s a louder one.
      </p>,
      <h2 key="women" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Women Often Notice It Later</h2>,
      <p key="women-para">
        Women are more likely to mask ADHD and to have symptoms show up as internal struggles. That means it often gets missed until adulthood, when the load becomes harder to carry alone.
      </p>,
      <h2 key="good-news" className="text-2xl font-semibold text-forest mt-10 mb-4">The Good News</h2>,
      <p key="good-news-para">
        Adult ADHD is treatable, and the right support can make a huge difference. That means you don’t have to wait for a crisis to get help. You can start with real strategies now.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">What This Isn’t</h2>,
      <p key="honest-para">
        This is not about becoming a perfect adult overnight. It’s about building more ease into your days and making ADHD less exhausting.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Feeling like ADHD is catching up with you?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore how CogFun occupational therapy can help you manage adult life more effectively.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-and-anxiety-what-is-the-difference',
    title: 'ADHD and Anxiety: What’s the Difference and Can You Have Both?',
    description: 'Explore how ADHD and anxiety overlap, how they differ, and what to do when both are present.',
    keywords: 'does adhd cause anxiety, do i have adhd or anxiety, can you have ocd and adhd, psychotherapy for adhd, adhd and depression treatment',
    excerpt: 'ADHD and anxiety often feel the same, but they are different patterns that can both be true at once.',
    heroQuery: 'ADHD and anxiety adult',
    heroAlt: 'A person sitting calmly with hands folded, thinking about emotions',
    content: [
      <p key="intro">
        If your mind is racing and your heart feels tight, it can be hard to tell whether ADHD or anxiety is driving the experience. The truth is, both can be true—and both deserve attention.
      </p>,
      <p key="intro2">
        ADHD often creates anxiety not because there is something wrong with you, but because the world asks for focus and consistency in ways your brain doesn’t naturally provide.
      </p>,
      <h2 key="difference" className="text-2xl font-semibold text-forest mt-10 mb-4">How They Feel Different</h2>,
      <p key="difference-para">
        ADHD is often about getting stuck in tasks, losing time, and feeling frazzled by the amount of things to manage. Anxiety is more about worry, threat, and the sense that something bad could happen.
      </p>,
      <h2 key="overlap" className="text-2xl font-semibold text-forest mt-10 mb-4">Where They Overlap</h2>,
      <p key="overlap-para">
        Both can lead to restlessness, trouble sleeping, and a sense of being overwhelmed. Both can make it hard to get started and hard to relax.
      </p>,
      <p key="overlap-para2">
        That doesn’t mean they are the same. It means the treatment can be different, and good support should recognize both.
      </p>,
      <h2 key="treatment" className="text-2xl font-semibold text-forest mt-10 mb-4">Why This Matters for Treatment</h2>,
      <p key="treatment-para">
        If you’re treating anxiety without looking at ADHD, you may feel better in the short term but still struggle with daily functioning. If you’re treating ADHD without addressing anxiety, the worry can continue to sap your energy.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">Where CogFun Fits In</h2>,
      <p key="cogfun-para">
        CogFun is not therapy for anxiety itself. It is occupational therapy that helps your daily life work better, which often reduces the anxiety that comes from feeling behind, forgetful, or out of control.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Not sure whether it’s ADHD, anxiety, or both?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to talk through what you’re experiencing and whether ADHD-focused occupational therapy can help.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'high-functioning-adhd-adults',
    title: 'High-Functioning ADHD: When You Look Fine But Feel Like You’re Falling Apart',
    description: 'Discover what high-functioning ADHD really looks like and why it often leads to hidden exhaustion.',
    keywords: 'high functioning adhd, am i lazy or do i have adhd, untreated adhd in female adults, adhd and mood swings',
    excerpt: 'High-functioning ADHD is often invisible from the outside and exhausting from the inside.',
    heroQuery: 'high functioning ADHD adult',
    heroAlt: 'A professional looking composed while thinking deeply',
    content: [
      <p key="intro">
        You may look put together. You may keep your meetings and your inbox under control. Inside, though, you might be holding everything together with a fragile system.
      </p>,
      <p key="intro2">
        That is high-functioning ADHD. It often looks like success on the surface and exhaustion underneath.
      </p>,
      <h2 key="masking" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Gets Missed</h2>,
      <p key="masking-para">
        People with high-functioning ADHD are often good at masking. They compensate with extra effort, structure, or people-pleasing. That can make it harder for clinicians to recognize the real struggle.
      </p>,
      <h2 key="exhaustion" className="text-2xl font-semibold text-forest mt-10 mb-4">The Hidden Exhaustion</h2>,
      <p key="exhaustion-para">
        The cost of compensating is fatigue, shame, and the feeling that you are always one step behind. That is not a personal failing. It is the price paid for managing ADHD in a system that rewards consistency.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you stop relying on brittle strategies and start building systems that are sustainable. It focuses on the real daily work you are already doing and makes it easier to keep that work going.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">The Honest Part</h2>,
      <p key="honest-para">
        This is not a “fix.” It’s a way to make your life feel less heavy. The best outcome is not perfection; it’s less struggle and more clarity.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want to stop burning yourself out?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to talk about how CogFun occupational therapy can support your high-functioning ADHD.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-symptoms-women-adults',
    title: 'ADHD Symptoms in Adult Women: Why It Looks Different Than You Think',
    description: 'Learn how ADHD often shows up differently in adult women and why it can feel invisible for years.',
    keywords: 'symptoms of adhd in adult women, adhd symptoms women, untreated adhd in female adults, high functioning adhd, is adhd neurodivergent',
    excerpt: 'ADHD in adult women often looks quiet, busy, compassionate, and exhausted all at once.',
    heroQuery: 'adult women ADHD symptoms',
    heroAlt: 'Woman thinking deeply in a soft-lit room',
    content: [
      <p key="intro">
        ADHD in adult women is often baited as “stress” or “overwhelm.” That is because it frequently shows up as quiet distraction, emotional overwhelm, and doing too much to cover for what’s needed.
      </p>,
      <p key="intro2">
        That doesn’t mean it’s less real. It means it looks different from the stereotype of a hyperactive child.
      </p>,
      <h2 key="presentation" className="text-2xl font-semibold text-forest mt-10 mb-4">How It Often Presents</h2>,
      <p key="presentation-para">
        Many women with ADHD are experts at keeping things together. They may be punctual, accomplished, and deeply compassionate, while also feeling scattered, exhausted, and anxious under the surface.
      </p>,
      <h2 key="masking" className="text-2xl font-semibold text-forest mt-10 mb-4">The Masking Factor</h2>,
      <p key="masking-para">
        Masking is a survival strategy. It can help you get through the day, but it also increases fatigue and makes it harder to see what support you actually need.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why This Matters</h2>,
      <p key="why-para">
        If ADHD is missed, you may get treatment for anxiety or depression and still feel like the underlying patterns are there. That is because you are treating the symptoms, not the functional challenges.
      </p>,
      <h2 key="rsd" className="text-2xl font-semibold text-forest mt-10 mb-4">A Note on RSD</h2>,
      <p key="rsd-para">
        Rejection Sensitive Dysphoria is common in ADHD and often feels especially intense for women who have spent years trying to be a certain way. It’s real, and it’s part of the story.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Wondering if ADHD looks different for you?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore whether adult ADHD is part of your story and how CogFun can help.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'what-is-rsd-adhd',
    title: 'What Is RSD? Rejection Sensitive Dysphoria and ADHD Explained',
    description: 'Understand rejection sensitive dysphoria (RSD) in ADHD and how it affects emotions, relationships, and self-perception.',
    keywords: 'what is rsd adhd, adhd and mood swings, emotional dysregulation adhd, does adhd cause anxiety',
    excerpt: 'RSD feels like emotional pain turned up loud—and it is a common part of many ADHD experiences.',
    heroQuery: 'rejection sensitive dysphoria ADHD',
    heroAlt: 'Contemplative adult with emotional expression in a cozy setting',
    content: [
      <p key="intro">
        Rejection Sensitive Dysphoria (RSD) is not a personality flaw. It is a painful emotional response that often comes with ADHD, especially when you’ve felt misunderstood for a long time.
      </p>,
      <p key="intro2">
        It might show up as intense hurt from a small comment, or as replaying a conversation all night. That doesn’t mean you are too sensitive. It means your brain is wired to care deeply about connection and belonging.
      </p>,
      <h2 key="what-is" className="text-2xl font-semibold text-forest mt-10 mb-4">What RSD Is</h2>,
      <p key="what-is-para">
        RSD is an extreme emotional reaction to perceived rejection, criticism, or failure. The feelings can be overwhelming and disproportionate to the situation, which makes it hard to respond calmly.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Happens With ADHD</h2>,
      <p key="why-para">
        ADHD traits like emotional dysregulation and low self-esteem can amplify RSD. If you’ve spent years trying to hide your difficulties, the emotional hits feel especially sharp.
      </p>,
      <h2 key="relationships" className="text-2xl font-semibold text-forest mt-10 mb-4">How It Shows Up</h2>,
      <p key="relationships-para">
        RSD can make relationships messy. You might overreact to a tone in a text, feel abandoned by someone who is busy, or replay feedback as a personal failure.
      </p>,
      <h2 key="help" className="text-2xl font-semibold text-forest mt-10 mb-4">What Helps</h2>,
      <p key="help-para">
        The helpful work is not about making the feelings disappear. It is about learning to recognize RSD, pause before reacting, and build strategies that keep your relationships and your self-worth steadier.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">RSD making everyday moments harder?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to talk about how ADHD-focused occupational therapy can help you manage emotional dysregulation.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'how-to-focus-with-adhd-without-medication',
    title: 'How to Focus With ADHD Without Medication: What Actually Works',
    description: 'Find practical non-medication strategies for ADHD focus and why generic advice often falls short.',
    keywords: 'how to focus with adhd, how to focus with adhd without medication, how to treat adhd in adults without meds, executive functioning coaches near me',
    excerpt: 'Focus with ADHD is possible without medication, but it requires strategies built around how your brain works—not around willpower.',
    heroQuery: 'focus ADHD without medication',
    heroAlt: 'A person calmly focusing at a desk with warm light',
    content: [
      <p key="intro">
        If you’re tired of “just focus” advice, this is for you. ADHD focus is not a character issue. It is a pattern of brain activity that responds to the right supports.
      </p>,
      <p key="intro2">
        Medication helps many people, but it is not the only path. There are practical strategies that can improve focus without relying solely on a pill.
      </p>,
      <h2 key="why-tips-fail" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Generic Tips Fail</h2>,
      <p key="why-tips-fail-para">
        Advice like “use a timer” or “clear your desk” can work for some tasks. The problem is that ADHD doesn’t fail at all tasks equally. It fails in the tasks that feel boring, overwhelming, or uncertain.
      </p>,
      <h2 key="what-works" className="text-2xl font-semibold text-forest mt-10 mb-4">What Actually Works</h2>,
      <p key="what-works-para">
        The best strategies are the ones that fit your life and your brain. That often means creating external cues, building in gentle momentum, and making the task feel personally meaningful.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you identify the specific situations where focus fails and build a realistic plan for those moments. It is not about forcing yourself to stare longer—it is about changing the task so your brain can join in.
      </p>,
      <p key="cogfun-para2">
        That means looking at your environment, your energy, your values, and the small scaffolds that actually keep you moving.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want focus strategies that feel real?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore non-medication focus tools that match your ADHD brain.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'occupational-therapy-adhd-adults',
    title: 'Why Occupational Therapy for ADHD Is Different From Everything Else You’ve Tried',
    description: 'Learn what occupational therapy brings to ADHD care and why it is often the missing piece for adults.',
    keywords: 'occupational therapy adhd, occupational therapy and adhd, adhd therapy, therapists specializing in adhd, executive function therapy adults',
    excerpt: 'Occupational therapy is the often-missing bridge between awareness and actual daily functioning for adults with ADHD.',
    heroQuery: 'occupational therapy ADHD adult',
    heroAlt: 'Therapist and adult client reviewing practical strategies together',
    content: [
      <p key="intro">
        If you’ve tried coaching, therapy, and meds and still feel stuck, occupational therapy may be the missing piece. It is not more talk. It is more practicality.
      </p>,
      <p key="intro2">
        Occupational therapy looks at how you live, work, and move through your day. That is exactly where ADHD shows up.
      </p>,
      <h2 key="what-is-ot" className="text-2xl font-semibold text-forest mt-10 mb-4">What Occupational Therapy Is</h2>,
      <p key="what-is-ot-para">
        OT is about helping people function better in their daily lives. For ADHD, that means building habits, systems, and routines that actually stick.
      </p>,
      <h2 key="why-missing" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It’s Often Missing From ADHD Care</h2>,
      <p key="why-missing-para">
        ADHD treatment is often focused on diagnosis, medication, or mental health. The functional layer—how you get through work, home, and relationships—is usually left out.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">Why CogFun Is the Best OT Approach</h2>,
      <p key="cogfun-para">
        CogFun is specifically designed for adult ADHD with a structured protocol and research behind it. It isn’t vague or generic; it is built around your actual life.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">The Honest Claim</h2>,
      <p key="honest-para">
        OT is not a cure. It is a way to make your daily life less frustrating and more reliable. That is huge for ADHD.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to try something different?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to see how CogFun occupational therapy can support your adult ADHD experience.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'is-adhd-a-disability',
    title: 'Is ADHD a Disability? What It Means for Adults at Work and in Life',
    description: 'Explore whether ADHD is considered a disability and how functional support matters in work and daily life.',
    keywords: 'is adhd considered a disability, does adhd count as a disability, is adhd a learning disability, is adhd neurodivergent, is adhd an intellectual disability',
    excerpt: 'ADHD can be a disability in practical terms, especially when it affects daily functioning at work and home.',
    heroQuery: 'ADHD disability work life',
    heroAlt: 'Adult working with ADHD in a calm home office setting',
    content: [
      <p key="intro">
        ADHD is often described as a difference, but it can also be a disability when it interferes with everyday functioning. That doesn’t make you broken. It makes your needs real.
      </p>,
      <p key="intro2">
        The important part is not the label. The important part is whether you have support for the challenges ADHD creates in life and work.
      </p>,
      <h2 key="legal" className="text-2xl font-semibold text-forest mt-10 mb-4">What “Disability” Means</h2>,
      <p key="legal-para">
        Legally, disability means a condition that substantially limits major life activities. For many adults with ADHD, focus, organization, time management, and emotional regulation can feel like major life activities.
      </p>,
      <h2 key="real-life" className="text-2xl font-semibold text-forest mt-10 mb-4">What It Means in Real Life</h2>,
      <p key="real-life-para">
        If ADHD makes work harder, makes you miss deadlines, or makes everyday tasks exhausting, that is not just a personality quirk. It is a functional challenge that deserves support.
      </p>,
      <h2 key="support" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Treatment Matters</h2>,
      <p key="support-para">
        Labels are one thing. Practical help is another. CogFun focuses on the functional part—helping you manage your life more effectively, regardless of whether the diagnosis is called a disability.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want support that meets your real needs?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore ADHD care that helps you at work, at home, and everywhere in between.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-executive-function-daily-life',
    title: 'ADHD and Executive Function: Why Your Brain Struggles With Everyday Tasks',
    description: 'Learn how executive function challenges affect adult ADHD and why CogFun focuses on practical daily life support.',
    keywords: 'executive functioning coaches near me, how to focus with adhd, task initiation adhd, how to stay focused with adhd',
    excerpt: 'Executive function is the practical part of the brain that ADHD disrupts, and that is exactly what CogFun works on.',
    heroQuery: 'ADHD executive function everyday tasks',
    heroAlt: 'A person organizing their day with notes and a warm background',
    content: [
      <p key="intro">
        Executive function is the brain’s planning and organizing system. For people with ADHD, that system is often unreliable, which is why everyday tasks can feel harder than they should.
      </p>,
      <p key="intro2">
        It’s not that you can’t do the task. It’s that the brain isn’t giving you the steady signal you need to start, continue, and finish.
      </p>,
      <h2 key="what-is" className="text-2xl font-semibold text-forest mt-10 mb-4">What Executive Function Means</h2>,
      <p key="what-is-para">
        Executive function includes things like planning, starting tasks, switching attention, remembering details, and managing time. You can think of it as the part of the brain that turns intentions into action.
      </p>,
      <h2 key="adhd" className="text-2xl font-semibold text-forest mt-10 mb-4">How ADHD Disrupts It</h2>,
      <p key="adhd-para">
        In ADHD, that system is often inconsistent. One day it works. The next day it doesn’t. That inconsistency is what makes ADHD feel so unpredictable.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you build habits and strategies that support your executive function, rather than forcing you to rely on willpower. It’s about making everyday tasks more manageable.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to make everyday tasks feel easier?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore how CogFun can support your executive function in real life.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-mood-swings-emotional-dysregulation',
    title: 'ADHD and Mood Swings: Understanding Emotional Dysregulation',
    description: 'Explore how ADHD causes emotional dysregulation and what can help you manage mood swings in everyday life.',
    keywords: 'adhd and mood swings, what is rsd adhd, does adhd cause anxiety, does anxiety cause adhd',
    excerpt: 'ADHD can make emotions feel louder and harder to control, and that is part of why life feels more volatile than it should.',
    heroQuery: 'ADHD mood swings emotional dysregulation',
    heroAlt: 'A person sitting thoughtfully with a warm background, reflecting on emotions',
    content: [
      <p key="intro">
        Mood swings in ADHD often feel like your feelings are on a roller coaster. One moment you’re fine, the next moment something small becomes huge.
      </p>,
      <p key="intro2">
        That doesn’t mean you’re dramatic. It means your brain has a harder time regulating emotion, especially when stress or overwhelm is present.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why ADHD Affects Emotion</h2>,
      <p key="why-para">
        ADHD affects the brain systems that help you pause, evaluate, and choose how to respond. When those systems are weaker, emotions can feel more intense and harder to regulate.
      </p>,
      <h2 key="not-mood-disorder" className="text-2xl font-semibold text-forest mt-10 mb-4">This Is Not Always a Mood Disorder</h2>,
      <p key="not-mood-disorder-para">
        Emotional dysregulation in ADHD is not the same thing as bipolar disorder or depression. It is more about how your brain reacts to everyday stress and frustration.
      </p>,
      <h2 key="help" className="text-2xl font-semibold text-forest mt-10 mb-4">What Helps</h2>,
      <p key="help-para">
        Practical support can help you slow down before reacting, understand your triggers, and build recovery strategies. That is exactly the kind of work CogFun does.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Mood swings making life feel shredded?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to explore how ADHD-focused occupational therapy can help you manage emotions more gently.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
  {
    slug: 'how-to-get-tested-for-adhd-adults',
    title: 'How to Get Tested for ADHD as an Adult: What You Need to Know',
    description: 'Learn the adult ADHD testing process, who can diagnose it, and what to do after diagnosis.',
    keywords: 'how can i get tested for adhd, how to get screened for adhd, can a therapist diagnose adhd, who does adhd testing, adhd specialist near me',
    excerpt: 'Getting tested for ADHD as an adult can feel confusing. Here’s what to expect and what comes next.',
    heroQuery: 'adult ADHD testing process',
    heroAlt: 'A friendly clinician meeting with an adult patient over video call',
    content: [
      <p key="intro">
        Getting tested for ADHD as an adult can feel like a maze. The good news is: it doesn’t have to be overwhelming if you know what to expect.
      </p>,
      <p key="intro2">
        The process is not a single test. It is a conversation, a history, and a look at how your brain works today.
      </p>,
      <h2 key="who" className="text-2xl font-semibold text-forest mt-10 mb-4">Who Can Diagnose ADHD?</h2>,
      <p key="who-para">
        In many places, psychiatrists, psychologists, and some physicians can diagnose ADHD. Occupational therapists do not diagnose ADHD, but they can help you understand the functional impact and support you after diagnosis.
      </p>,
      <h2 key="process" className="text-2xl font-semibold text-forest mt-10 mb-4">What the Process Looks Like</h2>,
      <p key="process-para">
        Expect questions about your childhood, your current day, and how ADHD affects your work and relationships. There may be rating scales and conversations with people who know you well.
      </p>,
      <h2 key="after" className="text-2xl font-semibold text-forest mt-10 mb-4">What Comes After Diagnosis</h2>,
      <p key="after-para">
        Diagnosis is only the first step. The next step is treatment and support. That is where CogFun fits in: it helps you turn the diagnosis into practical change.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to move forward after diagnosis?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free consultation to discuss how CogFun occupational therapy can support your ADHD journey.</p>
        <a href="/services" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free consultation</a>
      </div>,
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
