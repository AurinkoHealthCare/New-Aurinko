import React from "react";
import Navbar from "./Layout/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100">
                <Navbar />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
