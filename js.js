


var screen = $(".infoScreen");


$("button").click(build);



function build(){

  var a =    $(".one.answer").val();
  var b =    $(".two.answer").val();
  var c =    $(".three.answer").val();
  var d =    $(".four.answer").val();
  var e =    $(".five.answer").val();
  var f =    $(".six.answer").val();
  var g =    $(".seven.answer").val();
  var h =    $(".eight.answer").val();
  var i =    $(".nine.answer").val();
  var j =    $(".ten.answer").val();
  var k =    $(".eleven.answer").val();
  var l =    $(".twelve.answer").val();
  var m =    $(".thirteen.answer").val();
  var n =    $(".fourteen.answer").val();
  var o =    $(".fifteen.answer").val();
  var p =    $(".sixteen.answer").val();

  var arr = [e,f,g,h,i,j,k,l,m,n,o]


  screen.html("");
  screen.addClass("newScreen");
  screen.removeClass("infoScreen");
 screen = $(".newScreen");


  screen.append("<p>HTML content needed will be:</p> ");
  screen.append(d);
screen.append("<p>CSS styling of content needed will be:</p>")

  for (var i = 0;i<arr.length; i++){
    screen.append(arr[i] + "<br>");
  }
  screen.append("<p>JS behavior needed will be:</p>");
screen.append(p);
  screen.append("<p>If the HTML, CSS and JS files will communicate: " + c + " to the audience: " + a + " who are the type of people to be like: " + b + " then copy and paste this info to a google doc, start sketching and coding!</p>");
}