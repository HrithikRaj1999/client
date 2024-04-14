import React, { useState } from "react";
import { useSearch } from "../../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const [values, setValues,] = useSearch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${searchText}`
      );
      navigate("/search");
      setValues(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="mb-3">
      <div className=" flex justify-center">
        <input
          className="bg-stone-100 mx-4 rounded-2xl py-2 px-3 w-[200px] border-s-black-50 text-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-600 rounded-2xl mx-3 p-2 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
