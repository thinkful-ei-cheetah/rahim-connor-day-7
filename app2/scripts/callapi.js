'use strict';
/* global $ */

const callDogs = (function() {
  function getRandomDogInput() {
    $('.js-random-dog').on('submit', function(event) {
      event.preventDefault();
      store.setDogs($('#random-dogs').val());
      fetch(
        `https://dog.ceo/api/breeds/image/random/${$('#random-dogs').val()}`
      )
        .then(response => {
          store.clearImageArray();
          return response.json();
        })
        .then(jsonResponse => store.setImagesArray(jsonResponse.message))
        .then(response => renderFunction.renderImages());
    });
  }

  return {
    getRandomDogInput
  };
})();
