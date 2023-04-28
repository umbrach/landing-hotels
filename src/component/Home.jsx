import React from "react";

function Home() {
  return (
    <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] opacity-90">
      {/* Container */}
      <div className="max-w-[1200px] h-full mx-auto flex flex-col justify-center px-4">
        <p className="text-[#313131] text-xl sm:text-2xl text-left md:text-center font-bold">
          Welcome to the,
        </p>
        <h1 className="pb-4 text-4xl sm:text-6xl text-left md:text-center font-bold text-[#181717]">
          Wentworth Hotels
        </h1>
        <form className="flex flex-col max-w-[1200px]">
          <input
            className="p-5 my-2 rounded-md text-2xl placeholder:text-2xl placeholder:text-[#848080] focus:outline-none shadow-md"
            type="text"
            placeholder="Find hotel"
          />
          <button className="w-1/3 mx-auto my-2 px-6 py-3 sm:text-[24px] font-semibold  text-[#181717] hover:text-white rounded-md bg-white hover:bg-[#5395df] hover:shadow-md shadow-md">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
