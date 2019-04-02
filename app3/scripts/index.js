function main() {
  $('.js-dog-breed-form').on('submit', function(event) {
    event.preventDefault();
    const breed = $('#dog-breeds').val();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          $('.js-dog-breed').html(`<p>${'Breed not found'}</p>`);
          throw Error(`Request error ${response.status}`);
        }
      })
      .then(jsonResponse => {
        $('.js-dog-breed').html(`<img src=${jsonResponse.message}>`);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}

$(main);
