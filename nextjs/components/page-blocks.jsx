'use client';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const fadeUpInView = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export function PageHero({ eyebrow, headline, headlineHighlight, subhead, primaryCta, secondaryCta }) {
    return (
        <section className='relative flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:pt-36 md:pb-20'>
            <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className='absolute inset-x-0 -top-32 -z-10 mx-auto h-[600px] max-w-5xl bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-pink-200/30 blur-3xl'
            />
            {eyebrow && (
                <motion.span {...fadeUp} className='mb-4 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/70 px-3 py-1 text-xs font-medium text-indigo-700'>
                    {eyebrow}
                </motion.span>
            )}
            <motion.h1
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className='max-w-4xl bg-gradient-to-r from-black to-[#748298] bg-clip-text text-center text-4xl font-semibold text-transparent md:text-6xl/[1.1]'
            >
                {headline}
                {headlineHighlight && (
                    <>
                        {' '}
                        <span className='bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent'>
                            {headlineHighlight}
                        </span>
                    </>
                )}
            </motion.h1>
            {subhead && (
                <motion.p
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className='mt-5 max-w-2xl text-center text-slate-600 md:text-base'
                >
                    {subhead}
                </motion.p>
            )}
            {(primaryCta || secondaryCta) && (
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className='mt-8 flex flex-col items-center gap-3 sm:flex-row'
                >
                    {primaryCta && (
                        <Link
                            href={primaryCta.href || '#'}
                            className='btn flex items-center gap-2 rounded-full px-8 py-3 text-white transition hover:opacity-90'
                        >
                            <span>{primaryCta.label}</span>
                            <ArrowRightIcon className='size-5' />
                        </Link>
                    )}
                    {secondaryCta && (
                        <Link
                            href={secondaryCta.href || '#'}
                            className='flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-8 py-3 text-slate-800 backdrop-blur transition hover:border-slate-400'
                        >
                            <span>{secondaryCta.label}</span>
                        </Link>
                    )}
                </motion.div>
            )}
        </section>
    );
}

export function MetricStrip({ metrics }) {
    return (
        <section className='mx-auto -mt-4 mb-12 grid w-full max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4'>
            {metrics.map((m, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
                    className='flex flex-col items-center justify-center bg-white px-4 py-6 text-center'
                >
                    <span className='text-xs font-medium uppercase tracking-wider text-slate-500'>{m.label}</span>
                    <span className='mt-1 text-2xl font-semibold text-slate-900'>{m.value}</span>
                </motion.div>
            ))}
        </section>
    );
}

export function BottomCTA({ headline, subhead, primaryCta, secondaryCta }) {
    return (
        <motion.section
            {...fadeUpInView}
            className='mx-auto my-24 max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/60 px-6 py-14 text-center shadow-sm md:px-12'
        >
            <h2 className='bg-gradient-to-r from-black to-[#748298] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl'>
                {headline}
            </h2>
            {subhead && <p className='mx-auto mt-4 max-w-2xl text-slate-600'>{subhead}</p>}
            <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                {primaryCta && (
                    <Link
                        href={primaryCta.href || '#'}
                        className='btn flex items-center gap-2 rounded-full px-7 py-3 text-white transition hover:opacity-90'
                    >
                        <span>{primaryCta.label}</span>
                        <ArrowRightIcon className='size-4' />
                    </Link>
                )}
                {secondaryCta && (
                    <Link
                        href={secondaryCta.href || '#'}
                        className='rounded-full border border-slate-300 bg-white px-7 py-3 text-slate-800 transition hover:border-slate-400'
                    >
                        {secondaryCta.label}
                    </Link>
                )}
            </div>
        </motion.section>
    );
}

export function FeatureGrid({ title, subtitle, cards }) {
    return (
        <section className='mx-auto max-w-7xl px-6 py-12'>
            {title && (
                <motion.div {...fadeUpInView} className='flex flex-col items-center justify-center'>
                    <h3 className='text-center text-[28px] font-semibold md:text-[32px]'>{title}</h3>
                    {subtitle && <p className='mt-3 max-w-2xl text-center text-gray-500'>{subtitle}</p>}
                </motion.div>
            )}
            <div className='mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {cards.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -6 }}
                        className='group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md'
                    >
                        {c.tag && (
                            <span className='mb-3 inline-flex w-max items-center rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-700'>
                                {c.tag}
                            </span>
                        )}
                        {c.icon && (
                            <div className='mb-5 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500'>
                                <c.icon className='size-5 text-white' strokeWidth={1.75} />
                            </div>
                        )}
                        <h4 className='text-lg font-semibold text-slate-900'>{c.title}</h4>
                        <p className='mt-2 flex-1 text-sm leading-relaxed text-slate-600'>{c.description}</p>
                        {c.cta && (
                            <Link href={c.cta.href || '#'} className='mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-700'>
                                {c.cta.label} →
                            </Link>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
