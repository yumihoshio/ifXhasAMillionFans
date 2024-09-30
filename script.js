const variableText = document.querySelector(".variable-text");

const variableTextLoad = () => {
    setTimeout(() => {
        variableText.textContent = "Suisei "
    },0)
    setTimeout(() => {
        variableText.textContent = "Kirby "
    },4000)
    setTimeout(() => {
        variableText.textContent = "Yumi "
    },8000)
}

variableTextLoad();
setInterval(variableTextLoad, 12000);

const btn = document.querySelector("#submit");
const changes = document.querySelectorAll(".change");
const input = document.querySelector("#name");

btn.addEventListener("click", (e) => {
    if (input && input.value) { /* Check to see if it's empty*/
        changes.forEach((change) => {
            e.preventDefault();
            change.innerText = input.value;
        })
    } else { /*Make the default value "Suisei" if there's no input*/
        changes.forEach((change) => {
            e.preventDefault();
            change.innerText = 'Suisei';
        })
    }
});