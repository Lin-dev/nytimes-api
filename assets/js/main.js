// this attachs a click event to ALL buttons on the page
$('button').on('click', function(event) {

  // this stops stops the default behavior
  // and stops the page from reloading due to the submit buttons
  // default behavior.
  event.preventDefault();

  // this line grabs the value of the search input
  var queryItem = $("#search").val();

  // this is the api call with the queryItem
  // concatenated into the string
  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q="' + queryItem + '"&sort=newest&&api-key=0ae332e50b7a4da8a9a8c64c50efbbec';

  console.log(queryItem);

  // start of the Ajax call
  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(response){
    console.log(response);
    res = response;
    $("#results").empty();
    // for the number of results returned
    for(var i = 0; i < res.response.docs.length; i++){
      console.log(res.response.docs[i].headline.main);
      // create a new element
      articleElements = $("<div>");
      storySnippet = $("<p>").text(res.response.docs[i].snippet);
      articleElements.append(storySnippet);
      storyHeadline = $('<h4>').text(res.response.docs[i].headline.main);
      articleElements.prepend(storyHeadline);
      hr = $('<hr />');
      // make the text of the element the main headline
      articleElements.text(res.response.docs[i].headline.main);
      articleElements.append(hr);
      // attachs the results of the iteration to the 'results' div
      $('#results').prepend(articleElements);
    }
  });
})
