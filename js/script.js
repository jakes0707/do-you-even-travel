
const myQuestions = [
    {
      question: "How many islands make up Japan?",
      answers: {
        a: "6,852",
        b: "7",
        c: "85",
        d: "315"
      },
      correctAnswer: "a"
    },
    {
      question: "Is Scandinavia in the north or south of Europe?",
      answers: {
        a: "North",
        b: "South",
        c: "Both"
      },
      correctAnswer: "a"
    },
    {
      question: "Which country is also called the Hellenic Republic?",
      answers: {
        a: "Bulgaria",
        b: "Greece",
        c: "Turkey",
        d: "None above"
      },
      correctAnswer: "b"
    },
    {
      question: "What is Europe's most mountainous country?",
      answers: {
        a: "Austria",
        b: "France",
        c: "Switzerland",
        d: "Germany"
      },
      correctAnswer: "c"
    },
    {
      question: "Okinawa is a volcano in which country?",
      answers: {
        a: "Japan",
        b: "North Korea",
        c: "Hong Kong"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the largest country in South America?",
      answers: {
        a: "Bolivia",
        b: "Colombia",
        c: "Brazil",
        d: "Ecuador"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the Seven Wonders of the World was in Ephesus?",
      answers: {
        a: "The Temple of Artemis",
        b: "Lighthouse of Alexandria",
        c: "Hanging Gardens of Babylon",
        d: "Great Pyramid of Giza"
      },
      correctAnswer: "a"
    },
    {
      question: "What was the original purpose of the leaning tower of Pisa?",
      answers: {
        a: "Lookout Tower",
        b: "Bell Tower",
        c: "Living Quarters"
      },
      correctAnswer: "b"
    },
    {
      question: "Which is a nickname of Japan?",
      answers: {
        a: "Land of Calm Water",
        b: "Land of the Rising Sun",
        c: "Land of Smiles",
        d: "Land of the Dragon"
      },
      correctAnswer: "b"
    },
    {
      question: "What island in San Francisco Bay was the site of an almost escape-proof prison?",
      answers: {
        a: "San Quentin",
        b: "Alcatraz",
        c: "San Francisco County"
      },
      correctAnswer: "b"
    },
    {
      question: "What was Ho Chi Minh City before it was called Ho Chi Minh City?",
      answers: {
        a: "Saigon",
        b: "Ha Long Bay",
        c: "Da Nang"
      },
      correctAnswer: "a"
    },
    {
      question: "Which country lies to the north of Austria and to the south of Poland?",
      answers: {
        a: "Slovakia",
        b: "Austria",
        c: "Czech Republic"
      },
      correctAnswer: "c"
    },
    {
      question: "How tall is the Eiffel Tower?",
      answers: {
        a: "324 metres",
        b: "636 metres",
        c: "1221 metres",
        d: "433 metres"
      },
      correctAnswer: "a"
    },
    {
      question: "What country has more volcanoes than any other?",
      answers: {
        a: "Papua New Guinea",
        b: "Malaysia",
        c: "Indonesia",
        d: "Singapore"
      },
      correctAnswer: "c"
    },
    {
      question: "What does the word `karaoke` mean in Japanese?",
      answers: {
        a: "Solo",
        b: "Singing",
        c: "Bad Singer",
        d: "Empty Orchestra"
      },
      correctAnswer: "d"
    },
    {
      question: "Approximately how many people live in Toyko?",
      answers: {
        a: "36 million",
        b: "25 million",
        c: "41 million",
        d: "18 million"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of these world famous sites is the tallest?",
      answers: {
        a: "Eiffel Tower",
        b: "Uluru",
        c: "Chrysler Building",
        d: "Great Pyramid of Giza"
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="slide__question"> ${currentQuestion.question} </div>
            <div class="slide__answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".slide__answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {

        answerContainers[questionNumber].style.color = "maroon";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  document.getElementById("restart").addEventListener("click", function() {
    location.reload();
  });
