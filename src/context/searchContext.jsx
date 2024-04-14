import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext([{}, () => {}, () => {}]);
const SearchProvider = ({ children }) => {
  const [values, setValues] = useState([]);
  const navigate = useNavigate();
  const handleClearSearch = () => {
    console.log("Clearing search and navigating home");
    setValues([]);
    navigate("/");
  };
  return (
    <SearchContext.Provider value={[values, setValues, handleClearSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

// custom hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
