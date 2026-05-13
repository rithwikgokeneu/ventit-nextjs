'use client';
import { Sparkles, BarChart3, Zap } from "lucide-react";
import SectionTitle from "@/components/section-title";
import { GradientCard } from "@/components/ui/gradient-card";

export default function FeaturesCards() {
    const cards = [
        {
            title: "AI-Powered Inbox Sorting",
            description:
                "OpenMail revolutionizes email management with AI-driven sorting, boosting productivity and accessibility.",
            icon: Sparkles,
        },
        {
            title: "Real-time Analytics",
            description:
                "Track performance, conversions, and audience insights as they happen with a beautifully unified dashboard.",
            icon: BarChart3,
        },
        {
            title: "Smart Automation Workflows",
            description:
                "Automate repetitive tasks across tools with prebuilt flows that adapt to your team's exact way of working.",
            icon: Zap,
        },
    ];

    return (
        <section className="relative mb-20 py-8 px-6">
            <SectionTitle
                title="Built for builders, made for scale"
                subtitle="Three flagship capabilities that turn an idea into a live product without slowing you down."
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
