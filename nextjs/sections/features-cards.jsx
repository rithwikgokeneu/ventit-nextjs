'use client';
import { Sparkles, BarChart3, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { GradientCard } from "@/components/ui/gradient-card";

export default function FeaturesCards() {
    const cards = [
        {
            title: "Context Engine",
            description:
                "Submit your brand facts once. Our RAG pipeline retrieves and injects them into LLM responses with sub-50ms latency — only when user intent matches. No prompt engineering, no model fine-tuning.",
            icon: Sparkles,
        },
        {
            title: "Multi-Touch Attribution",
            description:
                "Track every impression, click, and conversion across ChatGPT, Claude, and 1,000+ AI apps. First-touch, last-touch, linear, time-decay — see exactly which AI conversation drove the sale.",
            icon: BarChart3,
        },
        {
            title: "Hallucination Guard",
            description:
                "Every AI mention of your brand is validated for factual accuracy and sentiment before it reaches users. Auto-pause on misrepresentation. Your brand, your facts, your rules.",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="relative mb-20 pt-2 pb-8 px-6">
            <SectionTitle
                title="Built for the AI stack, designed for performance marketing."
                subtitle="Three core capabilities that turn AI conversations into a measurable, monetizable channel."
            />

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                {cards.map((card, i) => (
                    <GradientCard
                        key={i}
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                    />
                ))}
            </div>
        </section>
    );
}
