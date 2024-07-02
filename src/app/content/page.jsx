"use client";
import { useEffect, useState } from "react";
import ListItem from "../components/list-item";
import Navbar from "../components/navbar";
import BottomButtons from "../components/bottom-buttons";

const ContentList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <ul>
        {" "}
        {items.map((item) => (
          <li key={item.id}>
            <ListItem
              id={item.id}
              image_url={item.image_url}
              item={item.item}
              price={item.price}
              shipping_method={item.shipping_method}
            />
          </li>
        ))}
      </ul>
      <BottomButtons />
    </div>
  );
};

export default ContentList;
