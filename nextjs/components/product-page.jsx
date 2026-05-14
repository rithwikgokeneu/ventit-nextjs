import { PageHero, MetricStrip, FeatureGrid, BottomCTA } from '@/components/page-blocks';

export function ProductPage({ eyebrow, headline, headlineHighlight, subhead, primaryCta, secondaryCta, metrics, cards, bottom }) {
    return (
        <>
            <PageHero
                eyebrow={eyebrow}
                headline={headline}
                headlineHighlight={headlineHighlight}
                subhead={subhead}
                primaryCta={primaryCta}
                secondaryCta={secondaryCta}
            />
            <MetricStrip metrics={metrics} />
            <FeatureGrid cards={cards} />
            <BottomCTA {...bottom} />
        </>
    );
}
