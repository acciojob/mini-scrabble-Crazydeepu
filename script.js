//your code here
let evaluatedText = document.getElementById("evaluatedText");
        let letterCount = document.getElementById("letterCount");

        evaluatedText.addEventListener("input",calculateLength)

        function calculateLength() {
           // console.log("Someone wrote something");
            let word = evaluatedText.value;
            let wordLength = word.length;
            letterCount.innerHTML = wordLength;
        }
