import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
                    <button className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left">
                        Home
                    </button>

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
                                <button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Banner</button>
                                <button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Product Images</button>
                                <button className="block w-full text-left px-2 hover:bg-gray-700 rounded">Product Logo</button>
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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Image Slider</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 1</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 2</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 3</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 4</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 5</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 6</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Block 7</button>
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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Overview</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Vision & Mission</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Manufacturing Facility</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Research & Development</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Export</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Certificates</button>
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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Health Supplements</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Personal Care</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Yeppuen</button>
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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nanophosphosomes®</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®mins</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Neuna®particles</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Livestock</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Poultry</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Aqua</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Swine</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Equine</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Pet</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Feed & Grain</button>
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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Nano Fertilizers</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Soil Minerals</button>
                                        </div>
                                    )}
                                </div>

                                {/* Ingredients */}
                                <button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Ingredients</button>

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
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Reports</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Gallery</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Brochures</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Blogs</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Articles</button>
                                            <button className="w-full text-left px-2 hover:bg-gray-700 rounded">Videos</button>
                                        </div>
                                    )}
                                </div>

                                {/* Contact Us */}
                                <button className="flex justify-between items-center w-full px-2 hover:bg-gray-700 rounded">Contact Us</button>
                            </div>
                        )}
                    </div>

                    <button className="hover:underline hover:bg-gray-600 px-4 py-2 rounded text-left">
                        Feedback
                    </button>

                    <button onClick={handleLogout} className="text-right hover:underline text-red-300 px-4 py-2 rounded">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
