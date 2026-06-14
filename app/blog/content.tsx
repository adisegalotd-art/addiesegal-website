import type { ReactNode } from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  excerpt: string;
  heroQuery: string;
  heroAlt: string;
  heroSrc?: string;
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
    heroSrc: '/blog/what-is-cogfun.png',
    content: [
      <p key="intro">
        If you have ADHD, you already know what the problem feels like: you know what needs to be done, but starting it is a different story. That is exactly where CogFun shows up.
      </p>,
      <p key="intro2">
        CogFun is a research-backed occupational therapy protocol designed specifically for adults with ADHD. It is practical, patient, and honest about the fact that it is not a magic cure.
      </p>,
      <p key="services-link">
        To see how this approach is used in practice, visit the <a href="/services" className="text-forest hover:text-forest-dark underline">CogFun occupational therapy services page</a>.
      </p>,
      <h2 key="origin" className="text-2xl font-semibold text-forest mt-10 mb-4">Where CogFun Comes From</h2>,
      <p key="origin-para">
        CogFun was developed by Adina Maeir at Hebrew University. It was built around real-world function and grounded in peer-reviewed studies with adults who actually use it.
      </p>,
      <p key="origin-para2">
        The work is published in the American Journal of Occupational Therapy, and that matters because it proves CogFun is more than good intentions.
      </p>,
      <h2 key="different" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Is Different</h2>,
      <p key="different-para">
        Most ADHD programs stop at one of two places: medication or talk therapy. CogFun sits in between, where the real daily frustration happens. It asks, "What does your day actually look like?" and then helps you make it work.
      </p>,
      <p key="different-para2">
        It's the difference between understanding your ADHD and learning the exact practical moves that help you get through the day with less guilt and less chaos. For a broader look at how occupational therapy fills this gap, see <a href="/blog/occupational-therapy-adhd-adults" className="text-forest hover:text-forest-dark underline">why OT is different from everything else you've tried</a>.
      </p>,
      <h2 key="units" className="text-2xl font-semibold text-forest mt-10 mb-4">The Four Units of CogFun</h2>,
      <div key="units-list" className="space-y-4">
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Shared learning</h3>
          <p>We build a true picture of how ADHD shows up in your life, without blame. This is the phase where the story shifts from "I should just try harder" to "I can do better with the right support."</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Strategy acquisition</h3>
          <p>We analyze daily situations and interactions, identifying the strategies you're already using, which ones work, and which ones take too much energy.</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">General strategy development</h3>
          <p>We turn helpful habits into something you can use in many situations. The goal is something that fits your life and your energy.</p>
        </div>
        <div className="rounded-3xl bg-surface border border-surface-strong p-5 shadow-soft">
          <h3 className="font-semibold text-forest mb-2">Integration and self-management</h3>
          <p>We review everything and build a plan to last beyond the sessions.</p>
        </div>
      </div>,
      <h2 key="research" className="text-2xl font-semibold text-forest mt-10 mb-4">The Evidence</h2>,
      <p key="research-para">
        The research isn't flashy, and that's okay. The important part is that CogFun has been studied and shown to help adults with ADHD in real life. You're using a model with evidence behind it.
      </p>,
      <p key="research-para2">
        And yes, it has limits. It gives you tools for the part of ADHD that medication and coaching often miss.
      </p>,
      <h2 key="cta" className="text-2xl font-semibold text-forest mt-10 mb-4">Is CogFun Right for You?</h2>,
      <p key="cta-para">
        If you've been told to try harder, or if you've already done the meds/therapy/coach loop and are still struggling with the real day-to-day, CogFun may be exactly what you need. It's designed for adults who want practical change rather than abstract understanding.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to take a different approach?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to see how CogFun can support your ADHD and everyday functioning.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'why-you-are-not-lazy-task-initiation-adhd',
    title: "Why You're Not Lazy: Understanding Task Initiation and ADHD",
    description: 'Learn why task initiation feels impossible with ADHD and how practical strategies can help.',
    keywords: 'is procrastination a sign of adhd, how to focus with adhd, executive functioning coaches near me',
    excerpt: "Task initiation isn't laziness. For people with ADHD, it's a real brain challenge that needs real strategies.",
    heroQuery: 'ADHD task initiation challenges adult',
    heroAlt: 'Person hesitating before starting a task at a desk',
    heroSrc: '/blog/frustrated-man-desk.png',
    content: [
      <p key="intro">
        If getting started feels harder than finishing, you are not lazy. You are experiencing something real and surprisingly common in ADHD: task initiation difficulty.
      </p>,
      <p key="intro2">
        It can feel like the brain is asking for a larger reward than the task offers.
      </p>,
      <p key="services-link">
        Read more about <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD treatment approach</a> and how it supports task initiation challenges.
      </p>,
      <h2 key="neuroscience" className="text-2xl font-semibold text-forest mt-10 mb-4">What Happens in the Brain</h2>,
      <p key="neuro-para">
        ADHD changes how your brain evaluates effort and reward. Tasks that are boring, uncertain, or slow to pay off may not trigger the same reward system that gets other people moving. That's why it feels like pushing through concrete.
      </p>,
      <p key="neuro-para2">
        The brain needs different signals to start a task: more structure, more meaningful cues, and better alignment with your own priorities. This is closely tied to <a href="/blog/adhd-executive-function-daily-life" className="text-forest hover:text-forest-dark underline">how ADHD disrupts executive function</a> across all of daily life.
      </p>,
      <h2 key="willpower" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Willpower Alone Isn't Enough</h2>,
      <p key="willpower-para">
        Willpower is a tiny battery. If ADHD is draining that battery before you even begin, telling yourself to "try harder" is like asking a phone to run all day on 5% charge.
      </p>,
      <p key="willpower-para2">
        Building a practical setup that makes starting easier matters more than forcing your way through resistance.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun doesn't just tell you to "plan better." It helps you understand the actual situations where you freeze, the strategies you already reach for, and how to create a start routine that works for your brain.
      </p>,
      <p key="cogfun-para2">
        CogFun is a structured, evidence-based approach that builds on your real life rather than generic productivity advice.
      </p>,
      <h2 key="realistic" className="text-2xl font-semibold text-forest mt-10 mb-4">The Honest Truth</h2>,
      <p key="realistic-para">
        This isn't a cure. There will still be days when you struggle to begin. But with the right support, those days become less frequent, and you'll have real tools to navigate them.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want to learn more about CogFun?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore practical, ADHD-friendly strategies for starting the things that matter.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-specialist-near-me-what-to-look-for',
    title: "Searching for an ADHD Specialist Near You? Here's What to Actually Look For",
    description: 'Learn how to choose the right ADHD specialist and why occupational therapy with CogFun is a strong option.',
    keywords: 'adhd specialist near me, therapist for adhd, therapists specializing in adhd, adhd therapist aid',
    excerpt: 'Finding the right ADHD specialist means understanding what kind of support connects to the daily challenges you actually face.',
    heroQuery: 'therapist and patient talking',
    heroAlt: 'Professional consulting with an adult client in a calm office',
    content: [
      <p key="intro">
        Searching for ADHD support as an adult can feel overwhelming. Understanding what occupational therapy offers can help you identify whether it's the right fit for where you are.
      </p>,
      <p key="intro2">
        Finding the right specialist means understanding how their approach connects to the daily challenges you actually face.
      </p>,
      <p key="services-link">
        Learn why <a href="/services" className="text-forest hover:text-forest-dark underline">CogFun occupational therapy</a> is a strong option for adult ADHD support.
      </p>,
      <h2 key="specialty" className="text-2xl font-semibold text-forest mt-10 mb-4">What to Look For</h2>,
      <p key="specialty-para">
        An effective ADHD specialist for adults understands the daily practical challenges of living with ADHD: getting started on tasks, managing time, following through, and navigating emotional regulation. Experience with adult presentations of ADHD matters, since the way ADHD shows up in adults is often quite different from how it looks in children.
      </p>,
      <p key="specialty-para2">
        Executive function differences show up in very specific ways in daily life, and the right specialist will help you move from awareness to practical action.
      </p>,
      <h2 key="cogfun-ot" className="text-2xl font-semibold text-forest mt-10 mb-4">What CogFun-Trained OT Offers</h2>,
      <p key="cogfun-ot-para">
        A CogFun-trained occupational therapist looks at your routines, your environment, and your specific work demands. Sessions focus on what you are actually doing and how to make daily life more manageable. If you're still in the pre-diagnosis stage, see our guide on <a href="/blog/how-to-get-tested-for-adhd-adults" className="text-forest hover:text-forest-dark underline">how to get tested for ADHD as an adult</a>.
      </p>,
      <h2 key="practical" className="text-2xl font-semibold text-forest mt-10 mb-4">Practical Signals to Look For</h2>,
      <p key="practical-para">
        Look for someone who:
      </p>,
      <ul key="practical-list" className="list-disc list-inside space-y-3 ml-4">
        <li>Understands executive function and how it shows up in real daily life</li>
        <li>Uses evidence-based methods with a structured, collaborative process</li>
        <li>Has experience with adult ADHD specifically</li>
        <li>Builds strategies around your actual life rather than generic templates</li>
      </ul>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Trying to find the right specialist?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to see whether CogFun occupational therapy is the right fit for your ADHD journey.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-telehealth-therapy-nj-ny',
    title: 'ADHD Telehealth Therapy: What It Is and Why It Works for Adults',
    description: 'Explore why telehealth is a strong, convenient option for adult ADHD therapy in New Jersey and New York.',
    keywords: 'adhd telehealth, adhd treatment online, telehealth adhd therapy NJ, adhd therapist NJ',
    excerpt: 'Telehealth makes ADHD therapy more accessible for adults, especially when life is already crowded and unpredictable.',
    heroQuery: 'woman on video call home office',
    heroAlt: 'Remote ADHD therapy session on a laptop screen',
    content: [
      <p key="intro">
        If your to-do list feels full, the last thing you want is another appointment that requires travel, parking, and the stress of leaving the house. That's why ADHD telehealth therapy can be a real relief.
      </p>,
      <p key="intro2">
        For adults with ADHD, telehealth often means one fewer barrier, one less reason to delay, and one more way to keep therapy consistent.
      </p>,
      <p key="services-link">
        Explore how our <a href="/services" className="text-forest hover:text-forest-dark underline">telehealth ADHD services</a> are designed around real adult life.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Telehealth Works</h2>,
      <p key="why-para">
        Telehealth removes the commute, the waiting room, and the need to manage an unfamiliar environment. It lets you meet from your own space, where your routines and struggles actually happen.
      </p>,
      <p key="why-para2">
        That makes the work more practical. When we're looking at how your ADHD shows up in your life, real life is the best place to start. Not sure what to look for in a provider? Read about <a href="/blog/adhd-specialist-near-me-what-to-look-for" className="text-forest hover:text-forest-dark underline">how to choose the right ADHD specialist</a>.
      </p>,
      <h2 key="benefits" className="text-2xl font-semibold text-forest mt-10 mb-4">Good News for NJ and NY Residents</h2>,
      <p key="benefits-para">
        If you live in New Jersey or New York, telehealth offers a flexible way to get support from a licensed provider without leaving home. That is especially helpful if your schedule is tight, your energy is limited, or your ADHD makes transitions harder.
      </p>,
      <h2 key="expect" className="text-2xl font-semibold text-forest mt-10 mb-4">What to Expect in a Telehealth CogFun Session</h2>,
      <p key="expect-para">
        The sessions are collaborative and practical. We'll talk about your real tasks, your environment, and the small changes that can make a big difference. You don't need special software, just a stable video call and your actual life.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">A Grounded Expectation</h2>,
      <p key="honest-para">
        If you're hoping for quick fixes, telehealth won't change that. But if you want a sustainable way to manage ADHD in adult life, it can make the process easier, more consistent, and more realistic.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Curious about telehealth ADHD therapy?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to see if telehealth CogFun is the right fit for you in NJ or NY.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'does-adhd-get-worse-with-age',
    title: 'Does ADHD Get Worse With Age? What Adults Need to Know',
    description: 'Understand how ADHD changes over time and why symptoms often feel harder in adulthood.',
    keywords: 'does adhd get worse with age, can adhd get worse with age, untreated adhd in female adults, adhd symptoms in adult men',
    excerpt: "ADHD doesn't necessarily get worse, but adult life often makes it harder to manage. That is where focused support can help.",
    heroQuery: 'adult woman thinking window',
    heroAlt: 'A thoughtful adult looking out a window with a notebook',
    content: [
      <p key="intro">
        The short answer is: ADHD itself doesn't suddenly get worse with age, but adult life often makes it feel that way.
      </p>,
      <p key="intro2">
        More responsibilities, less external structure, and the expectation that you should have it all together can make ADHD symptoms harder to manage. The demands in your environment have changed, and those differences become more apparent.
      </p>,
      <p key="services-link">
        Learn more about <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD treatment services</a> for adults feeling this shift.
      </p>,
      <h2 key="adult-life" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Feels Worse</h2>,
      <p key="adult-life-para">
        In childhood, school gives structure. In adulthood, you may be juggling work, relationships, bills, and self-care. That demands more planning, more transitions, and more sustained focus.
      </p>,
      <p key="adult-life-para2">
        For many people with ADHD, those demands reveal gaps that were always there.
      </p>,
      <h2 key="women" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Women Often Notice It Later</h2>,
      <p key="women-para">
        Women are more likely to mask ADHD and to have symptoms show up as internal struggles. That means it often gets missed until adulthood, when the load becomes harder to carry alone. For a deeper look at how this plays out, see our post on <a href="/blog/adhd-symptoms-women-adults" className="text-forest hover:text-forest-dark underline">ADHD symptoms in adult women</a>.
      </p>,
      <h2 key="good-news" className="text-2xl font-semibold text-forest mt-10 mb-4">What Support Looks Like</h2>,
      <p key="good-news-para">
        With the right approach, adults with ADHD can build practical strategies that make daily life more manageable. The goal isn't to eliminate ADHD but to develop functional routines that work with how your brain actually operates. CogFun is designed specifically for this work.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">Setting Realistic Expectations</h2>,
      <p key="honest-para">
        Building more ease into your days takes time. CogFun is designed to make that process more manageable, one practical step at a time.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Feeling like ADHD is catching up with you?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore how CogFun occupational therapy can help you manage adult life more effectively.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-and-anxiety-what-is-the-difference',
    title: "ADHD and Anxiety: What's the Difference and Can You Have Both?",
    description: 'Explore how ADHD and anxiety overlap, how they differ, and what to do when both are present.',
    keywords: 'does adhd cause anxiety, do i have adhd or anxiety, can you have ocd and adhd, psychotherapy for adhd, adhd and depression treatment',
    excerpt: 'ADHD and anxiety often feel the same, but they are different patterns that can both be true at once.',
    heroQuery: 'person overwhelmed desk papers',
    heroAlt: 'A person sitting calmly with hands folded, thinking about emotions',
    content: [
      <p key="intro">
        If your mind is racing and your heart feels tight, it can be hard to tell whether ADHD or anxiety is driving the experience. The truth is, both can be true, and both deserve attention.
      </p>,
      <p key="intro2">
        ADHD often creates anxiety because the world asks for focus and consistency in ways your brain doesn't naturally provide.
      </p>,
      <p key="services-link">
        Learn how <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD treatment approach</a> can help when anxiety and ADHD overlap.
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
        They call for different treatment approaches, and good support should recognize both. ADHD also brings its own emotional patterns. Read more about <a href="/blog/adhd-mood-swings-emotional-dysregulation" className="text-forest hover:text-forest-dark underline">ADHD and mood swings</a> for the fuller picture.
      </p>,
      <h2 key="treatment" className="text-2xl font-semibold text-forest mt-10 mb-4">Why This Matters for Treatment</h2>,
      <p key="treatment-para">
        When anxiety is addressed without looking at ADHD, you may feel better in the short term but still struggle with daily functioning. When ADHD is addressed without acknowledging anxiety, the worry can continue to sap your energy.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">Where CogFun Fits In</h2>,
      <p key="cogfun-para">
        CogFun is occupational therapy focused on daily functioning, and that often reduces the anxiety that comes from feeling behind, forgetful, or out of control.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Not sure whether it's ADHD, anxiety, or both?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to talk through what you're experiencing and whether ADHD-focused occupational therapy can help.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'high-functioning-adhd-adults',
    title: "High-Functioning ADHD: When You Look Fine But Feel Like You're Falling Apart",
    description: 'Discover what high-functioning ADHD really looks like and why it often leads to hidden exhaustion.',
    keywords: 'high functioning adhd, am i lazy or do i have adhd, untreated adhd in female adults, adhd and mood swings',
    excerpt: 'High-functioning ADHD is often invisible from the outside and exhausting from the inside.',
    heroQuery: 'professional woman tired office',
    heroAlt: 'A professional looking composed while thinking deeply',
    content: [
      <p key="intro">
        You may look put together. You may keep your meetings and your inbox under control. Inside, though, you might be holding everything together with a fragile system.
      </p>,
      <p key="intro2">
        That is high-functioning ADHD. It often looks like success on the surface and exhaustion underneath.
      </p>,
      <p key="services-link">
        Find out how <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD services</a> help people who seem to have it all together but feel burned out inside.
      </p>,
      <h2 key="masking" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Gets Missed</h2>,
      <p key="masking-para">
        People with high-functioning ADHD are often good at masking. They compensate with extra effort, structure, or people-pleasing. That can make it harder for clinicians to recognize the real struggle. This pattern is especially common in women. See <a href="/blog/adhd-symptoms-women-adults" className="text-forest hover:text-forest-dark underline">ADHD symptoms in adult women</a> for more on how it presents differently.
      </p>,
      <h2 key="exhaustion" className="text-2xl font-semibold text-forest mt-10 mb-4">The Hidden Exhaustion</h2>,
      <p key="exhaustion-para">
        Managing ADHD in a system built around consistency takes real effort, and that ongoing effort shows up as fatigue over time.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you stop relying on brittle strategies and start building systems that are sustainable. It focuses on the real daily work you are already doing and makes it easier to keep that work going.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">What to Expect</h2>,
      <p key="honest-para">
        CogFun is a way to make your life feel less heavy. The goal is more clarity and less daily struggle.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want to stop burning yourself out?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to talk about how CogFun occupational therapy can support your high-functioning ADHD.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
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
    heroSrc: '/blog/women-adhd-diagnosis.png',
    content: [
      <p key="intro">
        ADHD in adult women is often labeled as "stress" or "overwhelm." That is because it frequently shows up as quiet distraction, emotional overwhelm, and doing too much to cover for what's needed.
      </p>,
      <p key="intro2">
        It looks different from the stereotype of a hyperactive child, but it is just as real.
      </p>,
      <p key="services-link">
        Discover how <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD treatment approach</a> supports adult women with hidden symptoms.
      </p>,
      <h2 key="presentation" className="text-2xl font-semibold text-forest mt-10 mb-4">How It Often Presents</h2>,
      <p key="presentation-para">
        Many women with ADHD are experts at keeping things together. They may be punctual, accomplished, and deeply compassionate, while also feeling scattered, exhausted, and anxious under the surface.
      </p>,
      <h2 key="masking" className="text-2xl font-semibold text-forest mt-10 mb-4">The Masking Factor</h2>,
      <p key="masking-para">
        Masking is a survival strategy. It can help you get through the day, but it also increases fatigue and makes it harder to see what support you actually need. If the exhaustion feels familiar, you may also relate to <a href="/blog/high-functioning-adhd-adults" className="text-forest hover:text-forest-dark underline">high-functioning ADHD</a>, when you look fine but feel like you're falling apart.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why This Matters</h2>,
      <p key="why-para">
        When ADHD goes unrecognized, treatment for anxiety or depression may address some symptoms while the underlying functional challenges persist.
      </p>,
      <p key="diagnosis-gap">
        The research reflects this gap: women with ADHD are diagnosed on average about 5 years later than men, even though symptoms typically emerge at the same age (Amoretti et al., 2025, European Psychiatry / ECNP Congress). Those are years of struggling without the right framework.
      </p>,
      <h2 key="rsd" className="text-2xl font-semibold text-forest mt-10 mb-4">A Note on RSD</h2>,
      <p key="rsd-para">
        Rejection Sensitive Dysphoria is common in ADHD and often feels especially intense for women who have spent years trying to be a certain way. It's real, and it's part of the story. Learn more about <a href="/blog/what-is-rsd-adhd" className="text-forest hover:text-forest-dark underline">what RSD is and how it shows up in ADHD</a>.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Wondering if ADHD looks different for you?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore whether adult ADHD is part of your story and how CogFun can help.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'what-is-rsd-adhd',
    title: 'What Is RSD? Rejection Sensitive Dysphoria and ADHD Explained',
    description: 'Understand rejection sensitive dysphoria (RSD) in ADHD and how it affects emotions, relationships, and self-perception.',
    keywords: 'what is rsd adhd, adhd and mood swings, emotional dysregulation adhd, does adhd cause anxiety',
    excerpt: 'RSD feels like emotional pain turned up loud, and it is a common part of many ADHD experiences.',
    heroQuery: 'rejection sensitive dysphoria ADHD',
    heroAlt: 'Contemplative adult with emotional expression in a cozy setting',
    heroSrc: '/blog/rsd-adhd.png',
    content: [
      <p key="intro">
        Rejection Sensitive Dysphoria (RSD) is a painful emotional response that often comes with ADHD, especially when you've felt misunderstood for a long time.
      </p>,
      <p key="intro2">
        It might show up as intense hurt from a small comment, or as replaying a conversation all night. Your brain is wired to care deeply about connection and belonging.
      </p>,
      <p key="services-link">
        See how <a href="/services" className="text-forest hover:text-forest-dark underline">CogFun occupational therapy</a> addresses emotional dysregulation as part of ADHD care.
      </p>,
      <h2 key="what-is" className="text-2xl font-semibold text-forest mt-10 mb-4">What RSD Is</h2>,
      <p key="what-is-para">
        RSD is an extreme emotional reaction to perceived rejection, criticism, or failure. The feelings can be overwhelming and disproportionate to the situation, which makes it hard to respond calmly.
      </p>,
      <p key="related-link-1">
        This is closely related to <a href="/blog/adhd-mood-swings-emotional-dysregulation" className="text-forest hover:text-forest-dark underline">ADHD and Mood Swings</a>, where emotional dysregulation is explained in more detail.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why It Happens With ADHD</h2>,
      <p key="why-para">
        ADHD traits like emotional dysregulation and low self-esteem can amplify RSD. If you've spent years trying to hide your difficulties, the emotional hits feel especially sharp.
      </p>,
      <h2 key="relationships" className="text-2xl font-semibold text-forest mt-10 mb-4">How It Shows Up</h2>,
      <p key="relationships-para">
        RSD can make relationships messy. You might overreact to a tone in a text, feel abandoned by someone who is busy, or replay feedback as a personal failure. RSD is also especially common in women who have spent years masking. See <a href="/blog/adhd-symptoms-women-adults" className="text-forest hover:text-forest-dark underline">ADHD symptoms in adult women</a> for how these patterns connect.
      </p>,
      <h2 key="help" className="text-2xl font-semibold text-forest mt-10 mb-4">What Helps</h2>,
      <p key="help-para">
        The helpful work is about learning to recognize RSD, pause before reacting, and build strategies that keep your relationships and your self-worth steadier.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">RSD making everyday moments harder?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to talk about how ADHD-focused occupational therapy can help you manage emotional dysregulation.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'how-to-focus-with-adhd-without-medication',
    title: 'How to Focus With ADHD Without Medication: What Actually Works',
    description: 'Find practical non-medication strategies for ADHD focus and why generic advice often falls short.',
    keywords: 'how to focus with adhd, how to focus with adhd without medication, how to treat adhd in adults without meds, executive functioning coaches near me',
    excerpt: 'Focus with ADHD is possible without medication, but it requires strategies built around how your brain works rather than willpower.',
    heroQuery: 'person meditating calm',
    heroAlt: 'A person calmly focusing at a desk with warm light',
    content: [
      <p key="intro">
        If you're tired of "just focus" advice, this is for you. ADHD focus is a pattern of brain activity that responds to the right supports.
      </p>,
      <p key="intro2">
        Medication helps many people, but there are also practical strategies that can improve focus without relying solely on a pill.
      </p>,
      <p key="services-link">
        See how <a href="/services" className="text-forest hover:text-forest-dark underline">our non-medication ADHD services</a> help you build focus strategies that fit your brain.
      </p>,
      <h2 key="why-tips-fail" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Generic Tips Fail</h2>,
      <p key="why-tips-fail-para">
        Advice like "use a timer" or "clear your desk" can work for some tasks. The problem is that ADHD doesn't fail at all tasks equally. It fails in the tasks that feel boring, overwhelming, or uncertain. This is rooted in how <a href="/blog/adhd-executive-function-daily-life" className="text-forest hover:text-forest-dark underline">ADHD affects executive function</a>, the brain's planning and starting system.
      </p>,
      <h2 key="what-works" className="text-2xl font-semibold text-forest mt-10 mb-4">What Actually Works</h2>,
      <p key="what-works-para">
        The best strategies are the ones that fit your life and your brain. That often means creating external cues, building in gentle momentum, and making the task feel personally meaningful.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you identify the specific situations where focus fails and build a realistic plan for those moments. CogFun focuses on changing the task setup so your brain can engage more naturally.
      </p>,
      <p key="cogfun-para2">
        That means looking at your environment, your energy, your values, and the small scaffolds that actually keep you moving.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want focus strategies that feel real?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore non-medication focus tools that match your ADHD brain.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'occupational-therapy-adhd-adults',
    title: "Why Occupational Therapy for ADHD Is Different From Everything Else You've Tried",
    description: 'Learn what occupational therapy brings to ADHD care and why it is often the missing piece for adults.',
    keywords: 'occupational therapy adhd, occupational therapy and adhd, adhd therapy, therapists specializing in adhd, executive function therapy adults',
    excerpt: 'Occupational therapy is the often-missing bridge between awareness and actual daily functioning for adults with ADHD.',
    heroQuery: 'hands working creative task',
    heroAlt: 'Therapist and adult client reviewing practical strategies together',
    content: [
      <p key="intro">
        Occupational therapy focuses on the practical side of daily life, which is exactly where ADHD creates the most friction.
      </p>,
      <p key="intro2">
        Occupational therapy looks at how you live, work, and move through your day. That is exactly where ADHD shows up.
      </p>,
      <p key="services-link">
        Learn what <a href="/services" className="text-forest hover:text-forest-dark underline">occupational therapy for ADHD</a> looks like in practice.
      </p>,
      <h2 key="what-is-ot" className="text-2xl font-semibold text-forest mt-10 mb-4">What Occupational Therapy Is</h2>,
      <p key="what-is-ot-para">
        OT is about helping people function better in their daily lives. For ADHD, that means building habits, systems, and routines that actually stick.
      </p>,
      <h2 key="why-missing" className="text-2xl font-semibold text-forest mt-10 mb-4">The Functional Layer</h2>,
      <p key="why-missing-para">
        The functional layer of getting through work, home, and relationships is often where the most support is needed. ADHD treatment that includes occupational therapy addresses this layer directly.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">Why CogFun Is the Best OT Approach</h2>,
      <p key="cogfun-para">
        CogFun is specifically designed for adult ADHD with a structured protocol and research behind it. Built around your actual life rather than generic templates, it delivers targeted support. For a full breakdown of how it works, read <a href="/blog/what-is-cogfun-adhd-therapy" className="text-forest hover:text-forest-dark underline">what CogFun is and why it's different</a>.
      </p>,
      <h2 key="honest" className="text-2xl font-semibold text-forest mt-10 mb-4">What to Expect</h2>,
      <p key="honest-para">
        OT makes your daily life more reliable and less frustrating. For adults with ADHD, that shift is significant.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to try something different?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to see how CogFun occupational therapy can support your adult ADHD experience.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'is-adhd-a-disability',
    title: 'Is ADHD a Disability? What It Means for Adults at Work and in Life',
    description: 'Explore whether ADHD is considered a disability and how functional support matters in work and daily life.',
    keywords: 'is adhd considered a disability, does adhd count as a disability, is adhd a learning disability, is adhd neurodivergent, is adhd an intellectual disability',
    excerpt: 'ADHD can be a disability in practical terms, especially when it affects daily functioning at work and home.',
    heroQuery: 'person at work desk confident',
    heroAlt: 'Adult working with ADHD in a calm home office setting',
    content: [
      <p key="intro">
        ADHD is often described as a difference, but it can also be a disability when it interferes with everyday functioning. Your needs are real and they deserve real support.
      </p>,
      <p key="intro2">
        The label matters less than whether you have practical support for the challenges ADHD creates in life and work.
      </p>,
      <p key="services-link">
        Explore <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD support services</a> built around functional daily challenges, not just the diagnosis.
      </p>,
      <h2 key="legal" className="text-2xl font-semibold text-forest mt-10 mb-4">What "Disability" Means</h2>,
      <p key="legal-para">
        Legally, disability means a condition that substantially limits major life activities. For many adults with ADHD, focus, organization, time management, and emotional regulation can feel like major life activities.
      </p>,
      <h2 key="real-life" className="text-2xl font-semibold text-forest mt-10 mb-4">What It Means in Real Life</h2>,
      <p key="real-life-para">
        If ADHD makes work harder, makes you miss deadlines, or makes everyday tasks exhausting, that is a functional challenge that deserves support. Much of this comes down to <a href="/blog/adhd-executive-function-daily-life" className="text-forest hover:text-forest-dark underline">how ADHD disrupts executive function in daily life</a>.
      </p>,
      <h2 key="support" className="text-2xl font-semibold text-forest mt-10 mb-4">Why Treatment Matters</h2>,
      <p key="support-para">
        Labels are one thing. Practical help is another. CogFun focuses on the functional part: helping you manage your life more effectively, regardless of whether the diagnosis is called a disability.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Want support that meets your real needs?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore ADHD care that helps you at work, at home, and everywhere in between.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
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
    heroSrc: '/blog/adhd-brain-icon.png',
    content: [
      <p key="intro">
        Executive function is the brain's planning and organizing system. For people with ADHD, that system is often unreliable, which is why everyday tasks can feel harder than they should.
      </p>,
      <p key="intro2">
        The brain often struggles to generate the steady signal needed to start, continue, and finish.
      </p>,
      <p key="services-link">
        Find out how <a href="/services" className="text-forest hover:text-forest-dark underline">our services for executive function</a> help make everyday tasks more reliable.
      </p>,
      <h2 key="what-is" className="text-2xl font-semibold text-forest mt-10 mb-4">What Executive Function Means</h2>,
      <p key="what-is-para">
        Executive function includes things like planning, starting tasks, switching attention, remembering details, and managing time. You can think of it as the part of the brain that turns intentions into action.
      </p>,
      <h2 key="adhd" className="text-2xl font-semibold text-forest mt-10 mb-4">How ADHD Disrupts It</h2>,
      <p key="adhd-para">
        In ADHD, that system is often inconsistent. One day it works. The next day it doesn't. That inconsistency is what makes ADHD feel so unpredictable. One of the most common ways this shows up is around starting tasks. Read about <a href="/blog/why-you-are-not-lazy-task-initiation-adhd" className="text-forest hover:text-forest-dark underline">why task initiation is so hard with ADHD</a>.
      </p>,
      <h2 key="cogfun" className="text-2xl font-semibold text-forest mt-10 mb-4">How CogFun Helps</h2>,
      <p key="cogfun-para">
        CogFun helps you build habits and strategies that support your executive function, rather than forcing you to rely on willpower. It's about making everyday tasks more manageable.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Ready to make everyday tasks feel easier?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore how CogFun can support your executive function in real life.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'adhd-mood-swings-emotional-dysregulation',
    title: 'ADHD and Mood Swings: Understanding Emotional Dysregulation',
    description: 'Explore how ADHD causes emotional dysregulation and what can help you manage mood swings in everyday life.',
    keywords: 'adhd and mood swings, what is rsd adhd, does adhd cause anxiety, does anxiety cause adhd',
    excerpt: 'ADHD can make emotions feel louder and harder to control, and that is part of why life feels more volatile than it should.',
    heroQuery: 'woman deep in thought',
    heroAlt: 'A person sitting thoughtfully with a warm background, reflecting on emotions',
    content: [
      <p key="intro">
        Mood swings in ADHD often feel like your feelings are on a roller coaster. One moment you're fine, the next moment something small becomes huge.
      </p>,
      <p key="intro2">
        Your brain has a harder time regulating emotion, especially when stress or overwhelm is present.
      </p>,
      <p key="services-link">
        Learn how <a href="/services" className="text-forest hover:text-forest-dark underline">our ADHD occupational therapy services</a> help with emotional regulation and daily life.
      </p>,
      <h2 key="why" className="text-2xl font-semibold text-forest mt-10 mb-4">Why ADHD Affects Emotion</h2>,
      <p key="why-para">
        ADHD affects the brain systems that help you pause, evaluate, and choose how to respond. When those systems are less consistent, emotions can feel more intense and harder to regulate.
      </p>,
      <p key="related-link-1">
        If you want more on this emotional pattern, see <a href="/blog/what-is-rsd-adhd" className="text-forest hover:text-forest-dark underline">What Is RSD?</a> for another angle on rejection sensitivity.
      </p>,
      <h2 key="not-mood-disorder" className="text-2xl font-semibold text-forest mt-10 mb-4">About Emotional Dysregulation in ADHD</h2>,
      <p key="not-mood-disorder-para">
        Emotional dysregulation in ADHD is distinct from bipolar disorder or depression. It reflects how your brain reacts to everyday stress and frustration. If you're also dealing with worry or tension, see how <a href="/blog/adhd-and-anxiety-what-is-the-difference" className="text-forest hover:text-forest-dark underline">ADHD and anxiety overlap and differ</a>.
      </p>,
      <h2 key="help" className="text-2xl font-semibold text-forest mt-10 mb-4">What Helps</h2>,
      <p key="help-para">
        Practical support can help you slow down before reacting, understand your triggers, and build recovery strategies. That is exactly the kind of work CogFun does.
      </p>,
      <div key="cta-box" className="rounded-3xl bg-surface border border-surface-strong p-6 mt-8 shadow-soft">
        <p className="mb-4 text-forest font-semibold">Mood swings making life feel shredded?</p>
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to explore how ADHD-focused occupational therapy can help you manage emotions more gently.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
  {
    slug: 'how-to-get-tested-for-adhd-adults',
    title: 'How to Get Tested for ADHD as an Adult: What You Need to Know',
    description: 'Learn the adult ADHD testing process, who can diagnose it, and what to do after diagnosis.',
    keywords: 'how can i get tested for adhd, how to get screened for adhd, can a therapist diagnose adhd, who does adhd testing, adhd specialist near me',
    excerpt: "Getting tested for ADHD as an adult can feel confusing. Here's what to expect and what comes next.",
    heroQuery: 'doctor patient consultation',
    heroAlt: 'A friendly clinician meeting with an adult patient over video call',
    content: [
      <p key="intro">
        Getting tested for ADHD as an adult can feel like a maze. The good news is: it doesn't have to be overwhelming if you know what to expect.
      </p>,
      <p key="intro2">
        The process involves a conversation, a history, and a look at how your brain works today.
      </p>,
      <p key="services-link">
        Once you have a diagnosis, see how <a href="/services" className="text-forest hover:text-forest-dark underline">our post-diagnosis ADHD services</a> help you turn it into practical change.
      </p>,
      <h2 key="who" className="text-2xl font-semibold text-forest mt-10 mb-4">Who Can Diagnose ADHD?</h2>,
      <p key="who-para">
        In many places, psychiatrists, psychologists, and some physicians can diagnose ADHD. Occupational therapists do not diagnose ADHD, but they can help you understand the functional impact and support you after diagnosis. Not sure how to find the right person? Read about <a href="/blog/adhd-specialist-near-me-what-to-look-for" className="text-forest hover:text-forest-dark underline">what to look for in an ADHD specialist</a>.
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
        <p className="text-muted leading-relaxed mb-4">Book a free 15-minute consultation to discuss how CogFun occupational therapy can support your ADHD journey.</p>
        <a href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-white font-semibold hover:bg-forest-dark transition-colors">Book a free 15-minute consultation</a>
      </div>,
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
