let todayDate = moment().format('MMMM D, YYYY');
$("#currentDay").html(todayDate);

//Loads the Data for the local Storage

$("#8 ").val(localStorage.getItem("8"));
$("#9 ").val(localStorage.getItem("9"));
$("#10 ").val(localStorage.getItem("10"));
$("#11 ").val(localStorage.getItem("11"));
$("#12 ").val(localStorage.getItem("12"));
$("#13 ").val(localStorage.getItem("13"));
$("#14 ").val(localStorage.getItem("14"));
$("#15 ").val(localStorage.getItem("15"));
$("#16 ").val(localStorage.getItem("16"));
$("#17 ").val(localStorage.getItem("17"));

$(".saveBtn").on("click", function() {
    var saveText = $(this).siblings(".description").val();
    var identityID = $(this).siblings(".description").attr("id");

    localStorage.setItem(identityID, saveText);
});

var timeTracker = function () {
    // get current hour
    var currentTime = moment().hour(); // military time; 20HR
    // loop time block
    $(".description").each(function () {
        var blockTime = ($(this).attr("id"));
        // target textarea's id
        // ...check IF the block is less than or greater than the current time
        if (blockTime < currentTime) { // ...if block is less than current time; change color to gray
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime > currentTime) {// ...if block is greater than current time; change color to green
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {// ...otherwise, currentTime is present; change color to red
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
};



    
timeTracker();