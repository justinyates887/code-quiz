function startTimer{
    let timer = document.getElementById('timer')
    let currentTime = new Date().getTime();
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    let stopTime = currentTime + secs;

    timer.innerHTML=('0' + secs)
}

function questionOne(){
    let questionOne = [
        {
            question: "What are the three main coding languages of basic web development?",
            answers: {
                a: 'HTML, JavaScript, and CSS',
                b: 'HTML, Bootstrap, and Java',
                c: 'Java, Python, and C#',
            },
            correctAnswer: 'a'
        },
    ]
}

//idk how the fuck to do this so whatever