import React from 'react';
import Image from 'next/image';
import increasedCostsImage from '../../assets/images/increased-costs.png';
import complexRegulatoryRequirementsImage from '../../assets/images/complex-regulatory.png';
import legalComplianceRisksImage from '../../assets/images/legal-risks.png';
import delayedRevenueImage from '../../assets/images/delayed-revenue.png';

const WhyUlama = () => {
    const complianceChallenges = [
        {
            id: 1,
            title: "Delayed revenue for design teams",
            description: "When permit approval is delayed, invoicing is delayed. Ulama means improved cashflow for design teams.",
            imageUrl: delayedRevenueImage.src
        },
        {
            id: 2,
            title: "Increased project costs",
            description: "For owners and developers, permit delays mean ballooning costs and delays in realizing revenue.",
            imageUrl: increasedCostsImage.src
        },
        {
            id: 3,
            title: "Complex regulatory requirements",
            description: "Navigating building codes and regulations requires expertise that many teams lack.",
            imageUrl: complexRegulatoryRequirementsImage.src
        },
        {
            id: 4,
            title: "Legal compliance risks",
            description: "Non-compliance can result in costly fines, project shutdowns, and legal disputes.",
            imageUrl: legalComplianceRisksImage.src
        }
    ];

    return (
        <section id="why" className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #ef4444 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto justify-center items-center flex flex-col">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Compliance is boring and costs{' '}
                        <span className="text-red-500">millions each year.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Code compliance ≠ design. Let Ulama handle the minutiae so you can focus on what you do best: creating.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {complianceChallenges.map((challenge) => (
                        <div
                            key={challenge.id}
                            className="bg-white rounded-xl p-4 border border-gray-100 transition-shadow duration-300 flex flex-col"
                            style={{
                                boxShadow: '0 0 14.038px 0 rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            {/* Image Placeholder */}
                            <Image
                                src={challenge.imageUrl}
                                alt={challenge.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover rounded-lg mb-3"
                            />
                            {/* Title */}
                            <h3 className="text-xl font-medium text-gray-900 mb-1 ">
                                {challenge.title}
                            </h3>
                            {/* Description */}
                            <p className="text-gray-600  leading-tight">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUlama; 