import { greeting } from "./dynamics";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState();
  function handleChange(event) {
    console.log(event.target.value);
  }
  let search = (
    <input
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          console.log("pressed ENTER");
          window.location.href = searchFunc(query);
        }
      }}
      type="text"
      placeholder={greeting()}
      onChange={(e) => setQuery(e.target.value)}
      className="searchbar"
    />
  );

  return search;
}

function searchFunc(query) {
  return "https://google.com/search?q=" + "query";
}
