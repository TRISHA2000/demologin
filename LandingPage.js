import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Image from './logo-search-grid-1x.png'; 
import React, { useContext } from 'react';
import DarkModeContext from './DarkModeContext';

export default function Example() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation
  
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50 p-4">
        <button
          onClick={toggleDarkMode}
          className="text-black dark:text-white absolute top-0 right-5 p-4"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt="Logo"
                src={Image}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black-600 ring-1 ring-gray-900/10 hover:bg-rose-400 border-2 border-indigo-500/100 	">
              If Any Upcoming news or Notification ...{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"> {/* Add dark mode text color */}
              Sayantani kar
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"> {/* Add dark mode text color */}
              Write Your Own Project Description
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => navigate("/loginpage")}
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}