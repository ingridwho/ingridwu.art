//read data in from file
var active = document.getElementById("header").getAttribute("active");
var path =""

/*
generate this:

<div class="topnav">
    <a href="/" class="name">ingrid wu</a>
    <a href="/">info</a>
    <a href="/">work</a>
    <a href="/">art</a>
    <a href="/">photo</a>
</div>
*/
var text ="<div class=\'topnav\'>\r\n\t\t\t<a href=\"/\" class=\"name\">ingrid wu<\/a>\r\n\t\t\t<a href=\"/#about\">info<\/a>\r\n\t\t\t<a href=\"/\">work<\/a>\r\n\t\t\t<a href=\'/art\'>art<\/a>\r\n\t\t\t<a href=\'/photo\'>photo<\/a>\r\n\t\t<\/div>";


//add active class
/*
WIP
-needs some better way to account for url/negative length
*/
var results = text.indexOf("href='/" + active + "'");

if(results !== -1){
    var firstoccurance = results + 1; // insert after <a
    text = text.slice(0, firstoccurance) + " class=\"active\"" + text.slice(firstoccurance);
}


//output inside header div
document.getElementById("header").innerHTML = text;