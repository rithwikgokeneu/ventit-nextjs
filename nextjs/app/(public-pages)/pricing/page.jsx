'use client';
import Link from 'next/link';
import { Check, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero, MetricStrip, BottomCTA } from '@/components/page-blocks';

export default function PricingPage() {
    const metrics = [
        { label: 'Avg setup time', value: '22 min' },
        { label: 'Free tier impressions', value: '10K/mo' },
        { label: 'Min spend', value: '$0' },
        { label: 'Platform fee', value: '15%' },
    ];

    const tiers = [
        {
            name: 'Starter',
            price: '$0',
            period: '/ month',
            description: 'For developers and indie builders testing the platform.',
            features: [
                'Up to 10,000 sponsored impressions/month',
                '1 brand or 1 app',
                'Basic attribution (impression + click)',
                'Python or JavaScript SDK',
                'Community support',
                'Vententit branding on responses',
            ],
            cta: 'Start free',
        },
        {
            name: 'Growth',
            badge: 'Most popular',
            price: '$2,000',
            period: '/ month + 15% of ad spend',
            description: 'For performance marketing teams scaling AI as a channel.',
            features: [
                'Up to 1M sponsored impressions/month',
                'Unlimited brands, unlimited campaigns',
                'Multi-touch attribution (5 models)',
                'Hallucination Guard included',
                'Real-time dashboard + API access',
                'Email & Slack support',
                'White-label option',
            ],
            cta: 'Start 14-day trial',
            featured: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: 'pricing',
            description: 'For agencies, holdcos, and brands spending $50K+/month.',
            features: [
                'Unlimited impressions',
                'Dedicated account manager',
                'Custom attribution models',
                'SLA: 99.95% uptime, <50ms p50',
                'SOC 2, GDPR, CCPA compliance',
                'Custom data residency',
                'Quarterly business reviews',
            ],
            cta: 'Talk to sales',
        },
    ];

    const devRows = [
        { label: 'Revenue share', values: ['70%', '75%', 'Negotiable'] },
        { label: 'Payout threshold', values: ['$100', '$50', 'Net-30 invoicing'] },
        { label: 'Apps', values: ['1', 'Unlimited', 'Unlimited'] },
        { label: 'Custom integrations', values: ['—', '✓', '✓'] },
    ];

    return (
        <>
            <PageHero
                headline='Pricing that scales with your spend,'
                headlineHighlight='not your team size.'
                subhead='Start free. Pay only when AI conversations drive real outcomes. No setup fees, no annual contracts, no surprise platform tax.'
            />
            <MetricStrip metrics={metrics} />

            <section className='mx-auto max-w-7xl px-6 pb-8'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                    {tiers.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6 }}
                            className={`flex flex-col rounded-3xl border p-8 shadow-sm transition ${
                                t.featured
                                    ? 'border-indigo-300 bg-gradient-to-br from-indigo-50/60 to-white ring-2 ring-indigo-200'
                                    : 'border-slate-200 bg-white'
                            }`}
                        >
                            <div className='flex items-center justify-between'>
                                <h3 className='text-xl font-semibold text-slate-900'>{t.name}</h3>
                                {t.badge && (
                                    <span className='rounded-full bg-indigo-600 px-2.5 py-1 text-[11px] font-medium text-white'>
                                        {t.badge}
                                    </span>
                                )}
                            </div>
                            <div className='mt-4 flex items-baseline gap-1'>
                                <span className='text-4xl font-semibold text-slate-900'>{t.price}</span>
                                <span className='text-sm text-slate-500'>{t.period}</span>
                            </div>
                            <p className='mt-3 text-sm text-slate-600'>{t.description}</p>
                            <ul className='mt-6 flex-1 space-y-3'>
                                {t.features.map((f) => (
                                    <li key={f} className='flex items-start gap-2 text-sm text-slate-700'>
                                        <Check className='mt-0.5 size-4 shrink-0 text-indigo-600' />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href='/contact'
                                className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                                    t.featured
                                        ? 'btn text-white hover:opacity-90'
                                        : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400'
                                }`}
                            >
                                {t.cta} <ArrowRightIcon className='size-4' />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className='mx-auto mt-20 max-w-6xl px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className='text-center'
                >
                    <h3 className='text-3xl font-semibold text-slate-900 md:text-4xl'>
                        For AI app developers — earn revenue from day one.
                    </h3>
                    <p className='mx-auto mt-4 max-w-2xl text-slate-600'>
                        Integrate the SDK, keep 70% of every sponsored impression your app serves. No minimums, no exclusivity, no platform lock-in.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className='mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'
                >
                    <table className='w-full text-left text-sm'>
                        <thead className='border-b border-slate-200 bg-slate-50'>
                            <tr>
                                <th className='px-6 py-4 font-medium text-slate-700'></th>
                                <th className='px-6 py-4 font-medium text-slate-700'>Standard</th>
                                <th className='px-6 py-4 font-medium text-indigo-700'>Pro</th>
                                <th className='px-6 py-4 font-medium text-slate-700'>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devRows.map((r) => (
                                <tr key={r.label} className='border-b border-slate-100 last:border-0'>
                                    <td className='px-6 py-4 font-medium text-slate-900'>{r.label}</td>
                                    {r.values.map((v, j) => (
                                        <td key={j} className={`px-6 py-4 ${j === 1 ? 'bg-indigo-50/40 font-medium text-indigo-700' : 'text-slate-700'}`}>
                                            {v}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <div className='mt-8 flex justify-center'>
                    <Link href='/contact' className='btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-white transition hover:opacity-90'>
                        Join the developer program <ArrowRightIcon className='size-4' />
                    </Link>
                </div>
            </section>

            <BottomCTA
                headline='Not sure which plan fits?'
                subhead="Tell us about your stack and goals. We'll recommend the right tier and walk you through a live demo."
                primaryCta={{ label: 'Book a 20-minute call', href: '/contact' }}
            />
        </>
    );
}

