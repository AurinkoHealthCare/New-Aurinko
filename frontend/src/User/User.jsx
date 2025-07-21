import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/footer";
import LastLine from "./Layout/Footer/lastline";

const User = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-16">
                <Outlet />
            </div>
            <Footer />
            <LastLine />
        </div>
    );
};

export default User;
