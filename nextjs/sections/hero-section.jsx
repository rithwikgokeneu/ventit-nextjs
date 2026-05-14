'use client';
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center relative min-h-[78svh] pt-10 pb-4 overflow-hidden">
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

            <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[32%] sm:h-[34%] md:h-[36%] -z-[5] pointer-events-none overflow-hidden">
                {/* CTR pill */}
                <div
                    className="absolute top-[15%] left-[4%] sm:left-[8%] bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 opacity-80"
                    style={{ animationName: 'float-bob', animationDuration: '6s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '0.5s' }}
                >
                    <div className="size-7 rounded-lg bg-orange-100 flex items-center justify-center">
                        <svg className="size-4 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 11-6 6v3h9l3-3" />
                            <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[9px] text-gray-500 font-medium leading-tight">CTR</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">8.4%</div>
                    </div>
                </div>

                {/* ROI card */}
                <div
                    className="hidden sm:flex absolute top-[55%] left-[18%] bg-white rounded-xl shadow-xl px-3 py-2 items-center gap-2 opacity-80"
                    style={{ animationName: 'drift', animationDuration: '8s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '1.5s' }}
                >
                    <div className="size-7 rounded-lg bg-green-100 flex items-center justify-center">
                        <svg className="size-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[9px] text-gray-500 font-medium leading-tight">ROI</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">+342%</div>
                    </div>
                </div>

                {/* Conversions card */}
                <div
                    className="hidden md:flex absolute top-[12%] left-[32%] bg-white rounded-xl shadow-xl px-3 py-2 items-center gap-2 opacity-80"
                    style={{ animationName: 'sway', animationDuration: '9s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '2.2s' }}
                >
                    <div className="size-7 rounded-lg bg-purple-100 flex items-center justify-center">
                        <svg className="size-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[9px] text-gray-500 font-medium leading-tight">Conversions</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">+24%</div>
                    </div>
                </div>

                {/* Revenue card */}
                <div
                    className="hidden md:flex absolute top-[55%] right-[20%] bg-white rounded-xl shadow-xl px-3 py-2 items-center gap-2 opacity-80"
                    style={{ animationName: 'drift-slow', animationDuration: '10s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '2.5s' }}
                >
                    <div className="size-7 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <svg className="size-4 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[9px] text-gray-500 font-medium leading-tight">Revenue</div>
                        <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">$24.8K</div>
                    </div>
                </div>

                {/* Likes pill */}
                <div
                    className="absolute top-[8%] right-[6%] sm:right-[12%] bg-white/90 backdrop-blur rounded-xl shadow-lg px-3 py-1.5 flex items-center gap-2 opacity-80"
                    style={{ animationName: 'drift', animationDuration: '7s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '0.8s' }}
                >
                    <div className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">12.4K likes</span>
                </div>

                {/* Email/Open rate pill */}
                <div
                    className="absolute top-[60%] left-[5%] sm:top-[20%] sm:left-auto sm:right-[6%] bg-white/90 backdrop-blur rounded-xl shadow-lg px-3 py-1.5 flex items-center gap-2 opacity-80"
                    style={{ animationName: 'sway', animationDuration: '8s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '2s' }}
                >
                    <svg className="size-3.5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-10 5L2 7" />
                    </svg>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Open 42%</span>
                </div>

                {/* Star rating pill */}
                <div
                    className="hidden sm:flex absolute top-[60%] right-[5%] bg-white/90 backdrop-blur rounded-xl shadow-lg px-3 py-1.5 items-center gap-1.5 opacity-80"
                    style={{ animationName: 'float-bob', animationDuration: '7s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '1.8s' }}
                >
                    <svg className="size-3.5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">4.9</span>
                </div>

                {/* Reach mini chart */}
                <div
                    className="hidden lg:flex absolute top-[18%] right-[28%] bg-white rounded-xl shadow-xl p-2.5 flex-col gap-1.5 opacity-80"
                    style={{ animationName: 'drift', animationDuration: '11s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite', animationDelay: '1.2s' }}
                >
                    <div className="text-[9px] text-gray-500 font-medium">Reach</div>
                    <div className="flex items-end gap-1 h-6">
                        <div className="w-1 h-2 bg-indigo-300 rounded-sm" />
                        <div className="w-1 h-4 bg-indigo-400 rounded-sm" />
                        <div className="w-1 h-3 bg-indigo-400 rounded-sm" />
                        <div className="w-1 h-5 bg-indigo-500 rounded-sm" />
                        <div className="w-1 h-4 bg-indigo-500 rounded-sm" />
                        <div className="w-1 h-6 bg-indigo-600 rounded-sm" />
                    </div>
                    <div className="text-[11px] font-bold text-gray-900 leading-tight">1.2M</div>
                </div>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-6xl/18 text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text">
                Advertising for the{" "}
                <span className="bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent">AI era</span>.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-slate-600 md:text-base max-md:px-2 text-center max-w-2xl mt-4">
                Vententit injects brand-verified facts into LLM responses at inference time — with attribution that actually works. Reach customers inside ChatGPT, Claude, and every AI app, with proof of every conversion.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center gap-3 mt-8"
            >
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 btn hover:opacity-90 text-white px-8 py-3 rounded-full transition">
                    <span>Get started for free</span>
                    <ArrowRightIcon className='size-5' />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 border border-slate-300 hover:border-slate-400 bg-white/60 backdrop-blur text-slate-800 px-8 py-3 rounded-full transition">
                    <span>Book a demo</span>
                </motion.button>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="py-6 text-slate-600 mt-14 text-sm text-center px-4">
                Currently in private beta with 12 launch partners.{" "}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-700 transition">Request access →</a>
            </motion.p>
        </section >
    );
}