'use client';
import { BarChart3, Layers, Webhook } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export default function Page() {
    return (
        <ProductPage
            eyebrow='Attribution Suite'
            headline='Finally, attribution that works for'
            headlineHighlight='AI conversations.'
            subhead='Track every impression, click, and conversion across every LLM. Five attribution models, one unified dashboard, zero black boxes.'
            primaryCta={{ label: 'Start free', href: '/contact' }}
            secondaryCta={{ label: 'Sample dashboard', href: '#' }}
            metrics={[
                { label: 'Attribution accuracy', value: '94%' },
                { label: 'Models supported', value: '5' },
                { label: 'Attribution window', value: '30 days' },
                { label: 'Events/sec', value: '50K' },
            ]}
            cards={[
                { icon: Layers, title: 'Multi-touch models', description: 'First-touch, last-touch, linear, time-decay, U-shaped — switch models in one click. Compare side-by-side, find what fits your funnel.' },
                { icon: BarChart3, title: 'Cross-platform tracking', description: 'One pixel, every AI surface. Track conversions whether the user came from ChatGPT, Claude, Perplexity, or a custom chatbot.' },
                { icon: Webhook, title: 'Conversion API', description: 'Server-side event ingestion for high-fidelity tracking that survives iOS, ad blockers, and the death of third-party cookies.' },
            ]}
            bottom={{
                headline: 'See the attribution gap closing',
                subhead: 'Free audit of your current AI ad spend vs. measured conversions.',
                primaryCta: { label: 'Get a free audit', href: '/contact' },
            }}
        />
    );
}
