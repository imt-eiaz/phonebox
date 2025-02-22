"use client"; // This is a client component 👈🏽

import React, { useState } from "react";

const Iphone = () => {
  const [favNumber, setFavNumber] = useState();

  return (
    <>
      <div>
        <h1>iPhone Page CHANGED</h1>
        <a href="/">Go to home</a>
      </div>
      <form>
        <input
          type="number"
          value={favNumber}
          onChange={(e) => setFavNumber(e.target.value)}
        ></input>
        <input type="submit" value="Save"></input>
      </form>
    </>
  );
};

export default Iphone;
