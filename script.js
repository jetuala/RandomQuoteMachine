$(document).ready(function(){
  var data = {
  method: "getQuote",
  lang: "en" ,
  format:"jsonp",
  dataType: "jsonp"
  };

  var callQuote = function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(x) {
      $("#quote").html(x.quoteText);
      $("#quoteAuthor").html(x.quoteAuthor);
    });
  };

  var tweetQuote = function(){
    alert("Twitter button pressed.");
    var textToTweet = $("#quote").text() + "  - " + $("#quoteAuthor").text();
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
    window.open(tweetLink,'_blank');
  }

  callQuote();

  $("#newQuote").on("click", function(){
    callQuote();
  });

  $("#twitterIcon").on("click", function(){
    tweetQuote();
  });

});
