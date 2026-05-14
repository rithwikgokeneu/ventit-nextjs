'use client';
import { Code2, FileCode2, Server } from 'lucide-react';
import { ProductPage } from '@/components/product-page';

export default function Page() {
    return (
        <ProductPage
            eyebrow='SDK & API'
            headline='Drop-in monetization for'
            headlineHighlight='any AI app.'
            subhead='Two lines of code. 22-minute median integration. Earn 70% of every sponsored impression your app serves — across any LLM you ship.'
            primaryCta={{ label: 'Read the quickstart', href: '/docs' }}
            secondaryCta={{ label: 'View on GitHub', href: '#' }}
            metrics={[
                { label: 'Median integration', value: '22 min' },
                { label: 'SDKs', value: 'Python + JS' },
                { label: 'Revenue share', value: '70%' },
                { label: 'Min payout', value: '$100' },
            ]}
            cards={[
                { icon: Code2, title: 'Python SDK', description: 'pip install vententit — that\'s it. Async-native, type-hinted, works with LangChain, LlamaIndex, and the OpenAI / Anthropic SDKs out of the box.' },
                { icon: FileCode2, title: 'JavaScript / TypeScript', description: 'npm install vententit — full TypeScript types, works in Node, edge runtimes (Vercel, Cloudflare Workers), and the browser.' },
                { icon: Server, title: 'REST API', description: 'No SDK? No problem. A single POST request returns ranked sponsored facts for any user query. Sub-50ms p50, multi-region.' },
            ]}
            bottom={{
                headline: 'Ship your first sponsored response today',
                subhead: 'Get an API key and a working sample in under 5 minutes.',
                primaryCta: { label: 'Get an API key', href: '/contact' },
            }}
        />
    );
}
