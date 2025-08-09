"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import bgNet from '~/assets/images/bg-net.svg';
import carr1 from '~/assets/images/carousel/carr-1-u.png';
import carr2 from '~/assets/images/carousel/carr-2-u.png';
import carr3 from '~/assets/images/carousel/carr-3-u.png';
import carr4 from '~/assets/images/carousel/carr-4-u.png';
import carr5 from '~/assets/images/carousel/carr-5-u.png';

const carouselData = [
    {
        id: 1,
        heading: "Powerful ",
        subheading: "Compliance Checking",
        description: "Powered by Computer Vision and our vetted compliance algorithms, Ulama scans your entire building to uncover code violations.",
        image: carr1
    },
    {
        id: 2,
        heading: "BYO ",
        subheading: "3D Modeling",
        description: "We offer a 1-button sync from Revit, Archichad, SketchUp, Rhino, and IFC file upload for seamless integration with your existing workflows.",
        image: carr2
    },
    {
        id: 3,
        heading: "Information to ",
        subheading: "Action",
        description: "For every code violation, we show you the actual code language and our plain English translation and give text and visual feedback so you can act quickly and decisively.",
        image: carr3
    },
    {
        id: 4,
        heading: "Supercharge ",
        subheading: "Team Collaboration",
        description: "Track your work with comments and threads, and tag team members to assign violation corrections. ",
        image: carr4
    },
    {
        id: 5,
        heading: "The Proof ",
        subheading: "is in the Pudding",
        description: "When you're ready to submit your designs for permit approval, our compliance report clearly communicates the compliance of your designs to reviewers.",
        image: carr5
    }
];

const FeatureCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showBottomBar, setShowBottomBar] = useState(false);
    const [scrollProgress, setScrollProgress] = useState<number[]>(Array(carouselData.length).fill(0));
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const mainSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const calculateScrollProgress = () => {
            if (!containerRef.current) return;

            const container = containerRef.current;
            const containerRect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the scroll progress for each section
            const newScrollProgress = sectionRefs.current.map((ref, index) => {
                if (!ref) return 0;

                const rect = ref.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionHeight = rect.height;
                const sectionCenter = sectionTop + (sectionHeight / 2);

                // Calculate how close this section is to the center of the viewport
                const viewportCenter = viewportHeight / 2;
                const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
                const maxDistance = viewportHeight / 2;

                // Create a "dead zone" where opacity stays at 1.0 for longer
                const deadZone = viewportHeight * 0.3; // 30% of viewport height stays at full opacity

                let opacity;
                if (distanceFromCenter <= deadZone) {
                    // Within dead zone - maintain full opacity
                    opacity = 1;
                } else {
                    // Outside dead zone - gradually fade
                    const adjustedDistance = distanceFromCenter - deadZone;
                    const adjustedMaxDistance = maxDistance - deadZone;
                    opacity = Math.max(0, 1 - (adjustedDistance / adjustedMaxDistance));
                    // Apply gentle curve for smooth transition
                    opacity = Math.pow(opacity, 0.6);
                }

                // Determine if this should be the active index
                if (sectionCenter >= viewportCenter - 100 && sectionCenter <= viewportCenter + 100) {
                    if (opacity > 0.7) {
                        setActiveIndex(index);
                    }
                }

                return opacity;
            });

            setScrollProgress(newScrollProgress);
        };

        // Observer for the main section to show/hide bottom bar
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setShowBottomBar(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50% 0px'
            }
        );

        // Add scroll listener for smooth opacity transitions
        const handleScroll = () => {
            requestAnimationFrame(calculateScrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        calculateScrollProgress(); // Initial calculation

        const currentMainSection = mainSectionRef.current;
        if (currentMainSection) {
            sectionObserver.observe(currentMainSection);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (currentMainSection) {
                sectionObserver.unobserve(currentMainSection);
            }
        };
    }, []);

    return (
        <>
            <section
                ref={mainSectionRef}
                id="features"
                className="relative bg-primary"
                style={{
                    backgroundImage: `url(${bgNet.src})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-primary/70"></div>

                {/* Mobile Layout - Keep existing behavior for mobile */}
                <div className="lg:hidden relative z-10 py-16 px-4 sm:px-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center text-center min-h-[600px] px-4">
                            <div className="w-full max-w-4xl mb-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        <h2 className="font-dm-sans text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
                                            {carouselData[activeIndex].heading}{' '}
                                            <span className="text-[#2DE1C2]">{carouselData[activeIndex].subheading}</span>
                                        </h2>

                                        <p className="text-lg sm:text-xl text-white/80 font-dm-sans leading-relaxed max-w-3xl mx-auto">
                                            {carouselData[activeIndex].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="w-full max-w-2xl mb-12">
                                <div className="relative h-[400px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: [0.4, 0, 0.2, 1],
                                                delay: 0.1
                                            }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={carouselData[activeIndex].image}
                                                alt={`${carouselData[activeIndex].heading} ${carouselData[activeIndex].subheading}`}
                                                fill
                                                className="object-contain rounded-2xl"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="w-64 h-[2px] bg-white rounded-full relative">
                                    <div
                                        className="bg-secondary h-[2px] w-12 rounded-full transition-all duration-500 ease-in-out absolute top-0"
                                        style={{
                                            transform: `translateX(${(activeIndex / (carouselData.length - 1)) * (256 - 48)}px)`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - New scroll-triggered layout */}
                <div className="hidden lg:flex" ref={containerRef}>
                    {/* Fixed Left Side - Text Content */}
                    <div className="w-1/2 sticky top-0 h-screen flex items-center">
                        <div className="relative z-10 w-full px-8 xl:px-16">
                            <div className="flex items-start gap-8">
                                {/* Progress Bar */}
                                <div className="relative">
                                    <div className="w-[2px] h-64 bg-white/30 rounded-full">
                                        <div
                                            className="bg-secondary w-[2px] h-12 rounded-full transition-all duration-500 ease-in-out"
                                            style={{
                                                transform: `translateY(${(activeIndex / (carouselData.length - 1)) * (256 - 48)}px)`
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 relative">
                                    {carouselData.map((item, index) => {
                                        const opacity = scrollProgress[index] || 0;
                                        const isActive = activeIndex === index;

                                        return (
                                            <motion.div
                                                key={item.id}
                                                className="absolute inset-0"
                                                animate={{
                                                    opacity: opacity,
                                                    y: isActive ? 0 : 20
                                                }}
                                                transition={{
                                                    opacity: { duration: 0.1, ease: "linear" },
                                                    y: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                                                }}
                                                style={{
                                                    pointerEvents: opacity > 0.5 ? 'auto' : 'none'
                                                }}
                                            >
                                                <h2 className="font-dm-sans text-5xl xl:text-6xl font-semibold text-white leading-tight">
                                                    {item.heading}{' '}
                                                    <span className="text-[#2DE1C2]">{item.subheading}</span>
                                                </h2>

                                                <p className="mt-8 text-xl text-white/80 font-dm-sans leading-relaxed max-w-2xl">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Right Side - Images */}
                    <div className="w-1/2 relative">
                        {carouselData.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => {
                                    sectionRefs.current[index] = el;
                                }}
                                className="h-screen flex items-center justify-center px-8 xl:px-16"
                            >
                                <motion.div
                                    className="relative w-full h-[500px] xl:h-[600px]"
                                    animate={{
                                        opacity: Math.max(0.3, scrollProgress[index] || 0.3),
                                        scale: activeIndex === index ? 1 : 0.95 + (scrollProgress[index] || 0) * 0.05
                                    }}
                                    transition={{
                                        opacity: { duration: 0.1, ease: "linear" },
                                        scale: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={`${item.heading} ${item.subheading}`}
                                        fill
                                        className="object-contain rounded-2xl"
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fixed bottom progress bar */}
            <div className=" bottom-0 left-0 right-0 h-5 bg-secondary z-50  transition-opacity duration-300"

            ></div>
        </>
    );
};

export default FeatureCarousel; 