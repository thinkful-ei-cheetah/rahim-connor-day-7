const renderFunction = (function() {
  function renderImages() {
    let renderedImages = genarateElementString();
    $('.js-image-display').html(renderedImages);
    console.log(renderedImages);
  }

  function createElement(imageURL) {
    return `<li><img src=${imageURL} alt="dog"</li>`;
  }

  function genarateElementString() {
    const localStore = store.getImagesArray();
    const item = localStore.map(item => createElement(item));
    return item.join('');
  }
  return {
    renderImages
  };
})();
