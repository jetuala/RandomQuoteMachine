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
    var textToTweet = $("#quote").text() + "  - " + $("#quoteAuthor").text();
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
    window.open(tweetLink,'_blank');
  }

  var tumblrQuote = function(){
    alert("Still working on Tumblr button! :)");
  }

  callQuote();

  $("#newQuote").on("click", function(){
    callQuote();
  });

  $("#twitterIcon").on("click", function(){
    tweetQuote();
  });

  $("#tumblrIcon").on("click", function(){
    tumblrQuote();
  })

});
