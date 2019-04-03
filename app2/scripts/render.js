'use strict';
/* global $ */

const renderFunction = (function() {
  function renderImages() {
    let renderedImages = genarateElementString();
    $('.js-image-display').html('');
    $('.js-image-display').html(renderedImages);
  }

  function createElement(imageURL) {
    return `<li><img src=${imageURL} alt="dog"</li>`;
  }

  function genarateElementString() {
    const localStore = store.getImagesArray();
    console.log(localStore.length);
    const item = localStore.map(item => createElement(item));
    return item.join('');
  }
  return {
    renderImages
  };
})();
