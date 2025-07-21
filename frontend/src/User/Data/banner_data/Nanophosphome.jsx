import React from 'react'

const Nanophosphome = () => {
    return (
        <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        NANOPHOSPHOSOME TECHNOLOGY
                    </h2>
                    <hr className="border-t-2 border-orange-500 w-16 mb-4" />
                    <p className="text-gray-700 mb-4">
                        Nanophosphosome® technology has emerged as a crucial advancement in drug delivery, research, and cosmetics. These small, spherical vesicles, composed of lipid bilayers, are designed to enhance the stability and bioavailability of encapsulated compounds. By protecting drugs or nutrients from degradation and improving their absorption, Nanophosphosome® technology provides an innovative solution for effective therapeutic applications.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Properties of Nanophosphosome®
                    </h3>
                    <ul className="text-gray-700 list-disc pl-5 mb-4">
                        <li>Composed of lipid bilayers that can encapsulate both hydrophilic and hydrophobic substances. </li>
                        <li>Provides stability to active compounds, preventing premature degradation.</li>
                        <li>Enables controlled release, enhancing pharmacokinetics and pharmacodynamics.</li>
                        <li>Designed for targeted delivery, improving absorption through biological barriers.</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="/Assets/Research and developement/Nanophosphosome.jpg"
                        alt="Nanophosphosome"
                        className=" h-96 mx-auto"
                    />
                </div>
            </div>

            <div className="py-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Benefits of Nanophosphosome® Technology
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Enhances drug absorption and bioavailability.</li>
                            <li>Reduces required dosage while maintaining therapeutic effectiveness.</li>
                            <li>Minimizes side effects by ensuring controlled release.</li>
                            <li>Improves stability and reduces degradation of sensitive compounds.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Applications of Nanophosphosome®
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>Pharmaceuticals: Enhances drug delivery for improved clinical outcomes.</li>
                            <li>Cosmetics: Provides better absorption and stability for skincare and beauty products.</li>
                            <li>Nutraceuticals: Improves the bioavailability of dietary supplements.</li>
                            <li>Veterinary Medicine: Enables targeted drug delivery for animals.</li>
                            <li>Research & Development: Facilitates advancements in nanotechnology-driven therapeutics.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div>
                            <img src="/Assets/Research and developement/Curcuma longa.jpg" alt="Curcuma longa" className="w-full rounded-lg shadow-lg" />
                            <h1 className="text-center text-lg font-bold">Curcuma longa</h1>
                        </div>
                        <div>
                            <img src="/Assets/Research and developement/Berberis vulgaris.jpg" alt="Berberis vulgaris" className="w-full rounded-lg shadow-lg" />
                            <h1 className="text-center text-lg font-bold">Berberis vulgaris</h1>
                        </div>
                        <div>
                            <img src="/Assets/Research and developement/Tagetes erecta.jpg" alt="Tagetes erecta" className="w-full rounded-lg shadow-lg" />
                            <h1 className="text-center text-lg font-bold">Tagetes erecta</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nanophosphome