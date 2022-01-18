import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryAsync, selectCategoryData } from "./categorySlice";

export const Category = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectCategoryData);

  useEffect(() => {
    dispatch(fetchCategoryAsync());
  }, []);

  return (
    <div>
      <div className="list-group">
        {data.map((d) => (
          <a href="#" className="list-group-item list-group-item-action">
            {d.persianName}
          </a>
        ))}
      </div>
    </div>
  );
};
