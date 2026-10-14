// Indian Heritage — Interactive Mini Quiz (Vanilla JS)
(function() {
  const questions = [
    {
      question: "What is one primary ecological advantage of the traditional Navadhanya mixed-cropping system?",
      options: [
        "It requires constant synthetic nitrogen chemicals.",
        "It provides drought resilience and nitrogen replenishment through multi-crop harmony.",
        "It only grows a single cash crop for fast industrial export.",
        "It relies entirely on diesel-powered deep groundwater borewells."
      ],
      correctAnswer: 1,
      explanation: "Navadhanya pairs nitrogen-fixing pulses directly with drought-hardy millets. Pulses fix atmospheric nitrogen into the soil while differing root depths utilize moisture efficiently without depleting water tables."
    },
    {
      question: "Why do traditional seed keepers store desi seeds with wood ash and dried neem leaves?",
      options: [
        "To change the natural leaf pigmentation.",
        "To make the seeds sterile.",
        "To provide organic natural insecticidal protection without toxic chemical poisons.",
        "To artificially increase grain weight."
      ],
      correctAnswer: 2,
      explanation: "Wood ash absorbs ambient moisture and suffocates storage weevils, while neem provides organic insecticidal protection for years without chemical poisoning."
    },
    {
      question: "In traditional Kalamkari textile art, what is the role of treating cloth with cow milk?",
      options: [
        "It acts as a natural binder that prevents natural dyes from feathering and smudging.",
        "It gives the cloth a sweet scent.",
        "It makes the fabric completely waterproof.",
        "It permanently bleaches all fibers to pure white."
      ],
      correctAnswer: 0,
      explanation: "Natural milk protein (casein) coats the cotton threads, preventing the liquid botanical dyes from feathering or bleeding across lines."
    }
  ];

  let currentIdx = 0;
  let selectedOption = null;
  let score = 0;
  let isAnswerChecked = false;

  function renderQuestion() {
    const q = questions[currentIdx];
    const questionNumberEl = document.getElementById('quiz-question-number');
    const scoreBadgeEl = document.getElementById('quiz-score-badge');
    const questionTitleEl = document.getElementById('quiz-question-title');
    const optionsListEl = document.getElementById('quiz-options-list');
    const feedbackBoxEl = document.getElementById('quiz-feedback-box');
    const btnSubmit = document.getElementById('btn-submit-quiz');
    const btnNext = document.getElementById('btn-next-quiz');

    if (!questionTitleEl || !optionsListEl) return;

    questionNumberEl.textContent = `Question ${currentIdx + 1} of ${questions.length}`;
    scoreBadgeEl.textContent = `Score: ${score}`;
    questionTitleEl.textContent = q.question;
    feedbackBoxEl.style.display = 'none';
    feedbackBoxEl.textContent = '';
    btnSubmit.style.display = 'inline-block';
    btnNext.style.display = 'none';

    optionsListEl.innerHTML = '';
    selectedOption = null;
    isAnswerChecked = false;

    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-opt-btn';
      btn.textContent = optText;
      btn.onclick = function() {
        if (isAnswerChecked) return;
        selectedOption = idx;
        const allBtns = optionsListEl.querySelectorAll('.quiz-opt-btn');
        allBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      };
      optionsListEl.appendChild(btn);
    });
  }

  window.submitQuizAnswer = function() {
    if (selectedOption === null) {
      alert("Please select an answer first.");
      return;
    }
    const q = questions[currentIdx];
    const optionsListEl = document.getElementById('quiz-options-list');
    const feedbackBoxEl = document.getElementById('quiz-feedback-box');
    const btnSubmit = document.getElementById('btn-submit-quiz');
    const btnNext = document.getElementById('btn-next-quiz');
    const allBtns = optionsListEl.querySelectorAll('.quiz-opt-btn');

    isAnswerChecked = true;

    allBtns.forEach((b, idx) => {
      if (idx === q.correctAnswer) {
        b.classList.add('correct');
      } else if (idx === selectedOption) {
        b.classList.add('wrong');
      }
    });

    if (selectedOption === q.correctAnswer) {
      score++;
      document.getElementById('quiz-score-badge').textContent = `Score: ${score}`;
      feedbackBoxEl.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
    } else {
      feedbackBoxEl.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
    }

    feedbackBoxEl.style.display = 'block';
    btnSubmit.style.display = 'none';
    btnNext.style.display = 'inline-block';

    if (currentIdx === questions.length - 1) {
      btnNext.textContent = 'Restart Quiz';
    } else {
      btnNext.textContent = 'Next Question →';
    }
  };

  window.nextQuizQuestion = function() {
    if (currentIdx < questions.length - 1) {
      currentIdx++;
    } else {
      currentIdx = 0;
      score = 0;
    }
    renderQuestion();
  };

  document.addEventListener('DOMContentLoaded', function() {
    renderQuestion();
  });
})();
