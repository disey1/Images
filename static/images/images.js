fetch('http://localhost:8000/images')
    .then(response => response.json())
    .then(data => {
        const imagesContainer = document.getElementById('images');
        data.images.forEach(image => {
            const a = document.createElement('a');
            a.href = `/images/${image}`;
            const colElement= document.createElement('div');
            imagesContainer.appendChild(colElement);
            colElement.className = "col";
            const cardShadow= document.createElement('div');
            cardShadow.className ="card shadow-sm";
            colElement.appendChild(cardShadow);
            cardShadow.appendChild(a);
            const imageElement = document.createElement('img');
            imageElement.src = `/images/${image}`;
            imageElement.alt = image;
            imageElement.className ="bd-placeholder-img card-img-top";
            imageElement.width="100%";
            imageElement.height = "225";
            a.appendChild(imageElement);
        });
    })