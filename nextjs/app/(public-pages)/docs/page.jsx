'use client';
import Link from 'next/link';
import { Rocket, BookOpen, Code2 } from 'lucide-react';
import { PageHero, MetricStrip, BottomCTA, FeatureGrid } from '@/components/page-blocks';

export default function DocsPage() {
    const metrics = [
        { label: 'Time to first call', value: '4 min' },
        { label: 'SDKs available', value: '2' },
        { label: 'Code samples', value: '80+' },
        { label: 'Avg integration', value: '22 min' },
    ];

    const cards = [
        { icon: Rocket, title: 'Quickstart guides', description: 'Get your first sponsored response in under 5 minutes. Step-by-step walkthroughs for Python, JavaScript, and direct REST API.', cta: { label: 'Start building' } },
        { icon: BookOpen, title: 'API reference', description: 'Complete endpoint documentation with request/response schemas, error codes, rate limits, and live "try it" examples for every route.', cta: { label: 'View reference' } },
        { icon: Code2, title: 'Integration recipes', description: 'Drop-in patterns for LangChain, LlamaIndex, OpenAI Assistants API, Anthropic SDK, Vercel AI SDK, and custom chat stacks.', cta: { label: 'Browse recipes' } },
    ];

    const sections = [
        {
            heading: 'Getting started',
            items: ['Introduction to Vententit', 'How Sponsored RAG works', 'Account setup & API keys', 'First request in 5 minutes'],
        },
        {
            heading: 'Core concepts',
            items: ['Brand facts: structure & approval', 'Intent matching & retrieval', 'Attribution models explained', 'Hallucination Guard'],
        },
        {
            heading: 'SDKs',
            items: ['Python SDK installation & usage', 'JavaScript / TypeScript SDK', 'REST API direct integration', 'Server-side vs. client-side patterns'],
        },
        {
            heading: 'API reference',
            items: [
                'Authentication',
                'POST /v1/context — retrieve sponsored facts',
                'POST /v1/facts — submit brand fact',
                'GET /v1/analytics — campaign metrics',
                'GET /track/i/{ad_id} — impression pixel',
                'GET /track/c/{ad_id} — click tracking',
                'Webhooks & event streaming',
            ],
        },
        {
            heading: 'Guides',
            items: [
                'Setting up multi-touch attribution',
                'Integrating with LangChain',
                'Integrating with OpenAI Assistants',
                'Publisher network: tracking AI citations',
                'Brand safety & sensitive content rules',
            ],
        },
        {
            heading: 'Operations',
            items: ['Rate limits & quotas', 'Error handling & retries', 'Latency optimization', 'Data residency & compliance', 'Migrating from ChatGPT Ads'],
        },
    ];

    return (
        <>
            <PageHero
                headline='Build with'
                headlineHighlight='Vententit.'
                subhead='Everything you need to integrate sponsored context, attribution tracking, and validation into your AI app — in under 30 minutes.'
                primaryCta={{ label: 'Quickstart', href: '#getting-started' }}
                secondaryCta={{ label: 'Full API reference', href: '#api-reference' }}
            />
            <MetricStrip metrics={metrics} />
            <FeatureGrid cards={cards} />

            <section className='mx-auto max-w-6xl px-6 py-12'>
                <h2 className='mb-10 text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Documentation index</h2>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    {sections.map((s) => (
                        <div key={s.heading} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
                            <h3 className='mb-3 text-lg font-semibold text-slate-900'>{s.heading}</h3>
                            <ul className='space-y-2'>
                                {s.items.map((i) => (
                                    <li key={i}>
                                        <Link href='#' className='block rounded-md px-2 py-1 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700'>
                                            {i}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <BottomCTA
                headline='Stuck on something?'
                subhead='Join 1,200+ developers in our Discord, or open an issue on GitHub. We respond fast.'
                primaryCta={{ label: 'Join Discord', href: '#' }}
                secondaryCta={{ label: 'GitHub', href: '#' }}
            />
        </>
    );
}
