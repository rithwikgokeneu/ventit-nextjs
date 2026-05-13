'use client';
/**
 * <AdUniverseBackground />
 * Ambient floating ad-creative cards drifting in 3D parallax behind hero content.
 *
 * Usage:
 *   Place inside a `relative` container (e.g. a hero section).
 *   <section className="relative h-svh">
 *     <AdUniverseBackground />
 *     {hero content...}
 *   </section>
 *
 * Defaults to `absolute inset-0 -z-10`. Pass `className` to override layout.
 *
 * Adding new ad types:
 *   1. Build a small JSX component (~180-280px wide) for the card.
 *   2. Register it in the CARD_RENDERERS map.
 *   3. Add an entry to CARDS with { type, depth, top, dir, dur, delay, rot }.
 *
 * Notes:
 *   - Animations use CSS transforms (translate3d) for GPU compositing.
 *   - Outer wrapper handles X drift (drift-r / drift-l keyframes).
 *   - Inner wrapper handles Y bob + ±rotation (separate animations on
 *     `translate` and `rotate` properties → no transform conflict).
 *   - prefers-reduced-motion pauses all motion.
 *   - Cards tagged depth=far/mid hide on mobile to reduce visual noise.
 */

import {
    Heart, MessageCircle, Send, Bookmark, Music, Play, BellRing,
    BarChart3, MoreHorizontal, Mail, ShoppingBag, Repeat2, Verified,
    TrendingUp,
} from 'lucide-react';

// --- ad card components ---

const Avatar = ({ from = 'from-pink-300', to = 'to-orange-300' }) => (
    <div className={`size-6 rounded-full bg-gradient-to-br ${from} ${to} shrink-0`} />
);

const InstagramPost = () => (
    <div className="w-[190px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2">
            <Avatar from="from-fuchsia-400" to="to-orange-300" />
            <span className="text-[11px] font-semibold text-slate-800">summerco</span>
            <MoreHorizontal className="size-3 text-slate-400 ml-auto" />
        </div>
        <div className="h-24 bg-gradient-to-br from-orange-200 via-pink-200 to-fuchsia-200" />
        <div className="px-3 py-2">
            <div className="flex items-center gap-3 text-slate-700">
                <Heart className="size-4" />
                <MessageCircle className="size-4" />
                <Send className="size-4" />
                <Bookmark className="size-4 ml-auto" />
            </div>
            <p className="text-[10px] text-slate-600 mt-1.5 leading-snug">
                Summer collection just dropped link in bio
            </p>
        </div>
    </div>
);

const GoogleAd = () => (
    <div className="w-[230px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-3">
        <div className="inline-block text-[9px] font-bold text-slate-700 border border-slate-300 px-1 rounded mb-1.5">
            Sponsored
        </div>
        <div className="flex items-center gap-2 mb-1">
            <div className="size-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
            <div className="text-[10px] text-slate-700">runfast.com</div>
        </div>
        <div className="text-[13px] font-medium text-blue-700 leading-tight">
            Best Running Shoes 2026 — Free Shipping
        </div>
        <div className="text-[10px] text-slate-600 mt-1 leading-snug">
            Shop top-rated runners. Free shipping over $50. 30-day returns.
        </div>
    </div>
);

const BannerAd = () => (
    <div className="w-[290px] rounded-2xl overflow-hidden shadow-xl shadow-indigo-900/10 border border-slate-200">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-4 py-3 flex items-center justify-between">
            <div>
                <div className="text-[9px] font-semibold text-white/70 uppercase tracking-wider">Limited time</div>
                <div className="text-sm font-bold text-white leading-tight">50% off summer sale</div>
            </div>
            <button className="bg-white text-indigo-700 text-[11px] font-semibold px-3 py-1.5 rounded-full shrink-0">
                Shop Now
            </button>
        </div>
    </div>
);

const EmailPreview = () => (
    <div className="w-[250px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-3">
        <div className="flex items-center gap-2 mb-2">
            <Mail className="size-3.5 text-indigo-500" />
            <span className="text-[10px] font-medium text-slate-500">Inbox · Promotions</span>
        </div>
        <div className="flex items-start gap-2">
            <div className="size-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
            <div className="min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-800">Acme Studio</span>
                    <span className="text-[9px] text-slate-400 ml-auto">2m</span>
                </div>
                <div className="text-[11px] font-medium text-slate-700 mt-0.5">Your weekly campaign report</div>
                <div className="text-[10px] text-slate-500 mt-0.5 leading-snug truncate">
                    Open rate jumped 18% — your subject lines are working
                </div>
            </div>
        </div>
    </div>
);

