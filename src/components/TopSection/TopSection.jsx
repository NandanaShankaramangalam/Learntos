import React from "react";

const TopSection = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between">
      <div className="w-full">
        <div className="text-3xl md:text-4xl font-bold text-center pt-2 md:pt-20">
          <h1>Learn From the Masters</h1>
          <p className="text-base md:text-lg font-light text-gray-600">
            Learntos can help you advance your IT career!
          </p>
        </div>
        <div className="flex justify-center px-6">
          <div
            id="search-bar"
            class="w-96 mt-8 md:mt-12 rounded-md shadow-lg z-10 bg-white"
          >
            <form class="flex items-center justify-center p-2 rounded-md">
              <input
                type="text"
                placeholder="Search here"
                class="w-full rounded-md px-2 outline-none py-1 "
              />
              <button
                type="submit"
                class="bg-custom-lightorange text-white rounded-md px-4 py-2 ml-2 duration-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-0 flex justify-center">
        <img src="images/image1.png" className="h-64 md:h-80" alt="" />
      </div>
    </div>
  );
};

export default TopSection;
