import React from "react";

function News() {
  return (
    <div className="w-full h-full bg-[#fefefe] pt-4">
      <h2 className="text-center text-2xl sm:text-4xl font-bold">News</h2>
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-evenly max-w-[300px] sm:max-w-[640px] md:max-w-[1200px] mx-auto p-4 border border-[#313131] rounded-sm">
          <div className="flex flex-col justify-center">
            <p className=" max-w-[700px] text-gray-800 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quibusdam delectus accusamus inventore eligendi omnis sint vero
              dolorum magnam, ipsa, nisi accusantium laudantium. Qui soluta
              laboriosam beatae repellat placeat dignissimos, ratione ducimus
              delectus quibusdam nostrum sit aut facere fuga? Natus?
            </p>
            <button className="bg-[#c5c1c1] hover:bg-[#5395df] hover:shadow-md shadow-md hover:text-white rounded-md px-4 py-2 my-4 w-[150px]">
              Read more...
            </button>
          </div>
          <div className="hidden md:flex md:max-w-[400px]">
            <img
              className="rounded-md"
              src="https://plus.unsplash.com/premium_photo-1661777938520-110b62a5537f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

// https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80
