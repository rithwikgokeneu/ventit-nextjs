'use client';
import { Scale, BookOpenCheck, Globe2 } from 'lucide-react';
import { PageHero, MetricStrip, BottomCTA, FeatureGrid } from '@/components/page-blocks';

export default function AboutPage() {
    return (
        <>
            <PageHero
                headline='Building the advertising'
                headlineHighlight='layer for AI.'
                subhead="The web's economic model is breaking. AI conversations are replacing search, but advertisers can't measure them and publishers aren't being paid. Vententit is the infrastructure that fixes both."
            />
            <MetricStrip
                metrics={[
                    { label: 'Founded', value: '2025' },
                    { label: 'Team', value: '14' },
                    { label: 'Backers', value: '9' },
                    { label: 'Cities', value: '3' },
                ]}
            />
            <FeatureGrid
                title='What we believe'
                cards={[
                    { icon: Scale, title: 'Attribution should be honest.', description: 'The "black box" era of ad reporting is over. Advertisers deserve to see exactly which AI conversation drove which conversion — with the math shown.' },
                    { icon: BookOpenCheck, title: 'Publishers deserve to be paid.', description: "If your content is good enough for AI to learn from, it's good enough to pay for. Open access to knowledge shouldn't mean unpaid access." },
                    { icon: Globe2, title: 'Open beats walled gardens.', description: 'We work with every LLM, every chat framework, every AI stack. The next ad ecosystem should be open by default — not owned by one platform.' },
                ]}
            />

            <section className='mx-auto max-w-3xl px-6 py-16'>
                <h2 className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Why we started Vententit.</h2>
                <div className='mt-8 space-y-5 text-base leading-relaxed text-slate-700'>
                    <p>In early 2026, ChatGPT launched ads and hit $100M in run-rate within weeks. Advertisers showed up. Attribution didn't. Performance teams were buying impressions blind, publishers were watching AI scrape their sites for free, and developers building AI apps had no way to monetize.</p>
                    <p>We saw the same pattern everywhere: the AI-native ad stack hadn't been built yet, and the companies that should have built it were too busy losing $14 billion a year on compute.</p>
                    <p>So we started building it.</p>
                    <p>Vententit is the infrastructure that connects three sides of this market: advertisers who need to reach buyers inside AI conversations, publishers whose content is feeding those conversations, and developers shipping the next generation of AI apps. One platform, full attribution, transparent economics.</p>
                    <p>We think the next decade of advertising will run on rails like these. We're building those rails.</p>
                </div>
            </section>

            <BottomCTA
                headline='Want to help build it?'
                subhead="We're hiring engineers, ad ops leads, and developer relations across 3 cities."
                primaryCta={{ label: 'See open roles', href: '/careers' }}
            />
        </>
    );
}
