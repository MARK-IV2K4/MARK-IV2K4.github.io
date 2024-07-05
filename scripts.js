// Fetch and display uploaded images
fetch('fetch_images.php')
    .then(response => response.json())
    .then(data => {
        const imageList = document.getElementById('imageList');
        imageList.innerHTML = ''; // Clear existing list
        data.forEach(image => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = 'uploads/' + image.filename;
            link.textContent = image.filename;
            link.setAttribute('download', ''); // Enable download attribute
            listItem.appendChild(link);
            imageList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
