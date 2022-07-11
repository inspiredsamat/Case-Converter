let upperButton = document.getElementById("upper-case");
let lowerButton = document.getElementById("lower-case");
let properButton = document.getElementById("proper-case");
let sentenceButton = document.getElementById("sentence-case");
let saveButton = document.getElementById("save-text-file");

upperButton.addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toUpperCase();
})

lowerButton.addEventListener("click", function () {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
})

properButton.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let arr = text.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    let newText = arr.join(" ");

    document.querySelector("textarea").value = newText;

})

sentenceButton.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let arr = text.split(". ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }

    let newText = arr.join(". ");
    document.querySelector("textarea").value = newText;
})

saveButton.addEventListener("click", function () {
    let text = document.querySelector("textarea").value;
    let fileName = "text.txt";
    download(fileName,text);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}