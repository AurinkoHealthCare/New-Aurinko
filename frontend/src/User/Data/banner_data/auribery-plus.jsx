import React from 'react'

const Auribery_plus = () => {
    return (
        <div className="container mx-auto px-4 py-5 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                AURIBERY PLUS
            </h2>
            <hr className="border-t-2 border-orange-500 w-16 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                Pharmacodynamics:
            </h3>
            <div className="items-center">
                <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Lactobacillus acidophilus:
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Acidification of the mucosal surface</li>
                            <li>Prevention of the adherence of pathogens</li>
                            <li>Production of substances such as vitamins and immune modulators</li>
                            <li>Synergistic action with the host immune system</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Assets/Research and developement/Lactobacillus acidophilus.jpg"
                            alt="Application of neuna particle"
                            className="h-40 mx-auto rounded-3xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Lactobacillus plantarum:
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Prevents the adherence, growth and colonization of Uro-pathogenic bacteria, strong inhibitory effect on E. coli.</li>
                            <li>Bio-surfactant secretion.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Assets/Research and developement/Lactobacillus plantarum.webp"
                            alt="Application of neuna particle"
                            className="h-40 mx-auto rounded-3xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Cranberry:
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Prevents bacterial adherence to host cell surface membranes.</li>
                            <li>Decreases UTI related symptoms by suppressing inflammatory cascades as an immunologic response to bacteria invasion.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Assets/Research and developement/Cranberry.jpg"
                            alt="Application of neuna particle"
                            className="h-40 mx-auto rounded-3xl"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Vitamin A:
                    </h3>
                    <p className='text-center'>Re-epithelialization of damaged mucosal surfaces.</p>
                    <div className="w-full">
                        <img
                            src="/Assets/Research and developement/Vitamin A.avif"
                            alt="Application of neuna particle"
                            className="h-40 mx-auto rounded-3xl"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            FOS:
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Acts as prebiotic</li>
                            <li>Helps in growth of probiotics</li>
                            <li>Improves intestinal immunomodulation.</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <img
                            src="/Assets/Research and developement/FOS.webp"
                            alt="Application of neuna particle"
                            className="h-40 mx-auto rounded-3xl"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <img
                        src="/Assets/Research and developement/FOS.webp"
                        alt="Application of neuna particle"
                        className="h-40 mx-auto rounded-3xl"
                    />
                </div>
            </div>
        </div >
    )
}

export default Auribery_plus