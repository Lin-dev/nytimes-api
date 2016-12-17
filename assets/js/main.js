$('button').on('click', function(e) {
  e.preventDefault()
  var queryItem = $("#search").val();

  var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q="' + queryItem + '"&sort=newest&&api-key=0ae332e50b7a4da8a9a8c64c50efbbec';

  console.log(queryItem);

  $.ajax({
    url: url,
    method: 'GET'
  }).done(function(response){
    console.log(response);
    res = response;
    $("#results").empty();
    for(var i = 0; i < res.response.docs.length; i++){
      console.log(res.response.docs[i].headline.main)
      articleElements = $("<p>");
      hr = $('<hr/>');
      articleElements.text(res.response.docs[i].headline.main)
      articleElements.append(hr)
      $('#results').prepend(articleElements)
    }
  });

})
