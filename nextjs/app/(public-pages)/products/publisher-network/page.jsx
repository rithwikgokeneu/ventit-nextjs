'use client';
import { Globe, DollarSign, Layout } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export default function Page() {
    return (
        <ProductPage
            eyebrow='Publisher Network'
            headline='Get paid when AI'
            headlineHighlight='cites your content.'
            subhead='AI is reading your site to answer user questions — and sending zero traffic back. Vententit tracks every citation and turns it into revenue. No banner ads, no popups, no design changes.'
            primaryCta={{ label: 'Apply for early access', href: '/contact' }}
            secondaryCta={{ label: 'How citation tracking works', href: '/docs' }}
            metrics={[
                { label: 'Active publishers', value: '1,840' },
                { label: 'Citations/mo', value: '24M' },
                { label: 'Avg RPM (AI)', value: '$4.20' },
                { label: 'Payout', value: 'Net-30' },
            ]}
            cards={[
                { icon: Globe, title: 'Citation tracking', description: 'A lightweight script detects when AI bots scrape your content and logs every citation downstream — in ChatGPT, Claude, Perplexity, and more.' },
                { icon: DollarSign, title: 'Per-citation payouts', description: 'We bill AI companies for high-quality content access. You get 70% of every cent your content earns. Monthly statements, transparent reporting.' },
                { icon: Layout, title: 'No ads, no clutter', description: 'Your site stays clean. No banners, no popups, no layout shift. The monetization happens entirely off-site, in the AI responses.' },
            ]}
            bottom={{
                headline: 'Stop giving away your content for free',
                subhead: 'Start earning from every AI citation today.',
                primaryCta: { label: 'Join the network', href: '/contact' },
            }}
        />
    );
}
