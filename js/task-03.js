const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const newName = () => {
    const inputText = input.value.trim();
    let outputText;

    if (inputText === '') {
        outputText = 'Anonymous';
    } else {
        outputText = inputText;
    }

    output.textContent = outputText;
};

input.addEventListener("input", newName);
