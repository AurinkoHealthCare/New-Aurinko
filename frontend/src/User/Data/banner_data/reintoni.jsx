import React from 'react'

const Reintoni = () => {
    return (
        <div className="container mx-auto px-4 py-5 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                REINTONI
            </h2>
            <hr className="border-t-2 border-orange-500 w-16 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                Pharmacodynamics:
            </h3>
            <div className="items-center">
                <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Reduces Kidney Damage
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <p>Lactobacillus acidophilus helps to alleviate kidney damage by reducing oxidative stress, inflammation, and cell death.</p>
                            <p>In renal ischemia-reperfusion injury (IRI), it improves gut microbiota, increases anti-inflammatory cytokines (IL-4, IL-10), and decreases pro-inflammatory markers (IL1β, IL-8, TNF-α, IFN-γ), while reducing renal apoptosis.</p>
                            <p>L. acidophilus also lowers kidney fibrosis by improving mitochondrial function to improve kidney health.</p>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/Assets/Research and developement/Lactobacillus acidophilus.jpg"
                            alt="Application of neuna particle"
                            className="h-56 mx-auto rounded-3xl"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                        Improves Kidney Function with Anti-inflammatory effect
                    </h3>
                    <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                        <p>Bifidobacterium longum can significantly improve the renal function, down-regulate renal and intestinal inflammation, improve intestinal microenvironment in chronic kidney diseases by inhibiting the NF-κB signaling and suppressing inflammatory response in macrophage.</p>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/Assets/Research and developement/Bifidobacterium.jfif"
                                alt="Bifidobacterium."
                                className="h-40 mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src="/Assets/Research and developement/Lactobacillus acidophilus.jpg"
                                alt="Lactobacillus acidophilus"
                                className="h-40 mx-auto rounded-3xl"
                            />
                        </div>
                        <p>L. acidophilus lowers kidney fibrosis, preserves kidney function, strengthens the intestinal barrier, modulates immune responses, and inhibits the NLRP3 inflammasome pathway.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                        <p>Fructo-oligosaccharides directly interact with CD44 to inhibit hypoxia-induced CD44 upregulation, JNK activation, and cytokine expression in renal tubular cell. Promotes recovery by inhibiting kidney inflammation.</p>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/Assets/Research and developement/Fructo-oligosaccharides.jpg"
                                alt="Fructo-oligosaccharides.jpg"
                                className="h-40 mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8 my-8">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                                Reduces Uremic Toxins and Modulates Gut Microbiota
                            </h3>
                            <ul className="text-gray-700 list-disc pl-5 mb-4">
                                <p>S. thermophilus supports kidney health in CKD by reducing uremic toxins, balancing gut microbiota, and producing urease to break down urea. It also improves metabolism, strengthens the gut barrier, and reduces inflammation, helping to slow CKD progression.</p>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/Assets/Research and developement/S. thermophilus.jpeg"
                                alt="S. thermophilus"
                                className="h-56 mx-auto rounded-3xl"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Improves Gut Health
                        </h3>
                        <p>FOS acts as a food source for beneficial gut bacteria, supporting their growth and proliferation, which can help to balance the gut microbiome.</p>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <li>In the large intestine, gut bacteria, particularly bifidobacteria and lactobacilli, ferment FOS. This process produces short-chain fatty acids (SCFA), such as acetate, propionate, and butyrate, which are beneficial for gut health. </li>
                            <li>SCFA production helps to maintains a healthy pH in the colon: SCFAs acidify the colonic environment, creating an inhospitable environment for harmful bacteria and Enhances calcium absorption.</li>
                            <li>The fermentation of FOS can increase stool bulk and soften stool consistency, which can be helpful for individuals experiencing constipation.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
                            Synergistic Effect
                        </h3>
                        <ul className="text-gray-700 list-disc pl-5 mb-4">
                            <p>The synergistic effect of Lactobacillus acidophilus, Bifidobacterium longum, and Streptococcus thermophilus on kidney health is primarily attributed to their ability to modulate the gut microbiome and potentially reduce uremic toxins, which can help in managing chronic kidney disease (CKD).</p>
                            <p>These probiotics can help improve kidney function, reduce inflammation, and potentially slow down the progression of CKD. The uremic and nitrogenous compounds are either converted by these probiotics into beneficial compounds like short-chain fatty acids, or removed during normal bowel movements.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reintoni