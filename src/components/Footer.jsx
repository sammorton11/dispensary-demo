import React from 'react';

export default function Footer() {
    return (
        <footer className="text-green-300 py-10">
            <div className="container mx-auto flex flex-col items-center">
                <ul className="text-center">
                    <li className="mb-3">
                        Sample Street Ave<br />
                        1234 E 15th Street Suite 500<br />
                        Edmond, OK 73013
                    </li>
                    <li className="text-lg">(405) 123-4567</li>
                </ul>
                <div className="mt-5">
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        Privacy Policy
                    </a>
                    <span className="mx-2 text-gray-300">|</span>
                    <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

