$(document).ready(function() {
  $("#newQuote").on("click", function(){
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=15456&format=jsonp&jsonp=showQuote&lang=en"), function(json){
      console.log(json.quoteText);
      $("#quote").html(JSON.stringify(json.quoteText));
    };
  });
})
