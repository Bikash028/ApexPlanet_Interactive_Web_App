const quizData = [
  { question: "भारत का राष्ट्रपिता किसे कहा जाता है?", options: ["भगत सिंह", "महात्मा गांधी", "नेहरू जी"], answer: 1 },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], answer: 1 },
  { question: "HTML का फुल फॉर्म क्या है?", options: ["HighText Machine Language", "HyperText Markup Language", "HyperTool Multi Language"], answer: 1 }
];

let currentQuiz = 0, score = 0;

function loadQuiz() {
  const q = quizData[currentQuiz];
  document.getElementById("question").textContent = q.question;
  document.getElementById("answers").innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    document.getElementById("answers").appendChild(btn);
  });
}
function checkAnswer(index) {
  if (index === quizData[currentQuiz].answer) score++;
  currentQuiz++;
  if (currentQuiz < quizData.length) loadQuiz();
  else showResult();
}
function showResult() {
  document.getElementById("question").textContent = '';
  document.getElementById("answers").innerHTML = '';
  document.getElementById("nextBtn").style.display = 'none';
  document.getElementById("result").textContent = `🎉 You scored ${score}/${quizData.length}!`;
}
document.getElementById("nextBtn").style.display = 'none';
loadQuiz();

const images = ["assets/images/img1.jpg", "assets/images/img2.jpg", "assets/images/img3.jpg"];
let imgIndex = 0;
function showImage() {
  document.getElementById("carouselImg").src = images[imgIndex];
}
function nextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  showImage();
}
function prevImage() {
  imgIndex = (imgIndex - 1 + images.length) % images.length;
  showImage();
}

 // Hindi Joke List
const hindiJokes = [
  "😄 पप्पू - मम्मी, आप हमेशा पापा को ही क्यों डांटती हो?<br>मम्मी - बेटा, क्योंकि मैं डांटने में 'Fair & Lovely' हूं!",
  "😆 टीचर: बताओ, सबसे ज्यादा मेहनती कौन है?<br>बच्चा: मोबाइल की बैटरी, दिन-रात काम करती है!",
  "😂 डॉक्टर: क्या तकलीफ है?<br>रोगी: तकलीफ ये है कि आप तकलीफ नहीं समझते!",
];

function fetchJoke() {
  const randomIndex = Math.floor(Math.random() * hindiJokes.length);
  document.getElementById("joke").innerHTML = hindiJokes[randomIndex];
}


function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}