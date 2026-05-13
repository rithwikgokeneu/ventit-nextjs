import { ArrowRightIcon } from "lucide-react";
import AdUniverseBackground from "@/components/ui/ad-universe-background";

export default function HeroSectionAdUniverse() {
    const logos = [
        { type: 'img', src: '/companies-logo/instagram.svg', alt: 'Instagram' },
        { type: 'img', src: '/companies-logo/framer.svg', alt: 'Framer' },
        { type: 'img', src: '/companies-logo/microsoft.svg', alt: 'Microsoft' },
        { type: 'img', src: '/companies-logo/huawei.svg', alt: 'Huawei' },
        { type: 'img', src: '/companies-logo/walmart.svg', alt: 'Walmart' },
        { type: 'text', name: 'Google', className: 'font-medium text-2xl tracking-tight' },
        { type: 'text', name: 'amazon', className: 'font-bold text-2xl tracking-tight lowercase' },
        { type: 'text', name: 'Netflix', className: 'font-bold text-xl tracking-widest uppercase' },
        { type: 'text', name: 'Spotify', className: 'font-bold text-2xl tracking-tight' },
        { type: 'text', name: 'Slack', className: 'font-bold text-2xl italic tracking-tight' },
        { type: 'text', name: 'Adobe', className: 'font-bold text-2xl tracking-tight' },
        { type: 'text', name: 'Shopify', className: 'font-semibold text-2xl tracking-tight' },
        { type: 'text', name: 'Stripe', className: 'font-bold text-2xl italic tracking-tight' },
    ];

    return (
        <section className="flex flex-col items-center justify-center relative h-svh overflow-hidden">
            <svg className="absolute inset-0 -z-10" width="1440" height="1018" viewBox="0 0 1440 1018" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#a)">
                    <ellipse cx="271.282" cy="200.379" rx="271.282" ry="200.379" fill="#FBFFE1" />
                </g>
                <g filter="url(#b)">
                    <ellipse cx="993.487" cy="451.53" rx="359.487" ry="265.53" fill="url(#c)" fillOpacity=".1" />
                </g>
                <defs>
                    <filter id="a" x="-300" y="-300" width="1142.56" height="1000.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_8119_961" />
                    </filter>
                    <filter id="b" x="333.9" y="-114.1" width="1319.18" height="1131.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150.05" result="effect1_foregroundBlur_8119_961" />
                        <feTurbulence type="fractalNoise" baseFrequency="inf inf" stitchTiles="stitch" numOctaves="3" result="noise" seed="9943" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="effect1_foregroundBlur_8119_961" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect2_noise_8119_961">
                            <feMergeNode in="effect1_foregroundBlur_8119_961" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                    <linearGradient id="c" x1="550.41" y1="500.394" x2="1343.15" y2="82.986" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F6DFF4" />
                        <stop offset=".196" stopColor="#FF6E00" />
                        <stop offset=".407" stopColor="#F8C04D" />
                        <stop offset=".586" stopColor="#EF3EC2" />
                        <stop offset=".816" stopColor="#4700EC" />
                        <stop offset=".949" stopColor="#5100BA" />
                    </linearGradient>
                </defs>
            </svg>

            <AdUniverseBackground />

            <h1
                className="text-4xl md:text-6xl/18 text-center font-semibold max-w-2xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
                Build, Launch & Scale with{" "}
                <span className="bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent">PrebuiltUI</span>.
            </h1>
            <p className="text-slate-600 md:text-base max-md:px-2 text-center max-w-lg mt-3">
                A high-performance, serverless Postgres database that helps you ship fast and scale without limits.
            </p>

            <button
                className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 mt-8 rounded-full transition">
                <span>get started for free</span>
                <ArrowRightIcon className='size-5' />
            </button>

            <p className="py-6 text-slate-600 mt-14">Trusting by leading brands, including —</p>

            <div
                className="group relative w-full max-w-5xl mx-auto py-4 overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                <div
                    className="flex w-max gap-14 group-hover:[animation-play-state:paused]"
                    style={{
                        animation: 'marquee 35s linear infinite',
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex shrink-0 items-center justify-center h-7 text-slate-500/80">
                            {logo.type === 'img' ? (
                                <img src={logo.src} alt={logo.alt} className="h-7 w-auto max-w-xs" />
                            ) : (
                                <span className={logo.className}>{logo.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}