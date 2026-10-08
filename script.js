const monkey = document.querySelector("#monkey");
const animal = document.querySelector("#animal");
const animalEmoji = document.querySelector("#animal-emoji");
const animalName = document.querySelector("#animal-name");
const questionCard = document.querySelector("#question-card");
const answersBox = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const continueButton = document.querySelector("#continue-button");
const startCard = document.querySelector("#start-card");
const endCard = document.querySelector("#end-card");
const heartsDisplay = document.querySelector("#hearts");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector("[role='progressbar']");
const stageLabel = document.querySelector("#stage-label");
const soundToggle = document.querySelector("#sound-toggle");
const timerBox = document.querySelector("#timer-box");
const timerValue = document.querySelector("#timer-value");
const timerFill = document.querySelector("#timer-fill");
const pauseOverlay = document.querySelector("#pause-overlay");
const playerNameInput = document.querySelector("#player-name");
const playfield = document.querySelector("#playfield");
const monkeyEmoji = document.querySelector("#monkey-emoji");
const soundEffects = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46];

let stage = 0;
let lives = 3;
let score = 0;
let lane = 1;
let active = false;
let answered = false;
let soundOn = true;
let audioContext;
let paused = false;
let timerInterval;
let timeLeft = 30;
let chosenDifficulty = "easy";
let chosenSubject = "english";
let playerName = "";
let playerAnimal = "🐒";
let gameQuestions = [];
let musicTimer;
let musicIndex = 0;

const totalQuestions = 10;
const lanePositions = ["20%", "40%", "60%", "80%"];
const subjectNames = { english: "Tiếng Anh", math: "Toán", it: "Tin học", literature: "Ngữ văn", science: "Hóa - Lý" };
const difficultyNames = { easy: "Dễ", medium: "Trung bình", hard: "Khó" };
const animals = ["🦜", "🐸", "🦎", "🐢"];
const animalNames = ["Vẹt xanh", "Ếch lá", "Thằn lằn", "Rùa xanh"];

