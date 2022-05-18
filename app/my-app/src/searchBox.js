import { greeting } from "./dynamics";
import React, { useState } from "react";

export default function SearchBox() {
  let text = greeting();
  let search = (
    <input 
      onKeyPress={(e) => {
        if (e.key === "Enter") {
        }
      }}
      type="text"
      placeholder="HOLA"
    />
  );

  return search;
}
function search(query) {
  return "https://google.com/search?q=" + "query";
}
