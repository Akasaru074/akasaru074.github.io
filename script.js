const list = document.querySelector(".list");
const input = document.querySelector(".inp");
const button = document.querySelector(".butt");
const triesEl = document.querySelector(".tries");

const TRIES = 3;

const words = [
    {text: "квас", indexes:[0]},
    {text: "дорога", indexes:[0, 4]},
    {text: "улица", indexes:[0, 2]},
    {text: "яблоко", indexes:[1, 3]},
    {text: "корабль", indexes:[0, 4, 6]},
    {text: "счастье", indexes:[2, 5, 6]},
    {text: "солнце", indexes:[4, 5]},
    {text: "ночь", indexes:[2]},
    {text: "тарелка", indexes:[1, 3, 5]},
    {text: "машина", indexes:[0, 2]},
    {text: "кровать", indexes:[0, 2, 6]},
    {text: "анатомия", indexes:[1, 3, 7]},
    {text: "аорта", indexes:[0, 2, 4]},
    {text: "хирург", indexes:[0, 2, 3]},
    {text: "терпение", indexes:[1, 3, 5]},
    {text: "вафли", indexes:[0, 2]},
    {text: "чайник", indexes:[0, 2, 3]},
    {text: "пельмени", indexes:[1, 3]},
    {text: "музыка", indexes:[0, 3]},
    {text: "тетрадь", indexes:[1, 3]},
    {text: "макароны", indexes:[0, 2, 6]},
    {text: "пакет", indexes:[1, 4]},
    {text: "математика", indexes:[0, 2, 5]},
    {text: "кольцо", indexes:[1, 3]},
    {text: "сковорода", indexes:[2, 4, 5]},
    {text: "бабочка", indexes:[0, 5]},
    {text: "надежда", indexes:[1, 3]},
    {text: "баня", indexes:[1]},
    {text: "капибара", indexes:[0, 4, 5]},
    {text: "алгоритм", indexes:[1, 5]},
    {text: "фокусник", indexes:[0, 3]},
    {text: "кружка", indexes:[1, 3]}
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
                el.textContent = "Ура, победа!";
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
