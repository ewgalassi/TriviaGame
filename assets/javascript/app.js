$(document).ready(function() {
    var question1 = {
        question: "Who is the head of Hufflepuff House?",
        answer1: "Professor Flitwick",
        answer2: "Professor McGonagall",
        answer3: "Madam Pomfrey",
        answer4: "Professor Sprout",
        answerImage: "<img src='#'>",
        correct: "answer4"
    }

    var question2 = {
        question: "Which of these is NOT an Unforgivable Curse?",
        answer1: "Cruciatus Curse",
        answer2: "Inferius Curse",
        answer3: "Avada Kedavra",
        answer4: "Imperius Curse",
        answerImage: "<img src='#'>",
        correct: "answer2"
    }

    var question3 = {
        question: "What was Harry's father's nickname?",
        answer1: "Moony",
        answer2: "Wormtail",
        answer3: "Prongs",
        answer4: "Padfoot",
        answerImage: "<img src='#'>",
        correct: "answer3"
    }

    var question4 = {
        question: "Who is the original owner of Hagrid's motorcycle?",
        answer1: "James Potter",
        answer2: "Mr. Weasley",
        answer3: "Sirius Black",
        answer4: "Hagrid always owned it!",
        answerImage: "<img src='#'>",
        correct: "answer3"   
    }

    var question5 = {
        question: "Who is the ghost of Slytherin House?",
        answer1: "The Bloody Baron",
        answer2: "Nearly Headless Nick",
        answer3: "The Grey Lady",
        answer4: "The Fat Friar",
        answerImage: "<img src='#'>",
        correct: "answer1"
    }

    var question6 = {
        question: "Voldemort did NOT make a horcrux out of an item from which Hogwarts house?",
        answer1: "Slytherin",
        answer2: "Hufflepuff",
        answer3: "Ravenclaw",
        answer4: "Gryffindor",
        answerImage: "<img src='#'>",
        correct: "answer4"
    }

    var question7 = {
        question: "After starting at Hogwarts, where did Harry first see his parents?",
        answer1: "The pensieve",
        answer2: "A photo album",
        answer3: "The Mirror of Erised",
        answer4: "A dream",
        answerImage: "<img src='#'>",
        correct: "answer3"
    }

    var question8 = {
        question: "What did Harry catch to earn a place on the Gryffindor quidditch team?",
        answer1: "A snitch",
        answer2: "A remembrall",
        answer3: "A golf ball",
        answer4: "Neville's toad",
        answerImage: "<img src='#'>",
        correct: "answer2"
    }

    var question9 = {
        question: "Where is St. Mungo's Hospital located?",
        answer1: "Beneath London",
        answer2: "Diagon Alley",
        answer3: "Platform 9 3/4",
        answer4: "An old department store",
        answerImage: "<img src='#'>",
        correct: "answer4"
    }

    var question10 = {
        question: "How many horcruxes are there?",
        answer1: "5",
        answer2: "6",
        answer3: "7",
        answer4: "8",
        answerImage: "<img src='#'>",
        correct: "answer3"
    }

    var questionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

    var questionCount = 0;
    var userAnswer;
    var readyGame = true;
    var current;

    function nextQuestion() {
        current = questionBank[questionCount];
        $("#question").text(current.question);
        $("#answer1").text(current.answer1);
        $("#answer2").text(current.answer2);
        $("#answer3").text(current.answer3);
        $("#answer4").text(current.answer4);
        questionCount++;
    }

    if (readyGame) {

        readyGame = false;
    };

    $("#answer1").click(function() {
        if (readyGame) {
            nextQuestion();
            readyGame = false;  
        }
    });

    $("li").click(function() {
        userAnswer = this.click;
        if (userAnswer === current.correct.value) {
            $("#rightWrong").text("You are correct!");
        } else {
            $("#rightWrong").text("That is incorrect");
        }
    });
    

})