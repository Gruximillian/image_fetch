window.addEventListener('load', function() {
    'use strict';

    const imageContainer = document.querySelector('#image-container');
    const image = document.querySelector('#image');
    const imageLocation = 'images/image.jpg';

    document.body.addEventListener('click', () => {
        imageContainer.classList.add('loading');

        fetch(`../${imageLocation}`, {
            method: 'GET'
        })
        .then(() => {
            // setTimeout(() => {
                image.src = imageLocation;
                imageContainer.classList.remove('loading');
            // }, 300);
        })
        .catch(err => console.log(err));
    });

});
