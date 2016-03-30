// Makes the background image resize to fit the browser window.
// $.backstretch("http://i.imgur.com/iN6ZOdl.jpg");

// List of the quotes that can appear when the user click the 'New Quote' button. 
var quotes = [ 
  ["Everything starts as somebody's daydream.", "-Larry Niven"],
  ["The true delight is in the finding out rather than in the knowing.", "-Isaac Asimov"],
  ["Somewhere, something incredible is waiting to be known.", "-Carl Sagan"],
  ["Astronomy compels the soul to look upwards and leads us from this world to another.", "-Plato"],
  ["To confine our attention to terrestrial matters would be to limit the human spirit.", "-Stephen Hawking"],
  ["For my part I know nothing with any certainty but the sight of the stars makes me dream.", "-Vincent van Gogh"],
  ["Logic is the beginning of wisdom, not the end.", "-Leonard Nimoy"],
  ["If I have seen further than others, it is by standing upon the shoulders of giants.", "-Isaac Newton"],
  ["When it is darkest, men see the stars.", "-Ralph Waldo Emerson"],
  ["Astronomy, as nothing else can do, teaches men humility.", "-Arthur C. Clarke"],
  ["Keep your eyes on the stars, and your feet on the ground.", "-Theodore Roosevelt"],
  ["If people sat outside and looked at the stars each night, I'll bet they'd live a lot differently.", "-Bill Watterson"],
  ["No pessimist ever discovered the secret of the stars, or sailed to an uncharted land, or opened a new doorway for the human spirit.", "-Helen Keller"],
  ["I've loved the stars too fondly to be fearful of the night.", "-Galileo"],
  ["Logic will get you from A to B. Imagination will take you everywhere.", "-Albert Einstein"]
];

var num = Math.floor(Math.random() * 11);
console.log(num)
var lastNum = num;
$("#quote").html(quotes[num][0])
$("#author").html(quotes[num][1])

// Creating a click event for the 'New Quote' button.
$("#newQuote").click(function() {

     num = Math.floor(Math.random() * quotes.length );
    console.log(num)

    while (num == lastNum) {
      num = Math.floor(Math.random() * quotes.length  );
    }

    lastNum = num;

    $("#quote").html(quotes[num][0])
    $("#author").html(quotes[num][1])

    // $("#quote").fadeOut(function(){
    //   $("#quote").html(quotes[num][0]).fadeIn();
    // })
    // $("#author").fadeOut(function(){
    //   $("#author").html(quotes[num][1]).fadeIn();
    // })

    $("#twitterButton").empty();

    createTwitterButton();

})


var createTwitterButton = function() {
      twttr.widgets.createShareButton(
        '',
        document.getElementById('twitterButton'),
        {
        text: '"' + quotes[num][0] + '"' + " " + quotes[num][1],
        via: 'kjg310',
        size: 'large'
        }
    );
}

createTwitterButton();