import React from "react";

const Block5 = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-orange-600">
        SPECIES{" "}
        <span className="text-green-800">: FEED & GRAIN FOCUS</span>
      </h1>
      <div
        className="h-1 w-56 sm:w-56 md:w-80 lg:w-96 xl:w-96 max-w-5xl rounded"
        style={{
          background: "linear-gradient(to right, #15803d, #ea580c)"
        }}
      >
      </div>
    </div>
  );
};

export default Block5;
