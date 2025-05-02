const players = [
    { name: 'Snehal Shinde', points: 10, message: '10 extra for the love of your life ❤️' },
    { name: 'Samiksha Shinde', points: 10, message: '10 extra for your first daughter 👧' },
    { name: 'Tanishq Shinde', points: 10, message: '10 extra for your endless badbad 🗣️' },
    { name: 'Shamala Shinde', points: 10, message: '10 extra for the giving me this life ❤️' },
    { name: 'Appa Shinde', points: 10, message: '10 extra for the savage bad words 😂' },
    { name: 'Chetana Padhye', points: 10, message: '10 extra for you greatness ❤️' },
    { name: 'Bhai Shinde', points: 10, message: '' },
    { name: 'Smita Shinde', points: 10, message: '' },
    { name: 'Ankit Shinde', points: 10, message: '' },
    { name: 'Trupti Dhotre', points: 10, message: '' },
    { name: 'Prashant Dhotre', points: 10, message: '' },
    { name: 'Neeraj Dhotre', points: 10, message: '' },
    { name: 'Rahul Padhye', points: 10, message: '10 extra for always being a good friend  👨‍👩‍👧‍👦' },
    { name: 'Renuka Padhye', points: 10, message: '' },
    { name: 'Sharvin Padhye', points: 10, message: '' }
  ];
  
  const scorecard = document.getElementById('scorecard');
  const totalScore = document.getElementById('totalScore');
  const celebrateBtn = document.getElementById('celebrateBtn');
  const cakeAnimation = document.getElementById('cakeAnimation');
  const countdownEl = document.getElementById('countdown');
  
  // Render player cards
  function renderPlayerCards() {
    players.forEach(player => {
      const card = document.createElement('div');
      card.classList.add('player-card');
      card.innerHTML = `
        <div class="player-name">${player.name}</div>
        <div class="player-points">${player.points} points</div>
        ${player.message ? `<div class="player-message">${player.message}</div>` : ''}
      `;
      scorecard.appendChild(card);
    });
  }
  
  // Calculate total score
  function calculateTotalScore() {
    const total = players.reduce((sum, player) => sum + player.points, 0);
    totalScore.textContent = total;
  }
  
  // Confetti animation
  function startConfetti() {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });
  }
  
  // Countdown for cake animation
  function startCakeCountdown() {
    let count = 3;
    countdownEl.textContent = count;
    const interval = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count === 0) {
        clearInterval(interval);
        cakeAnimation.style.display = 'none'; // Hide cake after countdown
      }
    }, 1000);
  }
  
  // Message for Winning Coach and Redirect
  celebrateBtn.addEventListener('click', () => {
    startConfetti();
    cakeAnimation.style.display = 'block';
    startCakeCountdown();
  
    // Redirect to winner page after celebration
    setTimeout(() => {
      window.location.href = 'winner.html';  // Redirects to winner page after the animation
    }, 5000);  // Wait 5 seconds after the animation
  });
  
  // Initializing the page with confetti
  window.addEventListener('load', () => {
    startConfetti();
    renderPlayerCards();
    calculateTotalScore();
  });
  