'use client';
import Link from 'next/link';
import { Wrench, TrendingUp, Globe2, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero, MetricStrip, BottomCTA, FeatureGrid } from '@/components/page-blocks';

export default function CareersPage() {
    const roleGroups = [
        {
            heading: 'Engineering',
            roles: [
                { title: 'Senior Backend Engineer (Python, FastAPI)', loc: 'Remote', salary: '$180K–$240K + equity' },
                { title: 'ML Engineer, Retrieval Systems', loc: 'Remote', salary: '$190K–$260K + equity' },
                { title: 'Frontend Engineer (Next.js, TypeScript)', loc: 'Remote', salary: '$160K–$220K + equity' },
                { title: 'Site Reliability Engineer', loc: 'Remote', salary: '$170K–$230K + equity' },
            ],
        },
        {
            heading: 'Go-to-market',
            roles: [
                { title: 'Founding Account Executive (Performance Brands)', loc: 'Denver/NYC', salary: '$180K OTE + equity' },
                { title: 'Developer Advocate', loc: 'Remote', salary: '$150K–$200K + equity' },
                { title: 'Customer Success Lead', loc: 'Remote', salary: '$140K–$180K + equity' },
            ],
        },
        {
            heading: 'Operations',
            roles: [
                { title: 'Ad Operations Manager', loc: 'Remote', salary: '$130K–$170K + equity' },
                { title: 'Head of Trust & Safety', loc: 'Remote', salary: '$200K–$260K + equity' },
            ],
        },
    ];

    return (
        <>
            <PageHero
                headline='Build the future of'
                headlineHighlight='AI advertising with us.'
                subhead="We're 14 people working on infrastructure that will outlast the current AI hype cycle. If you want to ship hard problems for a market that's still being defined, we want to talk."
                primaryCta={{ label: 'See open roles', href: '#roles' }}
            />
            <MetricStrip
                metrics={[
                    { label: 'Open roles', value: '9' },
                    { label: 'Remote-first', value: 'Yes' },
                    { label: 'Avg interview', value: '12 days' },
                    { label: 'Equity range', value: '0.05–1.5%' },
                ]}
            />
            <FeatureGrid
                title='Why join Vententit'
                cards={[
                    { icon: Wrench, title: 'Real problems, no theater.', description: "We don't ship for press releases. Every line of code, every campaign, every customer call is in service of a real metric. Builders thrive here." },
                    { icon: TrendingUp, title: 'Owners, not employees.', description: 'Every full-time hire gets equity. Significant equity. The people building this company should own a meaningful piece of it.' },
                    { icon: Globe2, title: 'Remote, async, deliberate.', description: 'Three hubs (Denver, NYC, Bangalore), but you can work from anywhere. We over-document so meetings are rare and ownership is high.' },
                ]}
            />

            <section id='roles' className='mx-auto max-w-5xl px-6 py-16'>
                <h2 className='mb-10 text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Open roles</h2>
                <div className='space-y-10'>
                    {roleGroups.map((g) => (
                        <div key={g.heading}>
                            <h3 className='mb-4 text-lg font-semibold text-slate-900'>{g.heading}</h3>
                            <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
                                {g.roles.map((r, i) => (
                                    <motion.div
                                        key={r.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className='group flex flex-col gap-2 border-b border-slate-100 px-5 py-4 transition last:border-0 hover:bg-indigo-50/40 md:flex-row md:items-center md:justify-between'
                                    >
                                        <div>
                                            <div className='font-medium text-slate-900'>{r.title}</div>
                                            <div className='text-sm text-slate-500'>{r.loc} · {r.salary}</div>
                                        </div>
                                        <Link href='/contact' className='inline-flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-80 transition group-hover:opacity-100'>
                                            Apply <ArrowRightIcon className='size-4' />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <BottomCTA
                headline="Don't see your role?"
                subhead="If you're exceptional and you see the opportunity here, we'll find a way to work together. Send us a note."
                primaryCta={{ label: 'Email founders@vententit.com', href: 'mailto:founders@vententit.com' }}
            />
        </>
    );
}
