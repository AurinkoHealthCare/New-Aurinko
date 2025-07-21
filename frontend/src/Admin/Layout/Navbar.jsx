import React from "react";

const Navbar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-4">
            <div className="mb-6">
                <h1 className="text-xl font-bold">Aurinko One Health</h1>
                <p>yourgroovydomain.com</p>
            </div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <a href="#" className="text-blue-400">My Home</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Updates</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Stats</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Upgrades</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Posts</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Media</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Pages</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Portfolio</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Testimonials</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Comments</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Outbox</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Feedback</a>
                    </li>
                    <li className="mb-4">
                        <a href="#">Jetpack</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
