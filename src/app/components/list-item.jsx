import Image from "next/image";
import React from "react";

const ListItem = ({ id, image_url, item, price, shipping_method }) => {
  return (
    <div className=" p-2 flex items-center justify-between ">
      <div className="flex gap-6 items-center">
        <Image src="/icon1.png" alt="icon" height={60} width={60} />
        <div>
          <p className="text-neutral-800 font-bold">{item}</p>
          <p className="font text-sm text-gray-700">MRP : {price}</p>
        </div>
      </div>

      <div>
        <p className="text-neutral-500 text-xs">{shipping_method}</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default ListItem;
