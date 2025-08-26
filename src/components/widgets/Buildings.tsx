
import Image from 'next/image';

function Buildings() {
    return (
        <section className="relative pt-12 md:pt-32 bg-gray-50">
            <div className="mx-auto">
                <div className="block lg:hidden text-center mb-8 px-4">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                        Design to construction,{' '}
                        <span className="block">
                            on your timeline.
                        </span>
                    </h2>
                </div>

                <div className="hidden lg:block absolute right-80 lg:top-20 lg:right-72 mb-12">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Design to construction,{' '}
                        <span className="block">
                            on your timeline.
                        </span>
                    </h2>
                </div>

                {/* Container with overflow hidden to create viewport effect */}
                <div className="overflow-hidden">
                    {/* Fixed-width container that maintains 4-column layout */}
                    <div className="flex gap-4 lg:gap-6 items-end justify-center min-w-[800px] lg:min-w-[1200px]">
                        <div className="aspect-[9/10] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src="/images/buildings/build1.png"
                                alt="Modern interior with wooden features"
                                fill
                                sizes="(max-width: 1024px) 192px, 288px"
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="aspect-[4/6] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src="/images/buildings/build2.png"
                                alt="Modern white building exterior"
                                fill
                                sizes="(max-width: 1024px) 192px, 288px"
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="aspect-[6/5] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src="/images/buildings/build3.png"
                                alt="Modern kitchen interior"
                                fill
                                sizes="(max-width: 1024px) 192px, 288px"
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="aspect-[5/6] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src="/images/buildings/build4.png"
                                alt="Red brick building exterior"
                                fill
                                sizes="(max-width: 1024px) 192px, 288px"
                                className="object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Buildings;
