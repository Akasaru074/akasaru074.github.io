const list = document.querySelector(".list");
const input = document.querySelector(".inp");
const button = document.querySelector(".butt");

const words = [
    {word: "ананас", indexes:[0, 5]}
];

let word = words[Math.floor(Math.random() * words.length)];

for (let i = 0; i < word.word.length; i++) {
    let elem = document.createElement("li");
    word.indexes.includes(i) ? elem.innerText = word.word[i] : elem.innerText = "_";
    list.appendChild(elem);
}

button.addEventListener("click", ()=>{
    let answer = input.value.toLowerCase();
    let lis = document.getElementsByTagName("li");
    if(word.word.includes(answer)) {
        if(word.word.indexOf(answer) != word.word.lastIndexOf(answer)) 
            for (let i = word.word.indexOf(answer); i < word.word.lastIndexOf(answer); i++) {
                if(word.word[i] == answer && lis[i] == "_") lis[word.word.split("").indexOf(answer)].innerText = answer;
            }
        else lis[word.word.split("").indexOf(answer)].innerText = answer;
    }
});