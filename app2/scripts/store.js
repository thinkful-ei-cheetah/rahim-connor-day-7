'use strict';
/* global $ */

const store = (function() {
  let dogs = null;
  let images = [];

  function setDogs(numDogs) {
    dogs = numDogs;
  }

  function getNumDogs() {
    return dogs;
  }

  function clearImageArray() {
    images.length = 0;
  }

  function setImagesArray(imageArray) {
    imageArray.map(function(imageURL) {
      images.push(imageURL);
    });
  }

  function getImagesArray() {
    return images;
  }

  return {
    setDogs,
    getNumDogs,
    setImagesArray,
    getImagesArray,
    clearImageArray
  };
})();
