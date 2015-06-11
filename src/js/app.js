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

//////////////////////////////////////////////
//                                          //
//          VAR DECLARATION                 //
//                                          //
//////////////////////////////////////////////

var trackQuestion = 0;
var selectionsArray = [];
var correctSelections = 0;


//////////////////////////////////////////////
//                                          //
//              JQUERY INVO                 //
//                                          //
//////////////////////////////////////////////

$(document).ready(function () {

    $(".card-panel__button--start").on("click", storeUsername);
    $(".card-panel__button--next").on("click", validateNext);
    $(".card-panel__button--back").on("click", validateBack);
    $(".card-panel__button--restart").on("click", restart);


});

//////////////////////////////////////////////
//                                          //
//          FUNCTIONS TO INVO               //
//                                          //
//////////////////////////////////////////////

function storeUsername() {
    var username = $("input:text").val();
    if (username === '') {
        $(".card-panel__error").css("display", 'block').find('p').text("Please Insert an I.D.");
         // $('.card-panel').after('<div class="card-panel__error">\n<p></p>\n</div>');
         // $(".card-panel__error").find('p').text("Please Input an I.D. !");
    } else {
        sessionStorage.setItem("username", username);
        // console.log(sessionStorage.getItem(("username")));
        $(".card-panel__error").hide();
        registerUsername();
        start();
    }
}
  
/////////////////////////////////////////////////


function registerUsername() {
    $(".card-panel__welcome--user").text("Welcome, " + sessionStorage.getItem(("username")) + " !").css("display", "block");
}

/////////////////////////////////////////////////

function showQuestion() {
    var i = trackQuestion; // This is just a hack to get thing to work
    $(".card-panel__question").prepend("<h1></h1>");
    $(".card-panel__question").find('h1').text(quizQuestions[i].question);
    $(".card-panel__question>h1").after('<form>\n<ul class="list">\n<li class="list__item">\n<label class="label--radio" for="selection1">\n<input type="radio" class="radio" name="group" id="selection1" value="0">' + quizQuestions[i].choices[0] + '\n</label>\n</li>\n<li class="list__item">\n<label class="label--radio" for="selection2">\n<input type="radio" class="radio" name="group" id="selection2" value="1">' + quizQuestions[i].choices[1] + '\n</label>\n</li>\n<li class="list__item">\n<label class="label--radio" for="selection3">\n<input type="radio" class="radio" name="group" id="selection3" value="2">' + quizQuestions[i].choices[2] + '\n</label>\n</li>\n<li class="list__item">\n<label class="label--radio" for="selection4">\n<input type="radio" class="radio" name="group" id="selection4" value="3">' + quizQuestions[i].choices[3] + '\n</label>\n</li>');
    $('input[value=' + selectionsArray[trackQuestion] +']').prop('checked', true);
    if (trackQuestion == 0) {
        $(".card-panel__button--back").hide();
    }
    
}

/////////////////////////////////////////////////

function start() {
        $('.card-panel__button--start').hide();
        $('.card-panel__welcome--guest').hide();
        $('.card-panel__username').hide();
        $('.card-panel__button--next').css("display", "inline-block");
        trackQuestion = 0;
        console.log(trackQuestion);
        showQuestion();
}

/////////////////////////////////////////////////

function next() {
    if (trackQuestion < quizQuestions.length) {
        trackQuestion++;
        $(".card-panel__question").empty();
        showQuestion();
        $('.card-panel__button--back').css("display", "inline-block");
        console.log(trackQuestion);
    }
}

/////////////////////////////////////////////////

function back() {
    if (trackQuestion < quizQuestions.length) {
        trackQuestion--;
        $(".card-panel__question").empty();
        showQuestion();
        console.log(trackQuestion);
    }
}
////////////////////////////////////////////////

function restart() {
    location.reload();
}


////////////////////////////////////////////////

function validateNext() {
    if ($('input:radio[name=group]:checked').val() == null) {
        $(".card-panel__error").css("display", 'block').find('p').text("Please Select an Answer !");
    } else if (trackQuestion == (quizQuestions.length - 1)) {
        storeSelection();
        evaluateSelections();
        showResults();

    } else {
        $(".card-panel__error").hide();
        storeSelection();
        next();
    }
}

function validateBack() {
    // if ($('input:radio[name=group]:checked').val() == null) {
    //     $(".card-panel__error").css("display", 'block').find('p').text("Please Select an Answer !");
    // } else {
        $(".card-panel__error").hide();
        back();
    
}

/////////////////////////////////////////////////

function storeSelection() {
    var selection = $('input:radio[name=group]:checked').val();
    selectionsArray[trackQuestion] = selection;
    console.log(selectionsArray);
}


/////////////////////////////////////////////////

function evaluateSelections() {
    for (var i =0; i < quizQuestions.length; i++) {
        if (selectionsArray[i] == quizQuestions[i].correctAnswer){
            correctSelections++;
        }
    }  console.log("Correct Selections: "+ correctSelections);
}

/////////////////////////////////////////////////

function showResults() {
    $(".card-panel__welcome--user").hide();
    $(".card-panel__question").hide();
    $(".card-panel__button--next").hide();
    $(".card-panel__button--back").hide();
    $(".card-panel__button--restart").css("display", "inline-block");

    $(".card-panel__welcome--message").prepend("<h1>fin.</h1>");
    $(".card-panel__welcome--message").append("<p>" + sessionStorage.getItem(("username")) + ", you scored " + correctSelections + "/5 !</p>");
}

