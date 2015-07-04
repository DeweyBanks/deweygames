var questions = [
    new Questions(
        "Who was the first President of the United States?",
          [
            "George Washington",
            "Thomas Jefferson"
          ],
        "George Washington"
        ),
    new Questions(
      "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
        [
          "Pi",
          "42"
        ],
        "42"
        )
];

var quiz = new Quiz(questions);

Quiz_ui.displayNextQuestion();
