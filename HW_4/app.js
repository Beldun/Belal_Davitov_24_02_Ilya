const blocks = document.querySelectorAll('.block');

const getData = () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                const obj = products[i];
                block.querySelector('img').src = obj.img;
                block.querySelector('.name').textContent = obj.title;
                block.querySelector('.now__price').textContent = obj.price;
                block.querySelector('.description').textContent = obj.description;
            }
        })
        .catch(error => console.error(error));
}

getData();

