import data from '../../data.json';
const slider = document.getElementById('slider');

data.forEach((item, index) => {
    const itemLi = document.createElement('li');
    itemLi.classList.add('item');
    itemLi.style.backgroundImage = `url(images/${item.image})`;
    itemLi.style.backgroundSize = 'cover';
    itemLi.innerHTML = `
        <div class="content">
            <h1 class="title">${item.title}</h1>
            <p class="description">${item.message}</p>
        </div>
    `;
    slider.appendChild(itemLi);
    console.log(index);
});

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

// handle click event
document.addEventListener('click', activate, false);

// handle keyboard event
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        slider.prepend(slider.lastElementChild);
    } else if (e.key === 'ArrowRight') {
        slider.append(slider.firstElementChild);
    }
});
