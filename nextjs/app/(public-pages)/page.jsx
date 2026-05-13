import FeaturesCards from '@/sections/features-cards';
import HeroSection from '@/sections/hero-section';
import Newsletter from '@/sections/newsletter';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <FeaturesCards />
            <Newsletter />
        </main>
    );
}
