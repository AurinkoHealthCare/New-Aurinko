import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [nestedDropdown, setNestedDropdown] = useState({});

    const navigate = useNavigate();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const toggleNestedDropdown = (parent, child) => {
        setNestedDropdown((prev) => ({
            ...prev,
            [parent]: prev[parent] === child ? null : child,
        }));
    };
    const handleLogout = async () => {
        try {
            // Clear cookie from server
            await axios.post("/auth/logout", { withCredentials: true });

            // Remove local token (if any)
            localStorage.removeItem("token");

            // Navigate to login or home
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex">
            <button
                onClick={toggleSidebar}
                className="p-2 text-white bg-gray-800 md:hidden fixed top-0 left-0 z-50"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <div
                className={`fixed top-0 left-0 z-40 bg-gray-800 text-white w-64 pt-16 px-4 pb-4 min-h-screen transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:pt-4 md:translate-x-0 md:relative md:block`}
            >

                <div className="mb-6">
                    <h1 className="text-xl font-bold md:text-left">Aurinko One Health</h1>
                </div>

                <div className="flex flex-col space-y-3">
                    <Link to={"/dashboard/"}><button className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left">
                        Home
                    </button></Link>

                    {/* Media Dropdown */}
                    <div>
                        <button
                            className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left flex justify-between items-center w-full"
                            onClick={() => toggleDropdown("media")}
                        >
                            Media <ChevronDown className="w-4 h-4 ml-2" />
                        </button>
                        {openDropdown === "media" && (
                            <div className="ml-4 mt-1 space-y-2">
                                <Link to={"/dashboard/banner"}><button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Banner</button></Link>
                                <Link to={"/dashboard/productimage"}><button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Product Images</button></Link>
                                <Link to={"/dashboard/productlogo"}><button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Product Logo</button></Link>
                            </div>
                        )}
                    </div>

                    {/* Pages Dropdown */}
                    <div>
                        <button
                            className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left flex justify-between items-center w-full"
                            onClick={() => toggleDropdown("pages")}
                        >
                            Pages <ChevronDown className="w-4 h-4 ml-2" />
                        </button>
                        {openDropdown === "pages" && (
                            <div className="ml-4 mt-1 space-y-2">
                                {/* Home */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "Home")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        Home <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "Home" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/imageSlider"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Image Slider</button></Link>
                                            <Link to={"/dashboard/block1"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 1</button></Link>
                                            <Link to={"/dashboard/block2"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 2</button></Link>
                                            <Link to={"/dashboard/block3"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 3</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* About Us */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "About Us")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        About Us <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "About Us" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/overview"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Overview</button></Link>
                                            <Link to={"/dashboard/Vision"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Vision & Mission</button></Link>
                                            <Link to={"/dashboard/manufacturing"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Manufacturing Facility</button></Link>
                                            <Link to={"/dashboard/research"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Research & Development</button></Link>
                                            <Link to={"/dashboard/exporte"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Export</button></Link>
                                            <Link to={"/dashboard/certificate"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Certificates</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Human */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "Human")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        Human <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "Human" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/nanophosphosomes"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button></Link>
                                            <Link to={"/dashboard/neunamins"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button></Link>
                                            <Link to={"/dashboard/neunaparticle"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button></Link>
                                            <Link to={"/dashboard/health_Supplements"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Health Supplements</button></Link>
                                            <Link to={"/dashboard/personal_Care"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Personal Care</button></Link>
                                            <Link to={"/dashboard/yeppuen "}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Yeppuen</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Veterinary */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "Veterinary")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        Veterinary <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "Veterinary" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/DVNanophosphosome"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button></Link>
                                            <Link to={"/dashboard/DVNeunamin"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button></Link>
                                            <Link to={"/dashboard/DVNeunaparticle"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button></Link>
                                            <Link to={"/dashboard/DVLivestock"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Livestock</button></Link>
                                            <Link to={"/dashboard/DVPoultry"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Poultry</button></Link>
                                            <Link to={"/dashboard/DVAqua"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Aqua</button></Link>
                                            <Link to={"/dashboard/DVSwine"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Swine</button></Link>
                                            <Link to={"/dashboard/DVEquine"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Equine</button></Link>
                                            <Link to={"/dashboard/DVPet"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Pet</button></Link>
                                            <Link to={"/dashboard/DVFeed_Grain"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Feed & Grain</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Agriculture */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "Agriculture")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        Agriculture <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "Agriculture" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/nanofertilizer"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nano Fertilizers</button></Link>
                                            <Link to={"/dashboard/soilmineral"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Soil Minerals</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Ingredients */}
                                <Link to={"/dashboard/ingredients"}><button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Ingredients</button></Link>

                                {/* Media */}
                                <div>
                                    <button
                                        onClick={() => toggleNestedDropdown("pages", "Media")}
                                        className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded"
                                    >
                                        Media <ChevronDown className="w-4 h-4" />
                                    </button>
                                    {nestedDropdown["pages"] === "Media" && (
                                        <div className="ml-4 mt-1 text-base space-y-1">
                                            <Link to={"/dashboard/Reports"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Reports</button></Link>
                                            <Link to={"/dashboard/Gallery"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Gallery</button></Link>
                                            <Link to={"/dashboard/Brochures"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Brochures</button></Link>
                                            <Link to={"/dashboard/Blogs"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Blogs</button></Link>
                                            <Link to={"/dashboard/Articles"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Articles</button></Link>
                                            <Link to={"/dashboard/Videos"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Videos</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Us */}
                                <Link to={"/dashboard/contact"}><button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Contact Us</button></Link>
                            </div>
                        )}
                    </div>

                    <Link to={"/dashboard/feedback"}><button className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left">
                        Feedback
                    </button></Link>

                    <button onClick={handleLogout} className="text-right hover:underline text-red-300 px-4 py-2 rounded">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
