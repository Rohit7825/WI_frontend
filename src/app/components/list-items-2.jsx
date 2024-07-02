import Image from "next/image";
import React from "react";

const ListItem2 = ({ id, image_url, item, price, shipping_method }) => {
  return (
    <div className="">
      <div className="">
        <Image src="/icon1.png" alt="icon" height={80} width={80} />
        <p className="font-bold">{item}</p>
        <p className="text text-gray-700">MRP : {price}</p>
        <p className="text-gray-400 text-xs">{shipping_method}</p>
      </div>
    </div>
  );
};

export default ListItem2;
