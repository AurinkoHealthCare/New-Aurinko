import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="flex">
            <button
                onClick={toggleSidebar}
                className="p-4 text-white bg-gray-800 md:hidden fixed top-0 left-0 z-50"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <div
                className={`fixed top-0 left-0 z-40 bg-gray-800 text-white w-64 p-4 min-h-screen transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:relative md:block`}
            >
                <div className="mb-6">
                    <h1 className="text-xl font-bold sm:text-left">Aurinko One Health</h1>
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
                                            <Link to={"/dashboard/block4"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 4</button></Link>
                                            <Link to={"/dashboard/block5"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 5</button></Link>
                                            <Link to={"/dashboard/block6"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 6</button></Link>
                                            <Link to={"/dashboard/block7"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 7</button></Link>
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
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Health Supplements</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Personal Care</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Yeppuen</button></Link>
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
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Livestock</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Poultry</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Aqua</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Swine</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Equine</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Pet</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Feed & Grain</button></Link>
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
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nano Fertilizers</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Soil Minerals</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Ingredients */}
                                <Link to={"/dashboard/"}><button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Ingredients</button></Link>

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
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Reports</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Gallery</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Brochures</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Blogs</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Articles</button></Link>
                                            <Link to={"/dashboard/"}><button className="w-full text-left px-2 hover:bg-gray-700 rounded">Videos</button></Link>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Us */}
                                <Link to={"/dashboard/contact"}><button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Contact Us</button></Link>
                            </div>
                        )}
                    </div>

                    <Link to={"/dashboard/"}><button className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left">
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
