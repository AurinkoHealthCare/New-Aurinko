import React from 'react'

const Nunamin = () => {
    return (
        <div className="container mx-auto px-4 py-5">
            <div className="font-sans py-12 container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">NEUNA® MIN</h2>
                <hr className="border-t-2 border-orange-500 w-16 mb-4" />
                <p className="text-gray-700 mb-4">
                    Neuna® Min is a range of highly effective and bioavailable carbon
                    technology-based nano minerals.
                </p>
                <p className="text-gray-700 mb-4">
                    <span className="font-bold">Nano Size Molecules with Superior Absorption:</span> 20-100 nm particle size ensures Passive Diffusion
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                    Technology used:
                </h3>

                <div className="grid grid-cols-1 gap-8">
                    <div className="flex gap-8 flex-wrap items-center">
                        <div>
                            <img
                                src="/Assets/Research and developement/Carbon Quantum Dots (CQDs).jpg"
                                alt="Carbon Quantum Dots (CQDs)"
                                className="h-20 object-cover"
                            />
                        </div>
                        <div className="md:w-3/4 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                                1. Carbon Quantum Dots (CQDs)
                            </h3>
                            <p>
                                Carbon Quantum Dots passivated Minerals (CQD Minerals) is a highly bioavailable form of supplemental minerals which can be used further for the production of high-quality mineral feeds and supplements.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 flex-wrap items-center">
                        <div className="w-20">
                            <img
                                src="/Assets/Research and developement/Carbon Polymer Bio-caging.jpg"
                                alt="Carbon Polymer Bio-caging"
                                className="h-20 w-auto object-cover"
                            />
                        </div>

                        <div className="md:w-3/4 w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-2">
                                2. Carbon Polymer Bio-caging
                            </h3>
                            <p className="text-gray-700">
                                Bio-cage is a carbon polymer which can be used as a carrier for minerals, including trace minerals and can form nanoparticles after complexation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">
                        Properties of Neuna® Min
                    </h1>
                    <ul className="text-gray-700 pl-5 mb-4">
                        <li>
                            <span className="font-bold">High Surface Area-to-Volume Ratio</span>
                            <ul className="list-disc pl-5">
                                <li>Increases reactivity and adsorption capabilities.</li>
                                <li>Enhances catalytic efficiency in chemical processes.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold">Enhances Mechanical Strength</span>
                            <ul className="list-disc pl-5">
                                <li>Neuna® Min exhibit improved hardness and durability.</li>
                                <li>Used in reinforcement of composite materials.</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold">Improves Thermal Stability</span>
                            <ul className="list-disc pl-5">
                                <li>Neuna® Min can withstand high temperatures without significant degradation.</li>
                                <li>Applied in heat-resistant coatings and thermal insulation materials.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Benefits of Neuna® Min
                    </h3>
                    <ul className="text-gray-700 list-disc pl-5 mb-4">
                        <li>Greater Bioavailability</li>
                        <li>Higher Cellular Availability</li>
                        <li>Higher Retention</li>
                        <li>Lower Faecal Excretion</li>
                        <li>Broad Safety Margin</li>
                    </ul>

                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Applications of Neuna® Min
                    </h3>
                    <ul className="text-gray-700 pl-5 mb-4">
                        <li>
                            <span className="font-bold">Environmental Applications</span>
                            <ul className="list-disc pl-5">
                                <li>
                                    Soil Remediation: Neuna® Min can break down contaminants in soil, making it safer for agriculture and construction.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold">Medical and Healthcare</span>
                            <ul className="list-disc pl-5">
                                <li>
                                    Drug Delivery Systems: Neuna® Min can be engineered to deliver drugs to specific sites in the body, increasing treatment efficacy and reducing side effects.
                                </li>
                                <li>
                                    Antibacterial Coatings: Silver and copper nanoparticles exhibit strong antimicrobial properties.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold">Agricultural Applications</span>
                            <ul className="list-disc pl-5">
                                <li>
                                    Nano-fertilizers: Improves nutrient absorption and enhances crop yield.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nunamin