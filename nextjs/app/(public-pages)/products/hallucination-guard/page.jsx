'use client';
import { ShieldCheck, Gauge, ClipboardList } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export default function Page() {
    return (
        <ProductPage
            eyebrow='Hallucination Guard'
            headline='Your brand, exactly'
            headlineHighlight='as you defined it.'
            subhead='Every AI mention of your brand is validated for factual accuracy and sentiment before it reaches users. Misrepresentation auto-pauses the campaign — no surprises, no PR risk.'
            primaryCta={{ label: 'Start free', href: '/contact' }}
            secondaryCta={{ label: 'Watch a live validation', href: '#' }}
            metrics={[
                { label: 'Similarity threshold', value: '75%' },
                { label: 'False-positive rate', value: '1.8%' },
                { label: 'Auto-pause time', value: '<500ms' },
                { label: 'Brands protected', value: '320' },
            ]}
            cards={[
                { icon: ShieldCheck, title: 'Semantic similarity check', description: 'Every generated mention is compared against your approved facts. Drift beyond the threshold? The impression is blocked before it serves.' },
                { icon: Gauge, title: 'Sentiment scoring', description: 'Negative or off-brand framing is flagged in real time. Protect your brand from contexts that misrepresent — even when the facts are right.' },
                { icon: ClipboardList, title: 'Audit trail', description: 'Every served, blocked, and flagged impression is logged with full conversation context. Export anytime for compliance or QA review.' },
            ]}
            bottom={{
                headline: 'Protect your brand inside AI',
                subhead: 'A 30-minute review with our brand-safety team.',
                primaryCta: { label: 'Book a brand-safety review', href: '/contact' },
            }}
        />
    );
}
