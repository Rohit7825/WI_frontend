import React from "react";

const AddItem = () => {
  return (
    <div>
      <div className=" bg--50 flex bg-purple-200 flex-col items-center justify-between">
        <div className="flex justify-between w-full">
          <h1 className="text-black font-bold p-4">Add Item</h1>
          <button className="text-green-500  p-4">Add</button>
        </div>
      </div>
      <div className=" w-full pt-8 flex flex-col justify-center items-center">
        <input
          className=" w-[300px] p-3 pl-6 mb-4 rounded-full bg-gray-100"
          type="text"
          placeholder="Item Name"
        />
        <input
          className="w-[300px] p-3 pl-6 mb-4 rounded-full bg-gray-100"
          type="text"
          placeholder="Item Price"
        />
        <select>
          <option>Shipping method</option>
          <options>Same day</options>
          <options>None</options>
        </select>
      </div>
    </div>
  );
};

export default AddItem;
