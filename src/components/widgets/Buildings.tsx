
import Image from 'next/image';
import build1 from '../../assets/images/buildings/build1.png';
import build2 from '../../assets/images/buildings/build2.png';
import build3 from '../../assets/images/buildings/build3.png';
import build4 from '../../assets/images/buildings/build4.png';

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
                                src={build1}
                                alt="Modern interior with wooden features"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="aspect-[4/6] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src={build2}
                                alt="Modern white building exterior"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="aspect-[6/5] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
                            <Image
                                src={build3}
                                alt="Modern kitchen interior"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="aspect-[5/6] relative rounded-sm overflow-hidden w-48 lg:w-72 flex-shrink-0">
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
        </section>
    );
}

export default Buildings;
