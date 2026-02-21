function calculateScore() {
    let score = 0;

    for (let i = 1; i <= 15; i++) {
        let answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            score += parseInt(answer.value);
        }
    }

    let percentage = (score / 15) * 100;

    document.getElementById("progressBar").style.width = percentage + "%";

    if (percentage >= 80) {
        localStorage.setItem("lesson_1", "true");
        window.location.href = "certificate.html";
    } else {
        document.getElementById("result").innerHTML =
            "درجتك: " + percentage.toFixed(0) + "%<br> حاول مرة أخرى 💡";
    }
}