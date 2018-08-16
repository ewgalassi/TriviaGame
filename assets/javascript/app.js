$(document).ready(function () {
    var question1 = {
        question: "Who is the head of Hufflepuff House?",
        answer1: "Professor Flitwick",
        answer2: "Professor McGonagall",
        answer3: "Madam Pomfrey",
        answer4: "Professor Sprout",
        answerImage: "<img src='assets/images/sprout-1.gif'>",
        correct: "answer4"
    }

    var question2 = {
        question: "Which of these is NOT an Unforgivable Curse?",
        answer1: "Cruciatus Curse",
        answer2: "Inferius Curse",
        answer3: "Avada Kedavra",
        answer4: "Imperius Curse",
        answerImage: "<img src='assets/images/inferi.gif'>",
        correct: "answer2"
    }

    var question3 = {
        question: "What was Harry's father's nickname?",
        answer1: "Moony",
        answer2: "Wormtail",
        answer3: "Prongs",
        answer4: "Padfoot",
        answerImage: "<img src='assets/images/prongs.gif'>",
        correct: "answer3"
    }

    var question4 = {
        question: "Who is the original owner of Hagrid's motorcycle?",
        answer1: "James Potter",
        answer2: "Mr. Weasley",
        answer3: "Sirius Black",
        answer4: "Hagrid always owned it!",
        answerImage: "<img src='assets/images/motorbike.gif'>",
        correct: "answer3"
    }

    var question5 = {
        question: "Who is the ghost of Slytherin House?",
        answer1: "The Bloody Baron",
        answer2: "Nearly Headless Nick",
        answer3: "The Grey Lady",
        answer4: "The Fat Friar",
        answerImage: "<img src='assets/images/bloody-baron.gif'>",
        correct: "answer1"
    }

    var question6 = {
        question: "Voldemort did NOT make a horcrux out of an item from which Hogwarts house?",
        answer1: "Slytherin",
        answer2: "Hufflepuff",
        answer3: "Ravenclaw",
        answer4: "Gryffindor",
        answerImage: "<img src='assets/images/gryffindor.gif'>",
        correct: "answer4"
    }

    var question7 = {
        question: "After starting at Hogwarts, where did Harry first see his parents?",
        answer1: "The pensieve",
        answer2: "A photo album",
        answer3: "The Mirror of Erised",
        answer4: "A dream",
        answerImage: "<img src='assets/images/mirror-of-erised.gif'>",
        correct: "answer3"
    }

    var question8 = {
        question: "What did Harry catch to earn a place on the Gryffindor quidditch team?",
        answer1: "A snitch",
        answer2: "A remembrall",
        answer3: "A golf ball",
        answer4: "Neville's toad",
        answerImage: "<img src='assets/images/remembrall.gif'>",
        correct: "answer2"
    }

    var question9 = {
        question: "Where is St. Mungo's Hospital located?",
        answer1: "Beneath London",
        answer2: "Diagon Alley",
        answer3: "Platform 9 3/4",
        answer4: "An old department store",
        answerImage: "<img src='assets/images/st-mungos.jpg'>",
        correct: "answer4"
    }

    var question10 = {
        question: "How many horcruxes are there?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        answer4: "8",
        answerImage: "<img src='assets/images/horcruxes.gif'>",
        correct: "answer3"
    }

    var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

    var questionCount = 0;
    var userAnswer;
    var readyGame = true;
    var current;
    var tooLate = false;
    var timeoutId;
    var correct = 0;
    var incorrect = 0;
    var timeLeft = 20;
    var answered = false;

    function nextQuestion() {
        unhighlight();
        answered = false;
        clearTimeout(timeoutId);
        $("#answerImage").html("");
        $("#rightWrong").text("");
        tooLate = false;
        current = questionBank[questionCount];
        $("#question").text(current.question);
        $("#answer1").text(current.answer1);
        $("#answer2").text(current.answer2);
        $("#answer3").text(current.answer3);
        $("#answer4").text(current.answer4);
        questionCount++;
        timeLeft = 20;
        intervalId = setInterval(timer, 1000);
        timeoutId = setTimeout(answerQuestion, 20000);
    }

    function endGame() {
        unhighlight();
        clearTimeout(timeoutId);
        clearInterval(intervalId);
        $("#numberRight").removeClass("hidden");
        $("#numberWrong").removeClass("hidden");
        $("#numberRight").text("You answered " + correct + " questions correctly!");
        $("#numberWrong").text("You answered " + incorrect + " questions incorrectly");
        $("#startButton").text("Click here to try again!");
        $("#startButton").fadeIn(1000);
        $("h2").addClass("hidden");
        $("#question").text("");
        $("#answer1").text("");
        $("#answer2").text("");
        $("#answer3").text("");
        $("#answer4").text("");
        readyGame = true;
        questionCount = 0;
        answered = false;
    }

    function answerQuestion() {
        $("#rightWrong").text("Time is up!");
        $("#answerImage").html(current.answerImage);
        document.getElementById(current.correct).classList.add("correct");
        clearInterval(intervalId);
        if (questionCount < 10) {
            timeoutId = setTimeout(nextQuestion, 5000);
        }
        tooLate = true;
        incorrect++;
        if (questionCount === 10) {
            timeoutId = setTimeout(endGame, 5000);
        }
    }

    function timer() {
        timeLeft--;
        $("#timeLeft").text(timeLeft);
    };

    function unhighlight() {
        $("li").removeClass("correct");
        $("li").removeClass("incorrect");
    };

    $("#startButton").hover(function () {
        $(this).css("background-color", "rgb(179, 255, 0)")
    }, function () {
        $(this).css("background-color", "rgb(10, 218, 3)")
    });


    $("#startButton").click(function () {
        if (readyGame) {
            nextQuestion();
            readyGame = false;
            $("#startButton").fadeOut(1000);
            $("h2").removeClass("hidden");
            $("#numberRight").addClass("hidden");
            $("#numberWrong").addClass("hidden");
            correct = 0;
            incorrect = 0;
        }
    });

    $("li").click(function () {
        clearInterval(intervalId);
        $("#answerImage").html(current.answerImage);
        if (!readyGame && !answered) {
            userAnswer = $(this).attr("id");
            answered = true;
            clearTimeout(timeoutId);
            if (userAnswer === current.correct && tooLate === false) {
                $("#rightWrong").text("You are correct!");
                $(this).addClass("correct");
                correct++;
            } else if (userAnswer !== current.correct && tooLate === false) {
                $("#rightWrong").text("That is incorrect");
                $(this).addClass("incorrect");
                document.getElementById(current.correct).classList.add("correct");
                incorrect++;
            };
            if (questionCount < 10) {
                timeoutId = setTimeout(nextQuestion, 5000);
            }
        };
        if (questionCount === 10) {
            timeoutId = setTimeout(endGame, 5000);
        }
    });


})