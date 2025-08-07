
import Image from 'next/image';
import build1 from '../../assets/images/buildings/build1.png';
import build2 from '../../assets/images/buildings/build2.png';
import build3 from '../../assets/images/buildings/build3.png';
import build4 from '../../assets/images/buildings/build4.png';

function Buildings() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-12 md:gap-6 lg:gap-8 items-center">
                    {/* Left Column - Images */}
                    <div className="md:col-span-7 lg:col-span-8">
                        <div className="grid grid-cols-12 gap-4 lg:gap-6">
                            {/* First row - Large interior image */}
                            <div className="col-span-5">
                                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={build1}
                                        alt="Modern interior with wooden features"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* First row - White building exterior */}
                            <div className="col-span-7">
                                <div className="aspect-[16/10] relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={build2}
                                        alt="Modern white building exterior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Second row - Kitchen interior */}
                            <div className="col-span-7">
                                <div className="aspect-[16/10] relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={build3}
                                        alt="Modern kitchen interior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Second row - Red building exterior */}
                            <div className="col-span-5">
                                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={build4}
                                        alt="Red brick building exterior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text */}
                    <div className="md:col-span-5 lg:col-span-4 md:pl-8 lg:pl-12">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Design to construction,{' '}
                            <span className="block">
                                on your timeline.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    {/* Text at top for mobile */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight text-center">
                            Design to construction,{' '}
                            <span className="block">
                                on your timeline.
                            </span>
                        </h2>
                    </div>

                    {/* Images in vertical stack */}
                    <div className="space-y-4">
                        {/* Top row - Interior and Building */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                                <Image
                                    src={build1}
                                    alt="Modern interior with wooden features"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                                <Image
                                    src={build2}
                                    alt="Modern white building exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom row - Kitchen and Red building */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                                <Image
                                    src={build3}
                                    alt="Modern kitchen interior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                                <Image
                                    src={build4}
                                    alt="Red brick building exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Buildings;
