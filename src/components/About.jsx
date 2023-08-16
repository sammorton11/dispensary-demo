import React from "react";

export default function About() {
    return (
        <section className="px-5 md:px-10 m-5 md:m-10 ">
            <div className="flex flex-col lg:flex-row items-center space-x-0 md:space-x-6 py-5 m-10">
                <img
                    className="animate-slideIn opacity-0 rounded w-full md:w-100 lg:w-[640px] h-auto md:h-[500px] mb-5 md:mb-0 mt-10"
                    src="https://www.mlive.com/resizer/y7UMyqnsEhNmZU3aMJTzhTCYa4w=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NGO66ITQ7RGQ5NWD642RUUSOJQ.JPG"
                    alt="Dispensary Interior"
                    style={{
                        "--delay": 1 * 0.25 + "s",
                    }}
                />
                <div className="p-10">
                    <div className="text-green-200 text-3xl md:text-4xl mb-3 md:mb-5 py-3">
                        About
                    </div>
                    <p className="text-green-200 text-base md:text-lg">
                        Step into our modern and inviting dispensary, conveniently located
                        in the heart of the city. Explore our carefully designed space,
                        where aesthetics meet functionality, creating a seamless shopping
                        experience. Whether you're seeking relaxation, inspiration, or
                        relief, GreenLeaf Grove is here to guide you on your cannabis
                        journey.
                    </p>
                    <p className="text-green-200 text-base md:text-lg py-3 md:py-5">
                        Embrace the world of cannabis at GreenLeaf Grove – where premium
                        products, expert guidance, and a thriving community come together
                        to elevate your experience. Explore our online store or visit our
                        physical location and embark on a path of discovery and well-being.
                    </p>
                    <a
                        className="text-green-200 text-lg inline-flex items-center bg-gray-600 border-0 py-3 mt-5 md:py-5 px-10 md:px-20 focus:outline-none hover:bg-green-600 rounded"
                        href="https://weedmaps.com/dispensaries/capital-dank-edmond"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SHOP NOW
                    </a>
                </div>
            </div>
        </section>
    );
}

