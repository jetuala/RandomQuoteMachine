$(document).ready(function(){
  var data = {
  method: "getQuote",
  lang: "en" ,
  format:"jsonp",
  dataType: "jsonp"
  };

  var callQuote = function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(jd) {
      $("#quote").html(jd.quoteText);
      $("#quoteAuthor").html(jd.quoteAuthor);
    });
  };

  callQuote();

  $("#newQuote").on("click", function(){
  // Only change code below this line.
    callQuote();
  });
});
