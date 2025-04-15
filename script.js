const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
}
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});
const moodInputs = document.querySelectorAll('input[name="mood"]');

moodInputs.forEach(input => {
    input.addEventListener('change', function() {
        body.classList.remove('mood-calm', 'mood-gloomy', 'mood-inspired', 'mood-sleepy');
        body.classList.add(`mood-${this.id.split('-')[1]}`);
    });
});
function updateDateTime() {
    const now = new Date();
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');
    
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('en-US', options);
    
    timeElement.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}
updateDateTime();
setInterval(updateDateTime, 60000);
const playlistItems = document.querySelectorAll('.playlist-item');

playlistItems.forEach(item => {
    item.addEventListener('click', function() {
        playlistItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const title = this.querySelector('h4').textContent;
        const artist = this.querySelector('p').textContent;
        const imgSrc = this.querySelector('img').src;
        document.querySelector('.track-info h2').textContent = title;
        document.querySelector('.track-info p').textContent = `by ${artist}`;
        document.querySelector('.album-art img').src = imgSrc;
    });
});
const soundButtons = document.querySelectorAll('.sound-btn');

soundButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.style.backgroundColor = 'var(--accent)';
            this.style.color = 'white';
        } else {
            this.style.backgroundColor = 'var(--card-bg)';
            this.style.color = 'var(--text-primary)';
        }
    });
});
const timerButtons = document.querySelectorAll('.timer-btn');

timerButtons.forEach(button => {
    button.addEventListener('click', function() {
        timerButtons.forEach(btn => {
            btn.style.backgroundColor = 'var(--bg-secondary)';
            btn.style.color = 'var(--text-primary)';
        });
        
        this.style.backgroundColor = 'var(--accent)';
        this.style.color = 'white';
    });
});

function animateProgress() {
    const progress = document.querySelector('.progress');
    let width = 45;
    
        setInterval(() => {
        if (width >= 100) {
            width = 0;
        } else {
            width += 0.1;
        }
        progress.style.width = `${width}%`;
    }, 1000);
}
animateProgress();
