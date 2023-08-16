import React from "react";

export default function WelcomeImage() {
    const dispensary =
        "url(https://www.kccannabis.org/assets/images/Banner_1@2x.webp)";
    const weed =
        "url(https://silver-therapeutics.com/wp-content/uploads/2021/11/thiago-patriota-z4DV6PjT8eo-unsplash-scaled.jpg)";

    return (
        <div
            className="animate-slideIn opacity-0 flex flex-col justify-center items-center h-screen bg-center bg-cover relative"
            style={{
                "--delay": 1 * 0.25 + "s",
                backgroundImage: dispensary,
                height: "575px",
            }}
        >
            <div className="absolute bottom-0 px-6 sm:px-16 py-7 bg-gray-700/50 w-full">
                <h1 className="text-green-200 font-semibold text-4xl sm:text-6xl">
                    GreenLeaf Grove
                </h1>
                <div className="text-green-100 text-base sm:text-xl py-3 sm:py-5">
                    Welcome to GreenLeaf Grove, your premier destination for all things
                    cannabis.
                </div>
            </div>
        </div>
    );
}

