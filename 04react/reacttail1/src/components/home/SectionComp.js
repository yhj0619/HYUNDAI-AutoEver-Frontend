import React from "react";

function SectionComp() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center py-4 pt-10">
          <h4 className="text-2xl">title</h4>
          <p>teestestsetset</p>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-0 lg:flex-npwrap lg:gap-3 px-4 drop-shadow-md">
          <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-100 rounded-xl overflow-hidden drop-shadow-lg hover:drop-shadow-2xl hover:-translate-x-2 hover:-translate-y-2">
            <img src="./images/pro1.jpg" className="w-full" />
            <div className="px-4 py-4">
              <h3 className="font-bold text-xl mb-1">Card Title</h3>
              <p className="text-sm mb-3">안전 거래를 위해 나이키 쇼핑몰</p>
              <div className="px-4 py-2 text-sm bg-blue-200 inline-block rounded-md text-gray-800 hover:bg-blue-400 hover:text-white">
                Product
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img src="./images/pro1.jpg" className="w-full" />
            <div className="px-4 py-4">
              <h3 className="font-bold text-xl mb-2">Card Title</h3>
              <p className="text-sm mb-3">안전 거래를 위해 나이키 쇼핑몰</p>
              <div className="px-4 py-2 text-sm bg-blue-200 inline-block rounded-md text-gray-800 hover:bg-blue-400 hover:text-white">
                Product
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img src="./images/pro1.jpg" className="w-full" />
            <div className="px-4 py-4">
              <h3 className="font-bold text-xl mb-2">Card Title</h3>
              <p className="text-sm mb-3">안전 거래를 위해 나이키 쇼핑몰</p>
              <div className="px-4 py-2 text-sm bg-blue-200 inline-block rounded-md text-gray-800 hover:bg-blue-400 hover:text-white">
                Product
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img src="./images/pro1.jpg" className="w-full" />
            <div className="px-4 py-4">
              <h3 className="font-bold text-xl mb-2">Card Title</h3>
              <p className="text-sm mb-3">안전 거래를 위해 나이키 쇼핑몰</p>
              <div className="px-4 py-2 text-sm bg-blue-200 inline-block rounded-md text-gray-800 hover:bg-blue-400 hover:text-white">
                Product
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionComp;
