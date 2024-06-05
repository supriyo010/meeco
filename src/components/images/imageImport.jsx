import React from "react";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./", false, /\.(jpg|png)$/));

const originalArray = Object.values(images);

const midpoint = Math.ceil(originalArray.length / 2);

const firstHalf = originalArray.slice(0, midpoint);
const secondHalf = originalArray.slice(midpoint);

const combinedArray = firstHalf.map((item, index) => [item, secondHalf[index]]);

export default { images, combinedArray };
