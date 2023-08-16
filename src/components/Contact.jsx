// src/components/Contact.js
import React from "react";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row sm:flex-nowrap">
                <div className="h-[400px] md:h-[490px] lg:h-[419px] xl:h-[519px] 2xl:h-[519px] md:w-3/4 bg-gray-900 rounded-lg overflow-hidden md:mr-5 md:ml-0 lg:md-0 relative">
                    <iframe
                        className="w-full h-full md:absolute"
                        title="map"
                        src="https://www.google.com/maps/embed/v1/place?q=Abide+Cannabis+Company,+801+S+Kelly+Ave,+Edmond,+OK+73003,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        allowFullScreen
                    />
                </div>
                <form
                    name="contact"
                    className="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 lg:ml-20 md:mt-0"
                    onSubmit={handleSubmit}
                    method="POST"
                    data-netlify="true">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact
                    </h2>
                    <p className="leading-relaxed mb-5">
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded border border-gray-700 focus:border-green-200 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                            style={{ backgroundColor: '#242424' }}
                        />
                    </div>
                    <div className="relative mb-4" style={{ backgroundColor: '#242424' }}>
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded border border-gray-700 focus:border-green-200 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ backgroundColor: '#242424' }}
                        />
                    </div>
                    <div className="relative mb-4" style={{ backgroundColor: '#242424' }}>
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full rounded border border-gray-700 focus:border-green-200 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ backgroundColor: '#242424' }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-green-900 bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

