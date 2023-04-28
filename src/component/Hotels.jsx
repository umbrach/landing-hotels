import React from "react";

function Hotels() {
  return (
    <div className="w-full h-full bg-[#ffffff4b] text-gray-700 pt-6">
      {/* Container */}
      <div className="max-w-[1200px] w-full h-full flex flex-col justify-center mx-auto p-4">
        <div className="pb-6 text-center">
          <h2 className="text-2xl sm:text-4xl inline font-bold">
            Popular hotels
          </h2>
        </div>

        {/* Grid container */}

        <div className="w-full justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://wentworthhotel.com.au/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px]"
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/219652427.jpg?k=410c036535938396a5f1e6d4b19a663444ed754051d1c5edb7a5377f11a17ab7&o=&hp=1"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Sydney, Australia
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.wentworth-aldeburgh.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://images.trvl-media.com/lodging/1000000/10000/4900/4876/5e53e3db.jpg?impolicy=resizecrop&rw=1200&ra=fit"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Aldeburgh, UK
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.sofitelsydney.com.au/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b0/72/34/exterior-view.jpg?w=1100&h=-1&s=1"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Sofitel Wentworth Sydney, Australia
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.sofitelsydney.com.au/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://images.unsplash.com/photo-1618251276954-60d95a0f9108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Advertisement
              </p>
            </a>
          </div>
          {/* ----------------------------------------------------------------- */}

          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://planetofhotels.com/yuar/durban/wentworth-hotel"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px]"
                src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/288630098.jpg?k=10f4454b8d051b13191f9517152e20c2285b84c670ecd8eed9239651868e2fae&o="
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Hotel Durban, South Africa
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.thewentworth.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px]"
                src="https://www.thewentworth.com/wp-content/gallery/property/JRG_9176.jpg"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Jackson Village, USA
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.opalcollection.com/wentworth/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px]"
                src="https://phgcdn.com/images/uploads/PSMWS/masthead/PSMWS-masthead-psmws35692127exterior2100x1695.jpg"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth By The Sea, New Castle, USA
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.sofitelsydney.com.au/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://images.unsplash.com/photo-1618251276954-60d95a0f9108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Advertisement
              </p>
            </a>
          </div>
          {/* ----------------------------------------------------------------- */}

          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://wentworthhouse.co.uk/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/dd/c6/61/exterior.jpg?w=1200&h=-1&s=1"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth House Hotel Bath, UK
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.agoda.com/wentworth-plaza-hotel/hotel/perth-au.html?cid=1844104"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Wentworth_Hotel%2C_Perth%2C_January_2021_03.jpg/1280px-Wentworth_Hotel%2C_Perth%2C_January_2021_03.jpg"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Plaza Hotel Perth, Australia
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.wentworthmansion.com/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://www.hotel-boutique.it/wp-content/uploads/2020/08/1-35-800x480.jpg"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Wentworth Hotel Charleston, USA
              </p>
            </a>
          </div>
          <div className="text-center bg-[#ffffff] shadow-md shadow-[#040c16]/30 rounded-lg hover:scale-105 duration-300 max-w-[300px] ">
            <a
              href="https://www.sofitelsydney.com.au/"
              target="blank"
              rel="noopener noreferrer"
            >
              <img
                className=" rounded-t-lg mx-auto w-full h-[200px] "
                src="https://images.unsplash.com/photo-1618251276954-60d95a0f9108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Hotel img"
              />
              <p className="text-[#222222] text-sm md:text-lg font-semibold p-4">
                Advertisement
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