function playTone(frequency, duration = 0.12, type = "sine", loudness = 0.08) {
  if (!soundOn) return;
  try {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    volume.gain.setValueAtTime(loudness, audioContext.currentTime);
    volume.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    oscillator.connect(volume);
    volume.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch {
    // Game van chay duoc neu trinh duyet khong ho tro Web Audio.
  }
}

function startMusic() {
  if (!soundOn || musicTimer) return;
  try {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    const playNextNote = () => {
      playTone(soundEffects[musicIndex], 0.28, "sine", 0.018);
      musicIndex = (musicIndex + 1) % soundEffects.length;
    };
    playNextNote();
    musicTimer = window.setInterval(playNextNote, 360);
  } catch {
    musicTimer = undefined;
  }
}

function stopMusic() {
  window.clearInterval(musicTimer);
  musicTimer = undefined;
}

function updateStatus() {
  const completedQuestions = Math.min(stage + (answered ? 1 : 0), totalQuestions);
  heartsDisplay.textContent = "❤️".repeat(lives) + "🖤".repeat(3 - lives);
  heartsDisplay.setAttribute("aria-label", `Còn ${lives} trái tim`);
  progressText.textContent = `${completedQuestions} / ${totalQuestions}`;
  progressBar.style.width = `${(completedQuestions / totalQuestions) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(completedQuestions));
  document.querySelector("#score-display").innerHTML = `${score} <small>/ 10</small>`;
  stageLabel.textContent = active ? `${subjectNames[chosenSubject]} • Câu ${Math.min(stage + 1, totalQuestions)}/10` : "Sẵn sàng vào rừng";
}

function placeMonkey() {
  const playfield = document.querySelector("#playfield");
  const selectedVine = document.querySelectorAll(".vine")[lane];
  const x = (parseFloat(getComputedStyle(selectedVine).left) / playfield.clientWidth) * 100;
  monkey.style.left = `${x}%`;
  monkey.style.top = "79%";
  animal.style.left = `${x}%`;
  monkey.setAttribute("aria-label", `Chú khỉ ở dây leo ${lane + 1}`);
  document.querySelectorAll(".vine").forEach((vine, index) => {
    vine.classList.toggle("selected", index === lane && active);
  });
}

function stopTimer() {
  window.clearInterval(timerInterval);
  timerInterval = undefined;
}

function startTimer() {
  stopTimer();
  if (chosenDifficulty !== "hard" || paused || answered) return;
  timerValue.textContent = String(timeLeft);
  timerFill.style.width = `${(timeLeft / 30) * 100}%`;
  timerInterval = window.setInterval(() => {
    timeLeft -= 1;
    timerValue.textContent = String(timeLeft);
    timerFill.style.width = `${(timeLeft / 30) * 100}%`;
    if (timeLeft <= 0) answerQuestion(-1, true);
  }, 1000);
}

function showQuestion() {
  if (!active || paused || !questionCard.hidden || answered) return;
  if (stage >= totalQuestions) return showEnding(true);
  const current = gameQuestions[stage];
  lane = Math.floor(Math.random() * lanePositions.length);
  document.querySelector("#question-topic").textContent = `${subjectNames[chosenSubject]} • ${difficultyNames[chosenDifficulty]}`;
  document.querySelector("#question-number").textContent = `CÂU ${stage + 1} / ${totalQuestions}`;
  document.querySelector("#question-title").textContent = current.question;
  animalEmoji.textContent = animals[lane];
  animalName.textContent = animalNames[lane];
  animal.classList.remove("escaped", "approaching", "arrive");
  playfield.classList.add("animals-busy");
  timeLeft = 30;
  timerBox.hidden = chosenDifficulty !== "hard";
  if (chosenDifficulty === "hard") {
    timerValue.textContent = "30";
    timerFill.style.width = "100%";
    animal.style.setProperty("--approach-duration", "30s");
  } else {
    animal.style.setProperty("--approach-duration", "22s");
  }
  questionCard.hidden = false;
  feedback.hidden = true;
  continueButton.hidden = true;
  answersBox.replaceChildren();
  current.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = answer;
    button.addEventListener("click", () => answerQuestion(index));
    answersBox.append(button);
  });
  placeMonkey();
  void animal.offsetWidth;
  animal.classList.add("approaching");
  stageLabel.textContent = `${subjectNames[chosenSubject]} • Câu ${stage + 1}/10`;
  startTimer();
  playTone(440, 0.1);
}

function answerQuestion(choice, timedOut = false) {
  if (answered) return;
  answered = true;
  stopTimer();
  const current = gameQuestions[stage];
  const selectedButton = answersBox.querySelectorAll("button")[choice];
  const isCorrect = !timedOut && choice === current.correct;
  animal.classList.remove("approaching");
  answersBox.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    button.classList.add("locked");
  });
  if (selectedButton) selectedButton.classList.add(isCorrect ? "correct" : "incorrect");

  if (isCorrect) {
    score += 1;
    feedback.textContent = "Chính xác! Con vật biến mất, bạn nhận được 1 điểm!";
    feedback.className = "feedback success";
    animal.classList.add("escaped");
    playTone(660, 0.12);
    window.setTimeout(() => playTone(880, 0.16), 100);
    window.setTimeout(() => playTone(1046.5, 0.2), 210);
  } else {
    lives -= 1;
    feedback.textContent = timedOut ? "Hết giờ! Câu này tính là sai, bạn mất 1 trái tim." : lives === 0 ? "Ôi, bạn đã hết tim mất rồi!" : "Chưa đúng rồi! Mất 1 trái tim, cố lên nhé!";
    feedback.className = "feedback error";
    animal.classList.add("escaped");
    playTone(180, 0.22, "triangle");
    window.setTimeout(() => playTone(130, 0.24, "triangle"), 160);
  }

  playfield.classList.remove("animals-busy");
  updateStatus();
  feedback.hidden = false;
  continueButton.hidden = false;
  continueButton.textContent = lives === 0 || stage === totalQuestions - 1 ? "Xem kết quả" : "Câu tiếp theo";
  stageLabel.textContent = isCorrect ? `+1 điểm • ${score}/10` : timedOut ? "Hết giờ • Mất một trái tim" : "Mất một trái tim";
}

function continueQuestion() {
  if (!active || !answered) return;
  if (lives === 0) return showEnding(false);
  stage += 1;
  answered = false;
  questionCard.hidden = true;
  updateStatus();
  if (stage >= totalQuestions) {
    placeMonkey();
    window.setTimeout(() => showEnding(true), 430);
    return;
  }
  placeMonkey();
  monkey.classList.remove("climbing");
  void monkey.offsetWidth;
  monkey.classList.add("climbing");
  playTone(520, 0.1);
  window.setTimeout(showQuestion, 460);
}

function showEnding(won) {
  active = false;
  document.body.classList.remove("game-paused");
  stopTimer();
  stopMusic();
  pauseOverlay.hidden = true;
  pauseOverlay.setAttribute("aria-hidden", "true");
  questionCard.hidden = true;
  animal.classList.remove("arrive", "approaching");
  endCard.hidden = false;
  document.querySelector("#end-emoji").textContent = won ? "🎉" : "💔";
  document.querySelector("#end-eyebrow").textContent = won ? "KHO BÁU ĐÃ TÌM THẤY" : "CHUYẾN ĐI KẾT THÚC";
  document.querySelector("#end-title").textContent = won ? `Chúc mừng, ${playerName}!` : "Game Over";
  document.querySelector("#end-message").textContent = won ? `Bạn đã ghi được ${score}/10 điểm và hái được chùm chuối!` : `${playerName}, bạn ghi được ${score}/10 điểm. Thử lại để chinh phục khu rừng nhé!`;
  document.querySelector("#treasure").classList.toggle("treasure-won", won);
  stageLabel.textContent = won ? "Đã chạm đích!" : "Hết trái tim";
  if (won) {
    monkey.classList.add("victory-bounce");
    playTone(660, 0.15);
    window.setTimeout(() => playTone(880, 0.2), 140);
    window.setTimeout(() => playTone(1040, 0.25), 300);
  }
}

function startGame() {
  playerName = playerNameInput.value.trim();
  if (!playerName) {
    playerNameInput.setCustomValidity("Bạn hãy nhập tên trước khi vào rừng nhé!");
    playerNameInput.reportValidity();
    playerNameInput.addEventListener("input", () => playerNameInput.setCustomValidity(""), { once: true });
    return;
  }
  chosenSubject = document.querySelector('input[name="subject"]:checked').value;
  chosenDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
  playerAnimal = document.querySelector('input[name="player-animal"]:checked').value;
  gameQuestions = [...questionBank[chosenSubject][chosenDifficulty]].sort(() => Math.random() - 0.5);
  stage = 0;
  lives = 3;
  score = 0;
  lane = 1;
  answered = false;
  active = true;
  paused = false;
  document.body.classList.remove("game-paused");
  playfield.classList.remove("animals-busy");
  stopTimer();
  document.querySelector("#setup-card").hidden = true;
  endCard.hidden = true;
  questionCard.hidden = true;
  pauseOverlay.hidden = true;
  pauseOverlay.setAttribute("aria-hidden", "true");
  document.querySelector("#player-label").textContent = playerName;
  document.querySelector("#player-avatar").textContent = playerAnimal;
  monkeyEmoji.textContent = playerAnimal;
  document.querySelector("#selection-label").textContent = `${subjectNames[chosenSubject]} • ${difficultyNames[chosenDifficulty]}`;
  document.querySelector("#jungle-eyebrow").textContent = `RỪNG NHIỆT ĐỚI • ${subjectNames[chosenSubject].toUpperCase()}`;
  document.querySelector("#jungle-title").innerHTML = `Chuyến leo <em>${subjectNames[chosenSubject]}</em>`;
  document.querySelector("#difficulty-note").textContent = chosenDifficulty === "hard" ? "Chế độ Khó: mỗi câu có 30 giây. Hết giờ sẽ mất 1 trái tim." : `Độ khó ${difficultyNames[chosenDifficulty]} • Trả lời 10 câu để hái chuối.`;
  monkey.classList.remove("victory-bounce");
  document.querySelector("#treasure").classList.remove("treasure-won");
  updateStatus();
  placeMonkey();
  showQuestion();
  startMusic();
}

function openMenu() {
  if (!active || paused) return;
  paused = true;
  document.body.classList.add("game-paused");
  stopTimer();
  stopMusic();
  pauseOverlay.hidden = false;
  pauseOverlay.setAttribute("aria-hidden", "false");
  document.querySelector("#resume-button").focus();
}

function resumeGame() {
  if (!paused) return;
  paused = false;
  document.body.classList.remove("game-paused");
  pauseOverlay.hidden = true;
  pauseOverlay.setAttribute("aria-hidden", "true");
  startMusic();
  if (questionCard.hidden && active && stage < totalQuestions) showQuestion();
  else if (!questionCard.hidden && !answered) startTimer();
}

function exitToSetup() {
  active = false;
  paused = false;
  document.body.classList.remove("game-paused");
  answered = false;
  stopTimer();
  stopMusic();
  pauseOverlay.hidden = true;
  pauseOverlay.setAttribute("aria-hidden", "true");
  questionCard.hidden = true;
  endCard.hidden = true;
  playfield.classList.remove("animals-busy");
  animal.classList.remove("approaching", "arrive", "escaped");
  document.querySelector("#setup-card").hidden = false;
  stageLabel.textContent = "Chọn màn phiêu lưu";
}

document.querySelector("#start-button").addEventListener("click", startGame);
document.querySelector("#restart-button").addEventListener("click", startGame);
document.querySelector("#end-exit-button").addEventListener("click", exitToSetup);
continueButton.addEventListener("click", continueQuestion);
document.querySelector("#menu-button").addEventListener("click", openMenu);
document.querySelector("#close-menu").addEventListener("click", resumeGame);
document.querySelector("#resume-button").addEventListener("click", resumeGame);
document.querySelector("#menu-restart").addEventListener("click", startGame);
document.querySelector("#exit-button").addEventListener("click", exitToSetup);
document.querySelectorAll('input[name="difficulty"]').forEach((input) => {
  input.addEventListener("change", () => {
    document.querySelector("#difficulty-note").textContent = input.value === "hard"
      ? "Chế độ Khó: mỗi câu có 30 giây. Hết giờ sẽ mất 1 trái tim."
      : `Chế độ ${difficultyNames[input.value]} không giới hạn thời gian.`;
  });
});
document.querySelectorAll('input[name="player-animal"]').forEach((input) => {
  input.addEventListener("change", () => {
    monkeyEmoji.textContent = input.value;
    document.querySelector("#player-avatar").textContent = input.value;
  });
});
soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.textContent = soundOn ? "🔊" : "🔇";
  soundToggle.setAttribute("aria-label", soundOn ? "Tắt âm thanh và nhạc nền" : "Bật âm thanh và nhạc nền");
  if (!soundOn) stopMusic();
  else if (active && !paused) startMusic();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && paused) return resumeGame();
  if (event.key === "Escape" && active) return openMenu();
  if (paused) return;
  if (event.key === "Enter" && !document.querySelector("#setup-card").hidden) return startGame();
  if (!active || questionCard.hidden || answered) return;
  if (["1", "2", "3", "4"].includes(event.key)) {
    const answerButton = answersBox.querySelectorAll("button")[Number(event.key) - 1];
    if (answerButton) answerButton.click();
  }
});

updateStatus();
placeMonkey();