'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, Megaphone, MapPin } from 'lucide-react';
import { PageHero, MetricStrip, FeatureGrid } from '@/components/page-blocks';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', company: '', role: 'Advertiser', message: '' });
    const [sent, setSent] = useState(false);

    return (
        <>
            <PageHero
                headline="Let's"
                headlineHighlight='talk.'
                subhead="Whether you're an advertiser, a developer, a publisher, or just curious — we read every message and respond fast."
            />
            <MetricStrip
                metrics={[
                    { label: 'Avg response time', value: '4 hrs' },
                    { label: 'Support hours', value: '24/7' },
                    { label: 'Languages', value: '6' },
                    { label: 'Cities', value: 'DEN · NYC · BLR' },
                ]}
            />
            <FeatureGrid
                cards={[
                    { icon: Briefcase, title: 'Sales', description: 'Talking to brands, agencies, and holdcos about advertising on the platform.', cta: { label: 'sales@vententit.com', href: 'mailto:sales@vententit.com' } },
                    { icon: Code2, title: 'Developers', description: 'SDK help, API questions, integration support, partnership requests.', cta: { label: 'developers@vententit.com', href: 'mailto:developers@vententit.com' } },
                    { icon: Megaphone, title: 'Press & general', description: 'Media inquiries, partnership ideas, anything else.', cta: { label: 'hello@vententit.com', href: 'mailto:hello@vententit.com' } },
                ]}
            />

            <section className='mx-auto max-w-3xl px-6 py-12'>
                <h2 className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Or just send a message.</h2>
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                    className='mt-8 space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10'
                >
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <Field label='Name' value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                        <Field label='Work email' type='email' value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                    </div>
                    <Field label='Company' value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                    <div>
                        <label className='mb-1.5 block text-sm font-medium text-slate-700'>I'm a</label>
                        <select
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
                        >
                            <option>Advertiser</option><option>Developer</option><option>Publisher</option><option>Press</option><option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className='mb-1.5 block text-sm font-medium text-slate-700'>Message</label>
                        <textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            rows={5}
                            className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
                        />
                    </div>
                    <button
                        type='submit'
                        className='btn w-full rounded-full px-6 py-3 font-medium text-white transition hover:opacity-90 active:scale-[0.99]'
                    >
                        {sent ? 'Sent ✓' : 'Submit'}
                    </button>
                </motion.form>
            </section>

            <section className='mx-auto max-w-6xl px-6 py-16'>
                <h2 className='text-center text-3xl font-semibold text-slate-900 md:text-4xl'>Office locations</h2>
                <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {[
                        { city: 'Denver, Colorado', tag: 'HQ', addr: ['1801 California St, Suite 2400', 'Denver, CO 80202'] },
                        { city: 'New York, NY', tag: 'Coming Q3 2026', addr: [] },
                        { city: 'Bangalore, India', tag: 'Coming Q4 2026', addr: [] },
                    ].map((o, i) => (
                        <motion.div
                            key={o.city}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
                        >
                            <MapPin className='size-5 text-indigo-600' />
                            <div className='mt-3 flex items-center gap-2'>
                                <h3 className='font-semibold text-slate-900'>{o.city}</h3>
                                <span className='rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600'>{o.tag}</span>
                            </div>
                            {o.addr.length > 0 && (
                                <div className='mt-2 text-sm text-slate-600'>
                                    {o.addr.map((l) => <div key={l}>{l}</div>)}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}

function Field({ label, value, onChange, type = 'text' }) {
    return (
        <div>
            <label className='mb-1.5 block text-sm font-medium text-slate-700'>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100'
            />
        </div>
    );
}
