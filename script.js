const list = document.querySelector(".list");
const input = document.querySelector(".inp");
const button = document.querySelector(".butt");
const triesEl = document.querySelector(".tries");

const TRIES = 3;

const words = [
    {text: "квас", indexes:[0]},
    {text: "дорога", indexes:[0, 4]}
    {text: "улица", indexes: [2]}
];

let word = words[Math.floor(Math.random() * words.length)];

for (let i = 0; i < word.text.length; i++) {
    let elem = document.createElement("li");
    word.indexes.includes(i) ? elem.innerText = word.text[i] : elem.innerText = "_";
    list.appendChild(elem);
}
triesEl.textContent += TRIES;

(()=>{
    let tries = TRIES;

button.addEventListener("click", ()=>{
    let answer = input.value.toLowerCase();
    let lis = document.getElementsByTagName("li");
    let hasFound = false;
    input.value = "";
    for (let i = 0; i < word.text.length; i++) {
        if(word.text[i] == answer && !word.indexes.includes(i)) {
            lis[i].innerText = answer;
            word.indexes.push(i);
            if(word.indexes.length == word.text.length) {
                const el = document.createElement("h1");
                el.textContent = "Ты выйграл!";
                document.body.textContent = "";
                document.body.appendChild(el);
                return;
            }
            console.log("успешно");
            hasFound = true;
            continue;
        }
        if(i == word.text.length - 1 && !hasFound) {
            tries--;
            triesEl.textContent = "Оставшиеся попытки: " + tries;
            if (tries <= 0) {
                document.body.innerText = "Ты проиграл, перезагрузи страницу!";
            }
            console.log("неудачно");
            console.log("оставшеися попытки: " + tries);
        }
    }
});

})()
