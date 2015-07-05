function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0
}

Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
    }
  this.questionIndex++;
  };

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.questionIndex];
  };

Quiz.prototype.ended = function() {
  return this.questionIndex >= this.questions.length;
  };
