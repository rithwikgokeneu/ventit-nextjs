'use client';
import { Sparkles, Target, Zap } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export default function Page() {
    return (
        <ProductPage
            eyebrow='Context Engine'
            headline='Inject brand-verified facts into any'
            headlineHighlight='LLM response.'
            subhead='Submit your facts once. Our RAG pipeline retrieves the right one — at the right moment, in the right conversation — in under 50ms.'
            primaryCta={{ label: 'Start free', href: '/contact' }}
            secondaryCta={{ label: 'See it in action', href: '/contact' }}
            metrics={[
                { label: 'Retrieval latency', value: '47ms' },
                { label: 'Match precision', value: '89%' },
                { label: 'Brands indexed', value: '18K' },
                { label: 'LLMs supported', value: '11' },
            ]}
            cards={[
                { icon: Sparkles, title: 'Semantic retrieval', description: 'Hybrid vector + keyword search matches user intent to your brand facts based on meaning, not just keywords. No exact-match required.' },
                { icon: Target, title: 'Real-time ranking', description: 'Facts are scored on intent fit, recency, budget pacing, and brand safety — so the best fact wins the moment, every time.' },
                { icon: Zap, title: 'Zero prompt engineering', description: 'Drop the SDK in. We handle context injection automatically. No prompt rewrites, no model fine-tuning, no engineering lift.' },
            ]}
            bottom={{
                headline: 'See Context Engine in 90 seconds',
                subhead: 'Watch a live retrieval against your stack.',
                primaryCta: { label: 'Book a demo', href: '/contact' },
            }}
        />
    );
}
