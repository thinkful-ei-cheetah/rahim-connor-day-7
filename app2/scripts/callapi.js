const callDogs = (function() {
  function getRandomDogInput() {
    $('.js-random-dog').on('submit', function(event) {
      event.preventDefault();
      store.setDogs($('#random-dogs').val());
      fetch(
        `https://dog.ceo/api/breeds/image/random/${$('#random-dogs').val()}`
      )
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse.message));
    });
  }

  return {
    getRandomDogInput
  };
})();
