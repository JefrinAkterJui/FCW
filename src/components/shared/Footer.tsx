/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { Page } from "../Home/Hero/Hero";

const Footer = () => {
  const [page, setPage] = useState<Page>("home");
  return (
    <footer className="bg-gray-900 border-t border-amber-50/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="text-gray-300">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-cyan-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="text-2xl font-bold text-white">CryptoView</span>
            </div>
            <p className="text-sm mt-5">
              Your one-stop destination for real-time cryptocurrency prices.
              Stay updated with the latest market trends.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("home");
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage("allCoins");
                  }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  All Coins
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest crypto news and updates delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-l-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-r-md transition-colors text-sm"
                >
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CryptoView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
