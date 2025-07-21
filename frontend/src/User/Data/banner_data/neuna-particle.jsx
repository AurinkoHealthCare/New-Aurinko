import React from 'react'

const Neuna_particles = () => {
    return (
        <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        NEUNA® PARTICLE TECHNOLOGY
                    </h2>
                    <hr className="border-t-2 border-orange-500 w-16 mb-4" />
                    <p className="text-gray-700 mb-4">
                        Neuna® particles are extremely small and have dimensions roughly between 1-100 nanometers (nm). Nanospheres are matrix systems in which the drug is physically and uniformly dispersed. Nano capsules are systems in which the drug is confined to a cavity surrounded by a unique polymer membrane.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Properties of Neuna® particle
                    </h3>
                    <ul className="text-gray-700 list-disc pl-5 mb-4">
                        <li>High Mobility </li>
                        <li>Higher Absorption </li>
                        <li>Enormous Surface Area </li>
                        <li>Chemical Stability</li>
                    </ul>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Benefits of Neuna® particle
                    </h3>
                    <ul className="text-gray-700 list-disc pl-5 mb-4">
                        <li>Enhances Reactivity  </li>
                        <li>Improves Strength and Durability </li>
                        <li>Site-specific delivery of drugs  </li>
                        <li>Neuna® particles help to achieve maximum therapeutic response with minimum adverse effects</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/Assets/Research and developement/Neuna® particles.jpg"
                        alt="Neuna® particles"
                        className="w-full h-auto mx-auto"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Application of Neuna® particle
                    </h3>
                    <ul className="text-gray-700 pl-5 mb-4">
                        <li>Research:
                            <ul>
                                <li>Drug Screening</li>
                                <li>Gene Delivery</li>
                                <li>Diagnosis</li>
                            </ul>
                        </li>
                        <li>Clinical:
                            <ul>
                                <li>Drug Delivery</li>
                                <li>Detection</li>
                                <li>Diagnosis Monitoring</li>
                            </ul>
                        </li>
                        <li>Agriculture</li>
                        <li>Veterinary and Aquaculture</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/Assets/Research and developement/Application of neuna particle.jpg"
                        alt="Application of neuna particle"
                        className="h-72 mx-auto"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <img src="/Assets/Research and developement/Copper Neuna®.jpg" alt="Copper Neuna®" className="w-full rounded-lg shadow-lg" />
                        <h1 className="text-center text-lg font-bold">Copper Neuna®</h1>
                    </div>
                    <div>
                        <img src="/Assets/Research and developement/Silver Neuna®.jpg" alt="Silver Neuna®" className="w-full rounded-lg shadow-lg" />
                        <h1 className="text-center text-lg font-bold">Silver Neuna®</h1>
                    </div>
                    <div>
                        <img src="/Assets/Research and developement/Zinc Neuna®.jpg" alt="Zinc Neuna®" className="w-full rounded-lg shadow-lg" />
                        <h1 className="text-center text-lg font-bold">Zinc Neuna®</h1>
                    </div>
                    <div>
                        <img src="/Assets/Research and developement/Potassium Neuna®.jpg" alt="Potassium Neuna®" className="w-full rounded-lg shadow-lg" />
                        <h1 className="text-center text-lg font-bold">Potassium Neuna®</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Neuna_particles