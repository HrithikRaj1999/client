import React from "react";
import { useSearch } from "../context/searchContext";
import { Card } from "antd";
import { Link } from "react-router-dom";

const SearchItems = () => {
  const [values, setValues, handleClearSearch] = useSearch();

  return (
    <div>
      <div>
        <h1>Search Items</h1>
        <h6>Found Items: {values.length}</h6>
        <button onClick={handleClearSearch}>Clear Search</button>
      </div>
      <div className="flex flex-wrap justify-center w-9/12 m-6 ">
        {values.length
          ? values?.map((item) => (
              <Link to={`/product-details/${item.slug}`}>
                <Card className=" rounded-3xl shadow-2xl m-10 bg-grey-100 hover:bg-stone-500">
                  <img
                    className="w-[200px] h-[200px] rounded-3xl"
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${item?._id}`}
                    alt={item}
                  />
                  <p>{item?.name}</p>
                  <p>{item?.price}</p>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchItems;
