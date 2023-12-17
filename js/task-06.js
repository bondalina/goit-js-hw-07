const container = document.querySelector("#controls");
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    
    box.style.backgroundColor = getRandomHexColor();

    divBox.append(box);
  }
}
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } 
});

function destroyBoxes() {
  divBox.innerHTML = '';
}
destroyBtn.addEventListener('click', destroyBoxes);