// 1. Create an array of topics to house all of the topics that are pushed to the array from the input box. 

var topics = ["Steve Buscemi", "Cats", "hamsters"];

// 2. Create buttons for each to the text strings in the array and push to the DOM. 


// ==============================This dynamically adds our new buttons from the array ==============

// Loop runs through all of the items in the array. 
for(var i=0; i<topics.length; i++){


	// For each item in the array it creates a new button. 
	var newButton = $('<button>');
	// for each new button we are assign it a new class. 
	newButton.addClass('buttons');

	// adding a span to space out the buttons
	// For each new button we are assigning it a  data type of the topic word. 
	newButton.data("data-name", topics[i]);
	// For each button we are populating the text of the button with the button array value name. 
	newButton.html(topics[i] + " ");

	// Appending the button the
	$('#mainButtonDiv').append(newButton).append(" ").append(" ");
}

// ============================== On Submit Click function Creat New Button and pus to Main Button Div. ========================================

 $('#createButton').on("click", function(){

 	// getting the value from the input field. 
 	var searchTerm = $('#searchTerm').val();
 	// pushing the search Term in to the topics Array. 
 	topics.push(searchTerm);

 	// For each item in the array it creates a new button. 
	var newButton = $('<button>');
	// for each new button we are assign it a new class. 
	newButton.addClass('buttons');

	// adding a span to space out the buttons
	// For each new button we are assigning it a  data type of the topic word. 
	newButton.data("data-name", searchTerm);
	// For each button we are populating the text of the button with the button array value name. 
	newButton.html(searchTerm);

	// Appending the button the
	$('#mainButtonDiv').append(newButton).append(" ");
	console.log(topics);



// =========================== On the Click of the button call the GIphy API and push giphs to the page ==============================


 	// Giphy app key NLkRw2HinADcG3ZBurP4UZZRqJMJmf0u
// var url =  "https://api.giphy.com/v1/gifs/search?api_key=NLkRw2HinADcG3ZBurP4UZZRqJMJmf0u&q=" + query "&limit=10&offset=0G&lang=en"

// 		$.ajax({
// 		 	url: url, 
// 		 	method: 'GET',
// 		 }).done(function(response){


// 		 	})



// PATTTTTTT LOOK HERE. THINGS YOU NEED TO DO:
// To Do: 1.  Find out how to assing or use the data attribute and make data attriubte equal to the text in the box. 
// This should be done before calling the API. DOnt FUCK THIS UP. 

 });