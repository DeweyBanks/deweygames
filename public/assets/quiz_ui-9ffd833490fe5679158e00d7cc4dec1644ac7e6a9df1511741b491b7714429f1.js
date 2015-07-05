var Quiz_ui = {
  displayNextQuestion: function () {
    if (quiz.ended()) {
      this.displayScore();
      } else {
        this.displayQuestion();
        this.displayChoices();
        this.displayProgress();
        }
    },
  displayQuestion: function () {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },
  displayChoices: function () {
    var choices = quiz.getCurrentQuestion().choices;

    for(var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
      }
    },

  displayScore: function() {
    var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += "<h2> Your score: " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
    },

  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
    },

  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      Quiz_ui.displayNextQuestion();
      }
    },

  displayProgress: function() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
  };
