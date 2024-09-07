import React from 'react';
import ItemsContainer from "../Item/ItemsContainer.jsx";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 ">
                <div>
                </div>
            </div>
            <ItemsContainer />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>
                    <ion-icon name="logo-ionitron"></ion-icon>
                </span>
                <span>© 2024 Appy. All rights reserved.</span>
                <span>Term. Privacy Policy</span>
            </div>
        </footer>
    )
}
export default Footer;