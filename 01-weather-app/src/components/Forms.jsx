import React from "react";

const Forms = () => {
  return (
    <form className="flex  flex-col">
      <input
        className="h-10 rounded-lg p-2"
        type="text"
        id="insertCity"
        placeholder="Insert a City"
      ></input>

      <button className="px-5 py-2 bg-blue-700 text-white rounded-lg self-start mt-5">
        Submit
      </button>
    </form>
  );
};

export default Forms;
