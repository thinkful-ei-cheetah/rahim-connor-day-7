const store = (function() {
  let dogs = null;

  function setDogs(numDogs) {
    dogs = numDogs;
  }

  function getNumDogs() {
    return dogs;
  }

  return {
    setDogs,
    getNumDogs
  };
})();
