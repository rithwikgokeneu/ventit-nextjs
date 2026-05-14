import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PageHero, MetricStrip, BottomCTA, FeatureGrid } from '@/components/page-blocks';

export const metadata = {
    title: 'Stories · Vententit',
    description: 'How performance marketers, AI developers, and publishers are using Vententit to turn LLM conversations into measurable revenue.',
};

export default function StoriesPage() {
    const metrics = [
        { label: 'Case Studies', value: '24' },
        { label: 'Customer Stories', value: '47' },
        { label: 'Avg ROAS lift', value: '4.8x' },
        { label: 'Industries covered', value: '12' },
    ];

    const stories = [
        {
            tag: 'E-commerce',
            title: 'Why a DTC skincare brand moved 30% of its Meta budget to AI conversations',
            description: 'Brez reallocated spend after seeing 5.2x ROAS in ChatGPT context windows. Here\'s the breakdown.',
            cta: { label: 'Read story' },
        },
        {
            tag: 'Developer Story',
            title: 'Building a travel chatbot that earns $14K/month from sponsored context',
            description: 'Indie developer Alex shipped his Llama-powered travel app with Vententit\'s SDK in 22 minutes. Six months later, he quit his job.',
            cta: { label: 'Read story' },
        },
        {
            tag: 'Publisher Network',
            title: 'How a finance blog earns more from AI citations than from AdSense',
            description: 'After AI search killed 40% of its traffic, Wealthify joined Vententit\'s publisher network — and now monetizes the citations directly.',
            cta: { label: 'Read story' },
        },
        {
            tag: 'Attribution',
            title: 'The hidden 67% of AI conversions Google Analytics can\'t see',
            description: 'Why traditional attribution misses most LLM-driven conversions, and how multi-touch tracking exposes the real funnel.',
            cta: { label: 'Read story' },
        },
        {
            tag: 'Commercial Real Estate',
            title: '$2.4M in closed deals from a single AI advertising quarter',
            description: 'A commercial brokerage tested Vententit against LinkedIn Ads. The result reshaped their entire 2026 media plan.',
            cta: { label: 'Read story' },
        },
        {
            tag: 'Education',
            title: 'A coding bootcamp\'s path to a $182 CAC inside Claude conversations',
            description: 'How CodePath validated their AI ad funnel in 30 days and scaled to $40K/mo spend.',
            cta: { label: 'Read story' },
        },
    ];

    return (
        <>
            <PageHero
                headline='Stories from teams building the future of'
                headlineHighlight='AI advertising.'
                subhead='How performance marketers, AI developers, and publishers are using Vententit to turn LLM conversations into measurable revenue.'
                primaryCta={{ label: 'Read latest story', href: '#featured' }}
                secondaryCta={{ label: 'Submit your story', href: '/contact' }}
            />
            <MetricStrip metrics={metrics} />

            <section id='featured' className='mx-auto max-w-6xl px-6 pb-4'>
                <div className='overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50/60 to-white shadow-sm'>
                    <div className='grid gap-8 p-8 md:grid-cols-5 md:p-12'>
                        <div className='md:col-span-3'>
                            <span className='inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700'>
                                B2B SaaS · Attribution
                            </span>
                            <h2 className='mt-4 text-3xl font-semibold text-slate-900 md:text-4xl'>
                                How Lattice cut CPA by 62% by reaching buyers inside ChatGPT.
                            </h2>
                            <p className='mt-4 text-slate-600'>
                                Lattice's performance team was spending $180 per qualified lead on Google. By submitting brand facts to Vententit and reaching users mid-conversation in ChatGPT, they dropped CPA to $68 — while uncovering an audience that never clicked search ads.
                            </p>
                            <Link href='#' className='mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700'>
                                Read the full story <ArrowRightIcon className='size-4' />
                            </Link>
                        </div>
                        <div className='flex items-center justify-center md:col-span-2'>
                            <div className='grid w-full grid-cols-2 gap-3'>
                                <div className='rounded-2xl border border-slate-200 bg-white p-5'>
                                    <div className='text-xs uppercase tracking-wider text-slate-500'>Old CPA</div>
                                    <div className='mt-1 text-2xl font-semibold text-slate-400 line-through'>$180</div>
                                </div>
                                <div className='rounded-2xl border border-indigo-200 bg-indigo-50 p-5'>
                                    <div className='text-xs uppercase tracking-wider text-indigo-700'>New CPA</div>
                                    <div className='mt-1 text-2xl font-semibold text-indigo-700'>$68</div>
                                </div>
                                <div className='col-span-2 rounded-2xl border border-slate-200 bg-white p-5'>
                                    <div className='text-xs uppercase tracking-wider text-slate-500'>CPA reduction</div>
                                    <div className='mt-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-semibold text-transparent'>−62%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FeatureGrid cards={stories} />

            <BottomCTA
                headline='Have a story worth telling?'
                subhead="We're documenting how teams are pioneering AI advertising. If you're running campaigns, building integrations, or monetizing as a publisher — let's talk."
                primaryCta={{ label: 'Share your story', href: '/contact' }}
            />
        </>
    );
}
