var quizQuestions = [
    {
        question: "When was Google's Material Design first announced?",
        choices: ["April 22, 2014", "June 25, 2014", "July 19, 2014", "August 8, 2014"],
        correctAnswer: 1
    },
    {
        question: "Material Design is NOT available on which version of Android?",
        choices: ["Andriod Froyo", "Andriod Eclair 2.1", "Andriod Honeycomb", "Andriod Eclair 2.0"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is Google's Material Design Principle?",
        choices: ["Design is Life", "Motion First", "Material is the Metaphor", "Motion together with Design"],
        correctAnswer: 2
    },
    {
        question: "Material Design is still not available in which application?",
        choices: ["YouTube", "Google Docs", "Google Chrome", "Google Keep"],
        correctAnswer: 2
    },
    {
        question: "On May 2015, what NEW specifications did Google added into the Material Design's spec?",
        choices: ["Adaptive UI", "App Structure", "Data Tables", "Data Truncation"],
        correctAnswer: 0
    }
];



// Starter
var startFrom = 0;

// Track Selections
var correctSelections = 0;

$(document).ready(function () {

    
    $("#start").on('click', initialize);
    $("#next").on('click', evaluateQuestion);
    $("#restart").on('click', initializeRetry);



    


    
})


function initialize() {
    $("#quizbox").find("h1").remove();
    $("#quizbox").find("#start").remove();
    $("#quizbox").find("#next").css("display", "inline");
    addQuestion(startFrom)
}

function initializeRetry() {
    $("#quizbox").find("h1").remove();
    $("#quizbox").find("#restart").remove();
    $("#quizbox").find("#next").show();
}



function addQuestion(i) {
    if (i < quizQuestions.length) {
    $(".card-panel").prepend("<h1 class='animated fadeIn'></h1>");
    $(".card-panel").find("h1").text(quizQuestions[i].question).addClass("center-align white-text flow-text");
    $(".card-panel>h1").after('<form class="animated zoomIn">\
    <p><input name="group1" type="radio" id="selection1" value="0" required /><label class="white-text flow-text" for="selection1">' + quizQuestions[i].choices[0] + '</label></p>\
    <p><input name="group1" type="radio" id="selection2" value="1" required /><label class="white-text flow-text" for="selection2">' + quizQuestions[i].choices[1] + '</label></p>\
    <p><input name="group1" type="radio" id="selection3" value="2" required /><label class="white-text flow-text" for="selection3">' + quizQuestions[i].choices[2] + '</label></p>\
    <p><input name="group1" type="radio" id="selection4" value="3" required /><label class="white-text flow-text" for="selection4">' + quizQuestions[i].choices[3] + '</label></p>');

}   
}

function evaluateQuestion() {
    if ($( "input:radio[name=group1]:checked" ).val() == quizQuestions[startFrom].correctAnswer) {
        correctSelections ++;
        console.log(correctSelections);
        next();
        } else {
        console.log(correctSelections);
        next();
        }
}



function next() {
    if (startFrom == (quizQuestions.length-1)) {
        $(".card-panel").find("form").remove();
        $("#quizbox").find("h1").remove();
        $(".card-panel").prepend("<h1 class='animated bounceInDown'></h1>");
        $(".card-panel").find("h1").text('Your Score: ' + correctSelections + '/5').addClass("center-align white-text flow-text");
        $("#quizbox").find("#next").hide();
        $("#quizbox").find("#restart").css("display", "inline");
    } else {

        $(".card-panel").find("form").remove();
        $("#quizbox").find("h1").remove();
        startFrom ++;
        addQuestion(startFrom);
        console.log(startFrom);
    }
}

