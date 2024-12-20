import {  useEffect } from "react";
import BagItem from "./BagItem";
import { useDispatch, useSelector } from "react-redux"


function BagList() {
  let dispatch = useDispatch()
  let bag = useSelector((state) => state.bag.bag)
  useEffect(() => {
    dispatch({ type: "GET BAG" });
  }, []);

  return (
    <ul>
      {bag.map((item) => (
        <BagItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default BagList;