const YouTubeThumb = () => (
    <div className="w-[220px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center">
            <div className="size-9 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="size-4 text-slate-900 fill-slate-900 ml-0.5" />
            </div>
            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] px-1 py-0.5 rounded">12:34</div>
        </div>
        <div className="p-2.5">
            <div className="text-[11px] font-semibold text-slate-800 leading-tight">
                I doubled our ad ROAS in 30 days
            </div>
            <div className="text-[9px] text-slate-500 mt-1">Marketing Lab · 1.2M views</div>
        </div>
    </div>
);

const TikTokCard = () => (
    <div className="w-[140px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl shadow-slate-900/10 relative bg-gradient-to-b from-pink-400 via-fuchsia-500 to-purple-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute top-2 left-2 right-2 flex items-center gap-1.5 text-white">
            <div className="size-5 rounded-full border border-white bg-gradient-to-br from-yellow-300 to-pink-400" />
            <span className="text-[9px] font-semibold drop-shadow">@brand.lab</span>
        </div>
        <div className="absolute bottom-2 right-2 flex flex-col items-center gap-2 text-white">
            <Heart className="size-4 fill-white" />
            <span className="text-[9px] font-semibold">12K</span>
            <MessageCircle className="size-4" />
            <span className="text-[9px] font-semibold">234</span>
        </div>
        <div className="absolute bottom-2 left-2 right-10 text-white">
            <div className="flex items-center gap-1 text-[9px] opacity-90">
                <Music className="size-2.5" />
                <span className="truncate">Original sound · viral cut</span>
            </div>
        </div>
    </div>
);

const Billboard = () => (
    <div className="w-[320px]">
        <div className="rounded-2xl bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 px-5 py-4 shadow-2xl shadow-amber-500/20 border border-amber-200">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">Highway 101</div>
            <div className="text-base font-extrabold text-white leading-tight mt-0.5">
                Drink less. Live more.
            </div>
            <div className="text-[10px] text-white/80 mt-1">acme.co</div>
        </div>
        <div className="flex justify-center gap-12 mt-1">
            <div className="w-[3px] h-5 bg-slate-400/60 rounded-b-sm" />
            <div className="w-[3px] h-5 bg-slate-400/60 rounded-b-sm" />
        </div>
    </div>
);

const PushNotification = () => (
    <div className="w-[260px] rounded-2xl bg-white/95 backdrop-blur border border-slate-200 shadow-xl shadow-slate-900/5 p-3 flex items-start gap-2.5">
        <div className="size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
            <BellRing className="size-4 text-white" />
        </div>
        <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-slate-700">Pulse</span>
                <span className="text-[9px] text-slate-400 ml-auto">now</span>
            </div>
            <div className="text-[11px] font-semibold text-slate-900 leading-tight mt-0.5">
                Your ad just hit 100K impressions
            </div>
            <div className="text-[10px] text-slate-500 leading-snug">CTR is up 8% from last week.</div>
        </div>
    </div>
);

const TwitterPost = () => (
    <div className="w-[240px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-3">
        <div className="flex items-center gap-2">
            <Avatar from="from-sky-400" to="to-indigo-500" />
            <div className="leading-tight">
                <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-slate-800">growthhacker</span>
                    <Verified className="size-3 text-sky-500 fill-sky-500" />
                </div>
                <div className="text-[9px] text-slate-500">@gh · 4h</div>
            </div>
        </div>
        <p className="text-[11px] text-slate-700 mt-2 leading-snug">
            unpopular take: the best growth lever is a clear value prop. fancy ads can't fix vague positioning.
        </p>
        <div className="flex items-center gap-4 text-slate-500 mt-2">
            <div className="flex items-center gap-1"><MessageCircle className="size-3" /><span className="text-[9px]">42</span></div>
            <div className="flex items-center gap-1"><Repeat2 className="size-3" /><span className="text-[9px]">128</span></div>
            <div className="flex items-center gap-1"><Heart className="size-3" /><span className="text-[9px]">1.2K</span></div>
        </div>
    </div>
);

const AnalyticsChart = () => (
    <div className="w-[200px] rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/5 p-3">
        <div className="flex items-center justify-between">
            <div>
                <div className="text-[10px] text-slate-500">Revenue</div>
                <div className="text-base font-bold text-slate-900">$24,812</div>
            </div>
            <div className="flex items-center gap-0.5 text-emerald-600 text-[10px] font-semibold">
                <TrendingUp className="size-3" />
                +34%
            </div>
        </div>
        <svg viewBox="0 0 200 50" className="w-full h-10 mt-2">
            <defs>
                <linearGradient id="auFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0,40 L25,38 L50,30 L75,32 L100,22 L125,18 L150,14 L175,8 L200,6 L200,50 L0,50 Z" fill="url(#auFill)" />
            <path d="M0,40 L25,38 L50,30 L75,32 L100,22 L125,18 L150,14 L175,8 L200,6" fill="none" stroke="rgb(99 102 241)" strokeWidth="1.5" />
        </svg>
    </div>
);

