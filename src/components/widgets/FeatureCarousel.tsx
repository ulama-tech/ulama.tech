"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    const [currentPanel, setCurrentPanel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPanel((prev) => (prev + 1) % carouselData.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToPanel = (index: number) => {
        setCurrentPanel(index);
    };

    return (<>
        <section id="features" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-primary ">
            <div className="absolute inset-0 opacity-30">
                <Image
                    src={bgNet}
                    alt="Background pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Mobile Layout - Centered */}
                <div className="flex flex-col items-center text-center min-h-[600px] px-4 lg:hidden">
                    <div className="w-full max-w-4xl mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPanel}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.4, 0, 0.2, 1]
                                }}
                            >
                                <h2 className="font-dm-sans text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
                                    {carouselData[currentPanel].heading}{' '}
                                    <span className="text-[#2DE1C2]">{carouselData[currentPanel].subheading}</span>
                                </h2>

                                <p className="text-lg sm:text-xl text-white/80 font-dm-sans leading-relaxed max-w-3xl mx-auto">
                                    {carouselData[currentPanel].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="w-full max-w-2xl mb-12">
                        <div className="relative h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPanel}
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
                                        src={carouselData[currentPanel].image}
                                        alt={`${carouselData[currentPanel].heading} ${carouselData[currentPanel].subheading}`}
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
                                    transform: `translateX(${(currentPanel / (carouselData.length - 1)) * (256 - 48)}px)`
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-[600px]">
                    <div className="flex-1 lg:flex-[7] relative w-full">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                            <div className="relative order-2 sm:order-1">
                                <div className="w-[2px] h-52 bg-white rounded-full">
                                    <div
                                        className="bg-secondary w-[2px] h-6 rounded-full transition-all duration-500 ease-in-out"
                                        style={{
                                            transform: `translateY(${(currentPanel / (carouselData.length - 1)) * (208)}px)`
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex-1 order-1 sm:order-2">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPanel}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        <h2 className="font-dm-sans text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                                            {carouselData[currentPanel].heading}{' '}
                                            <span className="text-[#2DE1C2]">{carouselData[currentPanel].subheading}</span>
                                        </h2>

                                        <p className="mt-6 text-lg sm:text-xl text-white/80 font-dm-sans leading-relaxed max-w-2xl">
                                            {carouselData[currentPanel].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 lg:flex-[5] relative w-full">
                        <div className="relative h-[500px] lg:h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPanel}
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
                                        src={carouselData[currentPanel].image}
                                        alt={`${carouselData[currentPanel].heading} ${carouselData[currentPanel].subheading}`}
                                        fill
                                        className="object-contain rounded-2xl"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <div className='h-5 bg-secondary'></div>
    </>
    );
};

export default FeatureCarousel; 