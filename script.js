document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '39207240-5c487a84c917432aa28d0bb48';
    const perPage = 10;
    let currentPage = 1;

    function fetchImages(page) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://pixabay.com/api/?key=${apiKey}&q=editor&per_page=${perPage}&page=${page}`, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                displayImages(response.hits);
            }
        };
        xhr.send();
    }

    function displayImages(images) {
        const imageList = document.getElementById('image-list');
        images.forEach(function (image) {
            const imageUrl = image.webformatURL;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = image.tags;
            imageList.appendChild(imgElement);
        });
    }

    function loadMoreImages() {
        currentPage++;
        fetchImages(currentPage);
    }

    fetchImages(currentPage);

    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.addEventListener('click', loadMoreImages);
});
