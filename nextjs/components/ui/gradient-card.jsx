'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const GradientCard = ({
    title = "AI-Powered Inbox Sorting",
    description = "OpenMail revolutionizes email management with AI-driven sorting, boosting productivity and accessibility",
    icon: Icon = Star,
    href = "#",
}) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setRotation({ x: -(y / rect.height) * 5, y: (x / rect.width) * 5 });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative rounded-[32px] overflow-hidden"
            style={{
                width: "360px",
                height: "450px",
                transformStyle: "preserve-3d",
                backgroundColor: "#FFFFFF",
                boxShadow:
                    "0 30px 60px -20px rgba(99, 102, 241, 0.18), 0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.06)",
            }}
            initial={{ y: 0 }}
            animate={{
                y: isHovered ? -6 : 0,
                rotateX: rotation.x,
                rotateY: rotation.y,
                perspective: 1000,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            {/* cream gradient base */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FDFEF5 55%, #F8FBE9 100%)",
                }}
                animate={{ z: -1 }}
            />

            {/* glass reflection */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.4) 100%)",
                }}
                animate={{
                    opacity: isHovered ? 0.9 : 0.7,
                    rotateX: -rotation.x * 0.2,
                    rotateY: -rotation.y * 0.2,
                    z: 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* subtle indigo bottom radial glow */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
                style={{
                    background: `
                        radial-gradient(ellipse at bottom right, rgba(138, 125, 255, 0.35) -10%, rgba(255, 255, 255, 0) 70%),
                        radial-gradient(ellipse at bottom left, rgba(248, 251, 233, 0.9) -10%, rgba(255, 255, 255, 0) 70%)
                    `,
                    filter: "blur(40px)",
                }}
                animate={{
                    opacity: isHovered ? 0.95 : 0.8,
                    y: isHovered ? rotation.x * 0.5 : 0,
                    z: 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* central indigo glow */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
                style={{
                    background:
                        "radial-gradient(circle at bottom center, rgba(99, 102, 241, 0.35) -20%, rgba(255, 255, 255, 0) 60%)",
                    filter: "blur(45px)",
                }}
                animate={{
                    opacity: isHovered ? 0.85 : 0.7,
                    y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
                    z: 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* bottom border glow */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.6) 50%, rgba(99, 102, 241, 0) 100%)",
                }}
                animate={{
                    boxShadow: isHovered
                        ? "0 0 20px 4px rgba(99, 102, 241, 0.45), 0 0 30px 6px rgba(138, 125, 255, 0.3)"
                        : "0 0 14px 3px rgba(99, 102, 241, 0.3), 0 0 22px 5px rgba(138, 125, 255, 0.18)",
                    opacity: isHovered ? 1 : 0.8,
                    z: 0.5,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* card content */}
            <motion.div
                className="relative flex flex-col h-full p-8 z-40"
                animate={{ z: 2 }}
            >
                {/* icon circle — indigo to match site btn */}
                <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{
                        background:
                            "linear-gradient(225deg, #6366F1 0%, #8A7DFF 100%)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                    initial={{ filter: "blur(3px)", opacity: 0.8 }}
                    animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        boxShadow: isHovered
                            ? "0 10px 24px -4px rgba(99, 102, 241, 0.5), inset 1px 1px 3px rgba(255, 255, 255, 0.3)"
                            : "0 6px 16px -4px rgba(99, 102, 241, 0.35), inset 1px 1px 2px rgba(255, 255, 255, 0.2)",
                        z: isHovered ? 10 : 5,
                        y: isHovered ? -2 : 0,
                        rotateX: isHovered ? -rotation.x * 0.5 : 0,
                        rotateY: isHovered ? -rotation.y * 0.5 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div
                        className="absolute top-0 left-0 w-2/3 h-2/3 opacity-50"
                        style={{
                            background:
                                "radial-gradient(circle at top left, rgba(255, 255, 255, 0.6), transparent 80%)",
                            pointerEvents: "none",
                            filter: "blur(8px)",
                        }}
                    />
                    <div className="flex items-center justify-center w-full h-full relative z-10">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                </motion.div>

                <motion.div
                    className="mb-auto"
                    animate={{
                        z: isHovered ? 5 : 2,
                        rotateX: isHovered ? -rotation.x * 0.3 : 0,
                        rotateY: isHovered ? -rotation.y * 0.3 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.h3
                        className="text-2xl font-medium text-slate-900 mb-3"
                        style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}
                        initial={{ filter: "blur(3px)", opacity: 0.7 }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                            transition: { duration: 1.2, delay: 0.2 },
                        }}
                    >
                        {title}
                    </motion.h3>

                    <motion.p
                        className="text-sm mb-6 text-slate-600"
                        style={{ lineHeight: 1.5, fontWeight: 400 }}
                        initial={{ filter: "blur(3px)", opacity: 0.6 }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 0.9,
                            transition: { duration: 1.2, delay: 0.4 },
                        }}
                    >
                        {description}
                    </motion.p>

                    <motion.a
                        href={href}
                        className="inline-flex items-center text-slate-900 text-sm font-medium group"
                        initial={{ filter: "blur(3px)", opacity: 0.7 }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                            transition: { duration: 1.2, delay: 0.6 },
                        }}
                        whileHover={{
                            filter: "drop-shadow(0 0 6px rgba(99, 102, 241, 0.4))",
                        }}
                    >
                        Learn More
                        <motion.svg
                            className="ml-1 w-4 h-4"
                            width="8"
                            height="8"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <path
                                d="M1 8H15M15 8L8 1M15 8L8 15"
                                stroke="#0f172a"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
