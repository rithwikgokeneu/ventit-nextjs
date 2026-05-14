'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Network, Wallet, FileText, Newspaper, BookOpen, Check, X, ChevronDown, ArrowRightIcon } from 'lucide-react';
import { PageHero, MetricStrip, BottomCTA, FeatureGrid } from '@/components/page-blocks';

const fadeInView = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const CATEGORY_RPM = {
    Finance: 0.12,
    Travel: 0.05,
    Health: 0.09,
    Legal: 0.12,
    Tech: 0.08,
    News: 0.06,
    Lifestyle: 0.04,
    Other: 0.05,
};

const LENGTH_MULT = { short: 0.75, medium: 1, long: 1.35 };

export default function ForPublishersPage() {
    const [views, setViews] = useState(250000);
    const [category, setCategory] = useState('Finance');
    const [length, setLength] = useState('medium');

    const { citations, revenue, share, vsAdsense } = useMemo(() => {
        const citationsPer1K = 16 * LENGTH_MULT[length];
        const cit = Math.round((views / 1000) * citationsPer1K);
        const rev = cit * CATEGORY_RPM[category];
        return {
            citations: cit,
            revenue: rev,
            share: rev * 0.7,
            vsAdsense: '2.3x',
        };
    }, [views, category, length]);

    const faqs = [
        { q: 'How is this different from AdSense?', a: 'AdSense pays you when readers visit your site and click ads. We pay you when AI reads your site and cites your content elsewhere. Different traffic, different payer, no overlap.' },
        { q: 'Will this slow down my site?', a: 'No. The tracker is under 4KB, loads async, and runs after page render. Lighthouse scores aren\'t affected.' },
        { q: 'Can I run this alongside AdSense, sponsorships, and affiliate links?', a: 'Yes. It\'s fully independent and adds zero on-page ad units.' },
        { q: 'How do you actually get AI companies to pay?', a: 'A mix of direct licensing deals (we have agreements with 6 major AI platforms) and per-pull billing for content access. We handle the negotiation; you get a check.' },
        { q: 'What if my content gets misrepresented by AI?', a: 'Every citation is validated against your original content. If an AI misquotes or misrepresents you, you can flag it from your dashboard — and we can block future citations.' },
        { q: 'When do I get paid?', a: 'Monthly, Net-30, once you cross $50 in earnings. After that, every month automatically.' },
        { q: 'Do I keep ownership of my content?', a: 'Always. We don\'t take any license, copyright, or republication rights. You own everything you publish — we just track what AI does with it.' },
    ];

    return (
        <>
            <PageHero
                headline="AI is reading your website."
                headlineHighlight="You're not getting paid."
                subhead='ChatGPT, Claude, and Perplexity scrape your content every day to answer user questions — and send zero traffic back. Vententit turns those AI citations into revenue. No banner ads. No popups. No design changes.'
                primaryCta={{ label: 'Apply for early access', href: '/contact' }}
                secondaryCta={{ label: 'See how it works', href: '#how' }}
            />
            <MetricStrip
                metrics={[
                    { label: 'Active publishers', value: '1,840' },
                    { label: 'Citations/mo', value: '24M' },
                    { label: 'Avg RPM (AI)', value: '$4.20' },
                    { label: 'Setup time', value: '8 min' },
                ]}
            />

            <section className='mx-auto max-w-3xl px-6 py-16'>
                <motion.h2 {...fadeInView} className="text-center text-3xl font-semibold text-slate-900 md:text-4xl">
                    The web's traffic model is broken.
                </motion.h2>
                <motion.div {...fadeInView} transition={{ duration: 0.7, delay: 0.1 }} className='mt-8 space-y-5 text-base leading-relaxed text-slate-700'>
                    <p>74% of websites — about 148 million — don't run Google AdSense. Many never qualified. Many refused to clutter their site with banner ads. Some lost AdSense and never came back.</p>
                    <p>Meanwhile, AI is quietly extracting value from every one of them. Traditional search traffic is down 25%. Zero-click queries — where the user gets the answer without ever visiting your site — are now 38% of all searches.</p>
                    <p className='font-medium text-slate-900'>Your content is more valuable than ever. The AI just isn't paying for it.</p>
                </motion.div>
            </section>

            <div id='how' />
            <FeatureGrid
                title='How it works'
                cards={[
                    { icon: Code2, title: 'Install the tracker', description: 'A single line of JavaScript on your site. It detects when AI bots (GPTBot, ClaudeBot, PerplexityBot, and 40+ others) crawl your content — and logs which pages they\'re pulling from.' },
                    { icon: Network, title: 'We follow the citations', description: 'When that crawled content appears in an AI response anywhere on the web, our citation graph attributes it back to your site. Every mention is logged, timestamped, and verified.' },
                    { icon: Wallet, title: 'You get paid', description: 'We bill AI companies and licensing partners for high-quality content access. You keep 70% of every cent your content earns. Monthly payouts via Stripe, ACH, or wire. Net-30, no minimums after the first $50.' },
                ]}
            />

            <MetricStrip
                metrics={[
                    { label: 'Finance blog', value: '$0.08 / cit' },
                    { label: 'Travel guide', value: '$0.05 / cit' },
                    { label: 'Legal advice', value: '$0.12 / cit' },
                    { label: 'Health content', value: '$0.09 / cit' },
                ]}
            />

            <section className='mx-auto max-w-6xl px-6 py-16'>
                <motion.div {...fadeInView} className='text-center'>
                    <h2 className='text-3xl font-semibold text-slate-900 md:text-4xl'>What you could be earning.</h2>
                    <p className='mx-auto mt-4 max-w-2xl text-slate-600'>
                        Most publishers see their first payout within 30 days of installing the tracker. Use the calculator to estimate yours.
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInView}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className='mt-10 grid grid-cols-1 gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10'
                >
                    <div className='space-y-6'>
                        <div>
                            <div className='flex items-baseline justify-between'>
                                <label className='text-sm font-medium text-slate-700'>Monthly pageviews</label>
                                <span className='text-sm font-semibold text-indigo-600'>{views.toLocaleString()}</span>
                            </div>
                            <input
                                type='range'
                                min={10000}
                                max={10000000}
                                step={10000}
                                value={views}
                                onChange={(e) => setViews(Number(e.target.value))}
                                className='mt-2 w-full accent-indigo-600'
                            />
                            <div className='mt-1 flex justify-between text-[11px] text-slate-400'>
                                <span>10K</span><span>10M</span>
                            </div>
                        </div>
                        <div>
                            <label className='mb-1.5 block text-sm font-medium text-slate-700'>Primary content category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
                            >
                                {Object.keys(CATEGORY_RPM).map((c) => <option key={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className='mb-1.5 block text-sm font-medium text-slate-700'>Avg article length</label>
                            <div className='grid grid-cols-3 gap-2'>
                                {['short', 'medium', 'long'].map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLength(l)}
                                        className={`rounded-xl border px-3 py-2.5 text-sm font-medium capitalize transition ${
                                            length === l
                                                ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
                                                : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                                        }`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='space-y-4 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-white p-6 ring-1 ring-indigo-100'>
                        <Stat label='Estimated AI citations / month' value={citations.toLocaleString()} />
                        <Stat label='Estimated monthly revenue' value={`$${revenue.toFixed(0)}`} />
                        <Stat label='Your share (70%)' value={`$${share.toFixed(0)}`} highlight />
                        <Stat label='Comparison to AdSense' value={`${vsAdsense} higher RPM`} />
                        <p className='pt-2 text-[11px] leading-relaxed text-slate-500'>
                            Estimates based on current publisher network averages. Actual earnings vary by content quality, citation frequency, and AI platform mix.
                        </p>
                        <a href='/contact' className='btn mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm text-white transition hover:opacity-90'>
                            Get your real number — Apply for early access <ArrowRightIcon className='size-4' />
                        </a>
                    </div>
                </motion.div>
            </section>

            <FeatureGrid
                title='Built for the websites AdSense forgot.'
                cards={[
                    { icon: FileText, title: 'Independent publishers', description: 'Bloggers, newsletter writers, and niche site owners whose audience is too small (or too discerning) for traditional display advertising.' },
                    { icon: Newspaper, title: 'Editorial sites', description: 'News, magazines, and trade publications that refuse to clutter their reading experience with banner ads, popups, and autoplay video.' },
                    { icon: BookOpen, title: 'Knowledge sites', description: 'Documentation, wikis, encyclopedias, recipe sites, how-to guides — the long-tail content AI loves to cite and rarely sends traffic back to.' },
                ]}
            />

            <section className='mx-auto max-w-3xl px-6 py-16'>
                <motion.h2 {...fadeInView} className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>
                    What this is — and what it isn't.
                </motion.h2>
                <motion.div {...fadeInView} transition={{ duration: 0.7, delay: 0.1 }} className='mt-8 space-y-5 text-base leading-relaxed text-slate-700'>
                    <p><span className='font-medium text-slate-900'>This is not advertising.</span> No banners are placed on your site. No popups, no autoplay video, no layout shift, no slow page loads. Your readers see exactly what they see today.</p>
                    <p><span className='font-medium text-slate-900'>This is not a scraper deal.</span> We don't take a license to your content or republish it. We track where it's already being cited and make sure AI companies pay for the access they're already taking.</p>
                    <p><span className='font-medium text-slate-900'>This is not exclusive.</span> Keep your AdSense, your sponsorships, your affiliate links, your paywall. The publisher network runs alongside everything else.</p>
                    <p><span className='font-medium text-slate-900'>What this is:</span> a new revenue line from a channel that didn't exist 18 months ago — paid by the companies extracting value from your site, not by your readers.</p>
                </motion.div>
            </section>

            <section className='mx-auto max-w-5xl px-6 py-12'>
                <motion.h2 {...fadeInView} className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>What we look for.</motion.h2>
                <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <motion.div {...fadeInView} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                        <div className='mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700'>
                            <Check className='size-4' /> We accept
                        </div>
                        <ul className='space-y-2.5 text-sm text-slate-700'>
                            {[
                                '10,000+ monthly pageviews (smaller sites: join our waitlist)',
                                'Original, written content — no scraped or auto-generated text',
                                'A clear topic or niche',
                                'HTTPS and a robots.txt',
                                '6+ months of publishing history',
                            ].map((i) => (
                                <li key={i} className='flex items-start gap-2'>
                                    <Check className='mt-0.5 size-4 shrink-0 text-emerald-600' />
                                    <span>{i}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div {...fadeInView} transition={{ duration: 0.7, delay: 0.1 }} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                        <div className='mb-3 flex items-center gap-2 text-sm font-semibold text-rose-700'>
                            <X className='size-4' /> We do not accept
                        </div>
                        <ul className='space-y-2.5 text-sm text-slate-700'>
                            {[
                                'Content farms or AI-spun text',
                                'Adult content',
                                'Hate speech, harassment, or extremist content',
                                'Sites with manual Google penalties',
                            ].map((i) => (
                                <li key={i} className='flex items-start gap-2'>
                                    <X className='mt-0.5 size-4 shrink-0 text-rose-500' />
                                    <span>{i}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            <section className='mx-auto max-w-3xl px-6 py-16'>
                <motion.h2 {...fadeInView} className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Common questions.</motion.h2>
                <div className='mt-10 space-y-3'>
                    {faqs.map((f, i) => <FAQItem key={f.q} item={f} index={i} />)}
                </div>
            </section>

            <BottomCTA
                headline='Stop giving your content away for free.'
                subhead='AI advertising is a $26B market by 2029. The publishers feeding it should get a cut. Apply for early access — most sites are approved in under 48 hours.'
                primaryCta={{ label: 'Apply for early access', href: '/contact' }}
                secondaryCta={{ label: 'Talk to a publisher partner', href: '/contact' }}
            />
        </>
    );
}

function Stat({ label, value, highlight }) {
    return (
        <div className='flex items-baseline justify-between border-b border-slate-200/60 pb-3 last:border-0'>
            <span className='text-sm text-slate-600'>{label}</span>
            <span className={`text-2xl font-semibold ${highlight ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' : 'text-slate-900'}`}>
                {value}
            </span>
        </div>
    );
}

function FAQItem({ item, index }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className='rounded-2xl border border-slate-200 bg-white shadow-sm'
        >
            <button
                onClick={() => setOpen((o) => !o)}
                className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left'
            >
                <span className='font-medium text-slate-900'>{item.q}</span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className='size-5 text-slate-500' />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className='overflow-hidden'
                    >
                        <p className='px-5 pb-5 text-sm leading-relaxed text-slate-600'>{item.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
