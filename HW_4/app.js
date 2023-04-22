const blocks = document.querySelectorAll('.block');

const getData = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-Type", "application/json")
    request.send();
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);
        const products = data.products;
        for (let i = 0; i < blocks.length; i++) {
            const block = blocks[i];
            const obj = products[i];
            block.querySelector('img').src = obj.img;
            block.querySelector('.name').textContent = obj.title;
            block.querySelector('.now__price').textContent = obj.price;
            block.querySelector('.description').textContent = obj.description;
        }
    });
}

getData();