const CARD_RENDERERS = {
    instagram: InstagramPost,
    google: GoogleAd,
    banner: BannerAd,
    email: EmailPreview,
    youtube: YouTubeThumb,
    tiktok: TikTokCard,
    billboard: Billboard,
    push: PushNotification,
    twitter: TwitterPost,
    chart: AnalyticsChart,
};

// --- card config: depth (far/mid/near), top%, direction, duration(s), delay(s), base rotation(deg) ---
const CARDS = [
    { type: 'instagram', depth: 'near', top: '6%',  dir: 'r', dur: 55, delay: -10, rot: -2 },
    { type: 'google',    depth: 'mid',  top: '20%', dir: 'l', dur: 65, delay: -25, rot:  1, mobile: false },
    { type: 'twitter',   depth: 'near', top: '32%', dir: 'r', dur: 52, delay: -8,  rot: -1 },
    { type: 'banner',    depth: 'far',  top: '40%', dir: 'r', dur: 80, delay: -5,  rot: -1, mobile: false },
    { type: 'email',     depth: 'near', top: '50%', dir: 'l', dur: 50, delay: -20, rot:  2 },
    { type: 'push',      depth: 'mid',  top: '46%', dir: 'r', dur: 58, delay: -40, rot:  1, mobile: false },
    { type: 'youtube',   depth: 'mid',  top: '64%', dir: 'r', dur: 60, delay: -35, rot: -2, mobile: false },
    { type: 'tiktok',    depth: 'near', top: '74%', dir: 'l', dur: 45, delay: -15, rot:  1 },
    { type: 'billboard', depth: 'far',  top: '12%', dir: 'l', dur: 75, delay: -30, rot:  0, mobile: false },
    { type: 'chart',     depth: 'mid',  top: '70%', dir: 'l', dur: 62, delay: -28, rot:  2, mobile: false },
    { type: 'instagram', depth: 'far',  top: '58%', dir: 'r', dur: 78, delay: -50, rot:  1, mobile: false },
    { type: 'youtube',   depth: 'far',  top: '24%', dir: 'l', dur: 70, delay: -42, rot: -1, mobile: false },
];

const DEPTH_STYLES = {
    near: { scale: 1,    blur: 0, opacity: 0.7 },
    mid:  { scale: 0.85, blur: 1, opacity: 0.5 },
    far:  { scale: 0.65, blur: 2, opacity: 0.3 },
};

export const AdUniverseBackground = ({ className = '' }) => {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute top-0 left-0 right-0 h-[55%] -z-10 overflow-hidden ${className}`}
        >
            {/* vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 30%, rgba(255,255,255,0.7) 90%)',
                }}
            />

            {/* card field */}
            <div className="absolute inset-0" style={{ opacity: 0.85 }}>
                {CARDS.map((card, i) => {
                    const Renderer = CARD_RENDERERS[card.type];
                    if (!Renderer) return null;
                    const depth = DEPTH_STYLES[card.depth];
                    const driftAnim = card.dir === 'r' ? 'ad-drift-r' : 'ad-drift-l';
                    const mobileHidden = card.mobile === false;

                    return (
                        <div
                            key={i}
                            className={`ad-drift absolute left-0 ${mobileHidden ? 'hidden md:block' : ''}`}
                            style={{
                                top: card.top,
                                animation: `${driftAnim} ${card.dur}s linear infinite`,
                                animationDelay: `${card.delay}s`,
                                willChange: 'transform',
                            }}
                        >
                            <div
                                className="ad-bob-spin"
                                style={{
                                    '--rot-base': `${card.rot}deg`,
                                    '--rot-amp': `${card.rot >= 0 ? 3 : -3}deg`,
                                    animation: `ad-bob ${6 + (i % 4)}s ease-in-out infinite, ad-spin ${10 + (i % 5) * 2}s ease-in-out infinite`,
                                    animationDelay: `${(i % 3) * -2}s, ${(i % 4) * -1.5}s`,
                                    opacity: depth.opacity,
                                    filter: depth.blur ? `blur(${depth.blur}px)` : undefined,
                                    transform: `scale(${depth.scale})`,
                                    willChange: 'transform, translate, rotate',
                                }}
                            >
                                <Renderer />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* foreground readability blur layer */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/20" />
        </div>
    );
};

export default AdUniverseBackground;
