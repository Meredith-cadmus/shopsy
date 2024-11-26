import React from "react";

const OredrSection = ({ order, setOrder }) => {
  return (
    <div>
      {order && (
        <div>
          <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 w-[300px] p-5 rounded-md">
              {/* header section */}
              <header className="flex justify-between items-center">
                <h1>Order Now</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  onClick={() => setOrder(!order)}
                  className="size-6 cursor-pointer dark:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </header>
              {/* body section */}
              <body className="space-y-4 py-5">
                <input
                  placeholder="Name"
                  type="text"
                  className="w-full py-1 dark:bg-gray-800 outline-none border  rounded-full px-4"
                />
                <input
                  placeholder="Email"
                  type="text"
                  className="w-full py-1 dark:bg-gray-800 outline-none border  rounded-full px-4"
                />
                <input
                  placeholder="Address"
                  type="text"
                  className="w-full py-1 dark:bg-gray-800 outline-none border  rounded-full px-4"
                />
              </body>
              <div className="text-center">
                <button className="bg-primary text-white px-4 py-1 rounded-full hover:scale-105 transition-all duration-200">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OredrSection;
