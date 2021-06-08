//read data in from file
var active = document.getElementById("header").getAttribute("active");
var path =""

/*
generate this:

<div class="topnav">
    <a href="/" class="name">ingrid wu</a>
    <a href="/">info</a>
    <a href="/">work</a>
    <a href="/play">play</a>
</div>
*/
var text ="<div class=\'topnav\'>\r\n\t\t\t<a href=\"/\" class=\"name\">ingrid wu<\/a>\r\n\t\t\t<a href=\"\\#about\">info<\/a>\r\n\t\t\t<a href=\"/\">work<\/a>\r\n\t\t\t<a href=\'/play\'>play<\/a>\r\n\t\t<\/div>";

//add active class
/*
WIP
-needs some better way to account for url/negative length
*/
var results = text.indexOf(active);
if(active=='play'){
    var firstoccurance=results+5;
}
else{
    var firstoccurance=results+-1;
}
text = text.slice(0, firstoccurance) + " class=\"active\" " + text.slice(firstoccurance);

//output inside header div
document.getElementById("header").innerHTML = text;