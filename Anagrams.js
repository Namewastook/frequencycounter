document.getElementById("countButton").onclick = function () {

    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    const letterCounts = {};
    const wordCounts = {};
    const words = typedText.split(" ");

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];



        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;

        }
    }
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }


    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];

        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord] += 1;

        }
    }
    for (let words in wordCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + words + "\": " + wordCounts[words] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }
}