const store = (function() {
  let dogs = null;
  let images = [];

  function setDogs(numDogs) {
    dogs = numDogs;
  }

  function getNumDogs() {
    return dogs;
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
    getImagesArray
  };
})();
