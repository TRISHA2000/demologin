import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-red-300">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-200 p-8 text-white">
        <h2 className="text-2xl font-bold mb-8">App Sidebar</h2>
        <ul>
          <li className="mb-4">
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li className="mb-4">
            <a href="/loginpage" className="hover:underline">Login</a>
          </li>
          <li>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-orange-200 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard!</h1>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">This is the content of the first card. You can place additional information or links here.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
          
          {/* Card 2 */}
          <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">This is the content of the second card. You can include other information or actions here.</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
