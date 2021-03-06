import { greeting } from "../../utils/dynamics";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState();
  

  let search = (
    <input
      onKeyPress={(e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
          console.log("pressed ENTER");
          window.location.href = searchFunc(query);
        }
      }}
      type="text"
      placeholder={greeting()}
      onChange={(e) => {setQuery(e.target.value);
      }}
      className="searchbar"
      value = {query}
    />
  );

  return search;
}

function searchFunc(query) {
  return "https://google.com/search?q=" + query;
}
