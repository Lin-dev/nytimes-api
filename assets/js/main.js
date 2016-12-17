var queryItem = $("#search-term").val();

var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q="' + queryItem + '"&sort=newest&&api-key=0ae332e50b7a4da8a9a8c64c50efbbec'

console.log(queryItem);

$.ajax({
  url: url,
  method: 'GET'
}).done(function(response){
  res = response;
  // for(var i = 0; i < res.response.docs.length; i++){
  //   console.log(res.response.docs[i].headline.main)
  // }
});
