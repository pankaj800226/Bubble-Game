// ----------------------------------💗Bubble Game💗-------------------------------------------
let timerInterval = 60;
let score = 0
let newHitRandomNumberGenrate = 0;
//random Bubble Generate ! 💗
const makeBubbleCreate = () => {
    let allBubble = '';
    for (let i = 0; i <= 139; i++) {
        let randomNumberGenrate = Math.floor(Math.random() * 10)
        allBubble +=
            `
        <div class="bubble">${randomNumberGenrate}</div>
        `
        document.querySelector('#pBottom').innerHTML = allBubble;
    }
}

//random Hit Generate ! 💗
const newHitNum = () => {
    newHitRandomNumberGenrate = Math.floor(Math.random() * 10)
    document.querySelector('#newHit').textContent = newHitRandomNumberGenrate
}

//timer function ! 💗
const timerValue = () => {
    let stop = setInterval(() => {
        if (timerInterval > 0) {
            timerInterval--
            document.querySelector('#timerValue').textContent = timerInterval
        }
        else {
            clearInterval(stop)
            document.querySelector('#pBottom').innerHTML = `<h1>Game Over ! </h1>`;
        }
    }, 1000);
}

//score function ! 💗
const scoreValue = () => {
    score += 10;
    document.querySelector('#scoreValue').textContent = score
}

// all bubble click and win game 💓
document.querySelector('#pBottom').addEventListener('click', (bubbleData) => {
    let clickBubbleItems = Number(bubbleData.target.textContent)
    if (clickBubbleItems === newHitRandomNumberGenrate) {
        scoreValue();
        makeBubbleCreate();
        newHitNum();
    } else {
        document.querySelector('#scoreValue').textContent = score -= 5

    }
})

//function colling 💗!
makeBubbleCreate();
newHitNum();
timerValue();
