let words = ["HTML", "CSS", "JavaScript", "React"];
        let search = "JavaScript";

        let index = words.indexOf(search);
        let resultText = (index !== -1) 
            ? `"${search}" знайдено в масиві на позиції ${index}.`
            : `"${search}" не знайдено.`;

        document.getElementById("result").textContent = resultText;