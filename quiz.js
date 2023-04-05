var questions = [  {    question: "Which year was Nazarbayev University founded?",    choices: ["2008", "2009", "2010", "2011"],
    correctAnswer: "2009",
  },
  {
    question: "What is the name of the programming language that this quiz is written in?",
    choices: ["Java", "C++", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the code for the color red in HTML?",
    choices: ["red", "green", "blue", "#FF0000"],
    correctAnswer: "#FF0000",
  },
  {
    question: "Which of the following countries is not a member of the European Union?",
    choices: ["Germany", "France", "Switzerland", "Spain"],
    correctAnswer: "Switzerland",
  },
  {
    question: "What is the capital of Turkey?",
    choices: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    correctAnswer: "Ankara",
  },
  {
    question: "What is the tallest mountain in the world?",
    choices: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount Denali"],
    correctAnswer: "Mount Everest",
  },
];


$(document).ready(function () {
  // Generate quiz questions
  var quizBox = $("#quiz-box");

  for (var i = 0; i < questions.length; i++) {
    quizBox.append("<div class='question'>");

    $(".question:last-child").append("<p class='d'> Q" + (i + 1) + ". " + questions[i].question + "</p>");

    for (var j = 0; j < questions[i].choices.length; j++) {
      var choiceId = "q" + i + "c" + j;
      $(".question:last-child").append(
        "<label><input type='radio' name='q" +
          i +
          "' value='" +
          questions[i].choices[j] +
          "' id='" +
          choiceId +
          "'>" +
          questions[i].choices[j] +
          "</label>"
      );
    }
  }

  var countCorrect = 0;

  $("button").click(function (event) {
    countCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      var selectedAnswer = $("input[name=q" + i + "]:checked").val();
      if (selectedAnswer === questions[i].correctAnswer) {
        countCorrect++;
      }
    }

    var scoreText = "Result of the quiz is: " + countCorrect + "/" + questions.length;
    if ($("#quiz-box").find("h2").length) {
      // Update existing score
      $("#quiz-box").find("h2").text(scoreText);
    } else {
      // Append new score
      $("#quiz-box").append("<h2>" + scoreText + "</h2>");
    }
  });
});
