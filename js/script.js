const container = document.getElementById('blocks');
const sortBtn = document.getElementById('sort');
const shuffleBtn = document.getElementById('shuffle');

const list = [1,2,3,4,5,6,7,8,9];

const getEl = i => {
    const el = document.createElement("li");
    el.classList.add(`block${i}`);
    el.textContent = i;
    return el;
}

const shuffleItems = () => {
    sortBtn.disabled = false;
    const shuffledItems = list.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    shuffledItems.forEach(i => container.append(getEl(i)))
}

const sortItems = () => {
    sortBtn.disabled = true;
    const sortedItems = list.sort();
    container.innerHTML = '';
    sortedItems.forEach(i => container.append(getEl(i)))
}

sortBtn.addEventListener('click', sortItems);
shuffleBtn.addEventListener('click', shuffleItems);

list.forEach(i => container.append(getEl(i)))
