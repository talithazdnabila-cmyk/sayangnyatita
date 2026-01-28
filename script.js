function nextStep() {
    document.getElementById('mainBtn').style.display = 'none';
    document.getElementById('headline').innerText = 'Maafin Tita ya Sayang? 🥺';
    document.getElementById('message').innerText = 'Aku janji aku bakal jaga batasan.aku sealalu inget kalo kamu ngasi aku kepercayaan, aku di sini nungguin kamu sambil bawa pelukan virtual!';
    document.getElementById('hiddenContent').classList.remove('hidden');
}

function spamLove() {
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.duration = Math.random() * 2 + 3 + 's';
    
    document.getElementById('love-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}